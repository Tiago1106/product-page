// Atualização na Store, para garantir que o estado seja acessado corretamente
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItem {
  id: string;
  title: string;
  image: string;
  sizeId: string | null;
  quantity: number;
  price: number;
}

interface CartState {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string, sizeId: string | null) => void;
  updateQuantity: (id: string, sizeId: string | null, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isCartOpen: false,
      addItem: (item) => {
        const existingItem = get().items.find(
          (i) => i.id === item.id && i.sizeId === item.sizeId
        );
        if (existingItem) {
          set({
            items: get().items.map((i) =>
              i.id === item.id && i.sizeId === item.sizeId
                ? { ...i, quantity: i.quantity + item.quantity }
                : i
            ),
          });
        } else {
          set({ items: [...get().items, item] });
        }
      },
      removeItem: (id, sizeId) => {
        set({
          items: get().items.filter((i) => i.id !== id || i.sizeId !== sizeId),
        });
      },
      updateQuantity: (id, sizeId, quantity) => {
        set({
          items: get().items.map((i) =>
            i.id === id && i.sizeId === sizeId
              ? { ...i, quantity }
              : i
          ),
        });
      },
      clearCart: () => set({ items: [] }),
    }),
    {
      name: "cart-storage", // localStorage key
    }
  )
);
