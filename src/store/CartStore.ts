import { create } from 'zustand';
import Product from '../types/Products';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface ProductState extends Product {
  quantity: number;
}

interface CartState {
  products: ProductState[];
  total: number;
  setTotal: (total: number) => void;
  addProduct: (product: ProductState) => void;
  removeProduct: (_id: string) => void;
  increaseQuantity: (_id: string) => void;
  decreaseQuantity: (_id: string) => void;
  clearCart: () => void;
}

const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      products: [],
      total: 0,
      addProduct(product: ProductState) {
        set((state) => {
          const existingProduct = state.products.some((p) => p._id === product._id);

          if (existingProduct) {
            return {
              products: state.products.map((prod) =>
                prod._id === product._id ? { ...prod, quantity: prod.quantity + 1 } : prod,
              ),
            };
          } else {
            return {
              products: [...state.products, { ...product, quantity: 1 }],
            };
          }
        });
      },
      removeProduct(_id) {
        set((state) => ({ products: state.products.filter((product) => product._id !== _id) }));
      },
      increaseQuantity(_id) {
        set((state) => ({
          products: state.products.map((prod) => (prod._id === _id ? { ...prod, quantity: prod.quantity + 1 } : prod)),
        }));
      },
      decreaseQuantity(_id) {
        set((state) => {
          if (state.products.some((prod) => prod._id === _id && prod.quantity > 1)) {
            return {
              products: state.products.map((prod) =>
                prod._id === _id ? { ...prod, quantity: prod.quantity - 1 } : prod,
              ),
            };
          } else {
            return { products: state.products.filter((prod) => prod._id !== _id) };
          }
        });
      },
      clearCart() {
        set(() => ({ products: [] }));
        set(() => ({ total: 0 }));
      },
      setTotal(total) {
        set(() => ({ total: total }));
      },
    }),
    { name: 'cart storage', storage: createJSONStorage(() => sessionStorage) },
  ),
);

export default useCartStore;
