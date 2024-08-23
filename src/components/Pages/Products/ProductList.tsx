import Card from '../../UI/Card/Card';
import { ProductsProps } from '../../../types/Props';
import { useNavigate } from 'react-router-dom';

function ProductList(props: ProductsProps) {
  const navigate = useNavigate();
  return (
    <>
      {props.products.length !== 0 ? (
        props.products.map((product) => {
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
