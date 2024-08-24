import Card from '../../UI/Card/Card';
import { ProductsProps } from '../../../types/Props';
import { useNavigate } from 'react-router-dom';
import Product from '../../../types/Products';

function ProductList({ productsProp }: ProductsProps) {
  const navigate = useNavigate();
  const [products] = productsProp;

  return (
    <>
      {products.length !== 0 ? (
        products.map((product) => {
          return (
            <Card
              key={product._id}
              _id={product._id}
              image={product.image}
              title={product.title}
              price={product.price}
              onClick={() => {
                navigate(`/product/${product._id}`, { state: { product: product } });
              }}
            />
          );
        })
      ) : (
        <span>Loading...</span>
      )}
    </>
  );
}

export default ProductList;
