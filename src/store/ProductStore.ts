import { create } from 'zustand';
import Product from '../types/Products';

interface ProductStore {
  products: Product[];
  topProduct: Product[];
  addProduct: (product: Product) => void;
  addTopProduct: (product: Product) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  topProduct: [],
  addProduct: (product) => set((state) => ({ products: [product] })),
  addTopProduct: (product) => set((state) => ({ topProduct: state.topProduct.concat(product) })),
}));
