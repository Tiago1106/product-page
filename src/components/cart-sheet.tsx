import { useCartStore } from "@/store/useCartStore";
import { Button } from "@/components/ui/button";
import { Minus, Plus, ShoppingCart, Trash } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export function CartSheet() {
  const { items, removeItem, clearCart, updateQuantity } = useCartStore();

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <ShoppingCart className="h-5 w-5" />
          <Badge variant="cart">{items.length}</Badge>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="text-lg">Seu carrinho</SheetTitle>
        </SheetHeader>
        <div className="mt-4 flex flex-col gap-4 max-h-[70vh] overflow-y-auto p-4">
          {items.length === 0 ? (
            <p className="text-muted-foreground">Seu carrinho está vazio.</p>
          ) : (
            items.map((item, index) => (
              <div key={index} className="flex gap-4 items-center border-b pb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={60}
                  height={60}
                  className="rounded object-cover"
                />
                <div className="flex-1">
                  <p className="font-medium text-sm">{item.title}</p>
                  <p className="text-xs text-muted-foreground">Tamanho: {item.sizeId ?? "Único"}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Button
                      onClick={() => updateQuantity(item.id, item.sizeId, item.quantity - 1)}
                      disabled={item.quantity === 1}
                      variant="outline"
                    >
                      <Minus />
                    </Button>
                    <div className="flex items-center gap-2 p-2">
                      <span className="text-lg">{item.quantity}</span>
                    </div>
                    <Button
                      onClick={() => updateQuantity(item.id, item.sizeId, item.quantity + 1)}
                      variant="outline"
                    >
                      <Plus />
                    </Button>
                  </div>
                  <p className="text-sm font-semibold">R$ {(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <Button size="icon" variant="ghost" onClick={() => removeItem(item.id, item.sizeId)}>
                  <Trash className="h-5 w-5" />
                </Button>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="mt-6 border-t p-4">
            <div className="flex justify-between mb-4">
              <span className="text-sm font-medium">Total</span>
              <span className="text-sm font-semibold">R$ {total.toFixed(2)}</span>
            </div>
            <div className="flex gap-2">
              <Button className="w-full">Finalizar compra</Button>
              <Button variant="outline" className="w-full" onClick={clearCart}>
                Limpar
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
