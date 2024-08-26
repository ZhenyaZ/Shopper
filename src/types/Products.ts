interface Product {
  _id: string;
  title: string;
  price: number;
  image: string;
  description?: string;
  [key: string]: any;
}

export default Product;
