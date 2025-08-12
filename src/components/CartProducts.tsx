import { useCartStore } from '@/store/cartStore';
import { Button } from '@/components/ui/button';
import { CartItem } from './CartItem';

export function CartProducts() {
  const { cartItems, getTotalItems, getSubtotal } = useCartStore();

  return (
    <div className="flex flex-col h-full bg-white text-black">
      <div className="p-6">
        <h2 className="text-2xl hf space-x-4">
          <span>Your Cart</span>
          <span className="text-[#ff6900]">{getTotalItems()}</span>
        </h2>
      </div>

      <hr className="border-gray-200" />

      {/* cart items */}
      <div className="flex-1 overflow-y-auto px-4">
        <div
          className={`flex flex-col gap-4 min-h-full ${
            cartItems.length > 0 ? 'justify-center' : 'justify-center items-center'
          }`}
        >
          {cartItems.length > 0 ? (
            cartItems.map(item => (
              <div key={item.id} className="w-full">
                <CartItem item={item} />
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 flex flex-col gap-1 pf">
              <span>Your cart is empty.</span>
              <span>Add some items to the cart</span>
            </p>
          )}
        </div>
      </div>

      <hr className="border-gray-200" />

      {/* checkout and subtotal */}
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg font-semibold">Subtotal:</p>
          <p className="text-lg font-semibold text-[#ff6900]">Ksh. {getSubtotal().toFixed(2)}</p>
        </div>
        <Button className="w-full text-white" style={{ backgroundColor: '#ff6900' }}>
          Checkout
        </Button>
      </div>

    </div>
  );
}
