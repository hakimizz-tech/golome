import { useCartStore } from '@/store/cartStore';
import { Button } from '@/components/ui/button';
import { Trash2, Plus, Minus } from 'lucide-react';
import type { CartItem as CartItemType } from '@/types';
import { OptimizedImage } from '@/components/optimized-image';

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCartStore();

  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center gap-4">
        <OptimizedImage
          publicId={item.images}
          alt={item.name}
          className="w-16 h-16 object-cover rounded-md"
          width={64}
          height={64}
          objectFit="cover"
        />
        <div>
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-sm text-gray-500">ksh {item.price.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => decreaseQuantity(item.id)}>
            <Minus className="h-4 w-4" />
          </Button>
          <span>{item.quantity}</span>
          <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => increaseQuantity(item.id)}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)}>
          <Trash2 className="h-5 w-5 text-red-500" />
        </Button>
      </div>
    </div>
  );
}
