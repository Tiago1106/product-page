import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

const EXPIRE_TIME = 1 * 60 * 1000;

interface ProductVariantStore {
  selectedVariantId: string;
  selectedSizeId: string | null;
  selectedImage: string;
  setSelectedVariantId: (id: string) => void;
  setSelectedSizeId: (id: string | null) => void;
  setSelectedImage: (image: string) => void;
}

const useProductVariantStore = create(
  persist<ProductVariantStore>(
    (set) => ({
      selectedVariantId: '',
      selectedSizeId: null,
      selectedImage: '',
      setSelectedVariantId: (id: string) => set({ selectedVariantId: id }),
      setSelectedSizeId: (id: string | null) => set({ selectedSizeId: id }),
      setSelectedImage: (image: string) => set({ selectedImage: image }),
    }),
    {
      name: 'product-variants-storage',
      storage: createJSONStorage(() => localStorage),
      version: 1,
      migrate: (persistedState: unknown) => {
        if (persistedState && typeof persistedState === 'object') {
          const storedTime = (persistedState as { _timestamp?: number })._timestamp || 0;
          if (Date.now() - storedTime > EXPIRE_TIME) {
            return {} as ProductVariantStore;
          }
          return { ...persistedState, _timestamp: Date.now() } as unknown as ProductVariantStore;
        }
        return {} as ProductVariantStore;
      },
    }
  )
);

export default useProductVariantStore;