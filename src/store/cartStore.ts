import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CartItem } from '@/types';

interface CartState {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (itemId: number) => void;
    increaseQuantity: (itemId: number) => void;
    decreaseQuantity: (itemId: number) => void;
    getTotalItems: () => number;
    getSubtotal: () => number;
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            cartItems: [],
            addToCart: (item) =>
                set((state) => {
                    const existingItem = state.cartItems.find((i) => i.id === item.id);
                    if (existingItem) {
                        return {
                            cartItems: state.cartItems.map((i) =>
                                i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
                            ),
                        };
                    }
                    return { cartItems: [...state.cartItems, { ...item }] };
                }),
            removeFromCart: (itemId) =>
                set((state) => ({ cartItems: state.cartItems.filter((i) => i.id !== itemId) })),
            increaseQuantity: (itemId) =>
                set((state) => ({
                    cartItems: state.cartItems.map((i) =>
                        i.id === itemId ? { ...i, quantity: i.quantity + 1 } : i
                    ),
                })),
            decreaseQuantity: (itemId) =>
                set((state) => ({
                    cartItems: state.cartItems.map((i) =>
                        i.id === itemId && i.quantity > 1 ? { ...i, quantity: i.quantity - 1 } : i
                    ),
                })),
            getTotalItems: () => {
                return get().cartItems.reduce((total, item) => total + item.quantity, 0);
            },
            getSubtotal: () => {
                return get().cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
            }
        }),
        {
            name: 'cart-storage',
        }
    )
);
