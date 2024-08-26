import parser from 'html-react-parser';
import styles from './ProfileOrders.module.css';
import { useUserStore } from '../../../../store/UserStore';
import { useQuery } from '@tanstack/react-query';
import { getOrders } from '../../../../api/getOrders';
import Product from '../../../../types/Products';

interface Order {
  _id: string;
  orderID: string;
  products: Product[];
  total: number;
}

function ProfileOrders() {
  const user = useUserStore((state) => state);
  const query = useQuery({ queryKey: ['profileOrders'], queryFn: () => getOrders(user.data._id) });
  return (
    <div className={styles['profile__orders-content']}>
      {query.isLoading
        ? 'Loading...'
        : query.data?.data.orders.map((order: Order) => (
            <div className={styles['profile__orders-content__order']} key={order.orderID}>
              <span>Order ID: {order.orderID}</span>
              <span>Total price: ${order.total}</span>
              <div className={styles['profile__orders-content__order__products']}>
                {order.products.map((product) => (
                  <div className={styles['profile__orders-content__order__product']} key={product._id}>
                    {parser(product.title)} x {product.quantity}
                  </div>
                ))}
              </div>
            </div>
          ))}
    </div>
  );
}

export default ProfileOrders;
