import { create } from 'zustand';
import Product from '../types/Products';

interface ProductStore {
  products: Product[];
  addProduct: (product: Product) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  addProduct: (product) => set((state) => ({ products: state.products.concat(product) })),
}));
