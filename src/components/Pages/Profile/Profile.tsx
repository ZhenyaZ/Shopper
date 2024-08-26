import { useUserStore } from '../../../store/UserStore';
import styles from './Profile.module.css';
import ProfileOrders from './ProfileOrders/ProfileOrders';

function Profile() {
  const { name, login, email } = useUserStore((state) => state.data);
  return (
    <div className={styles.profile}>
      <div className={`${styles['profile-content']} container`}>
        <div className={styles['profile__title']}>Hello {login}</div>
        <div className={styles['profile-user__info']}>
          <div className={styles['profile-user__info__name']}>Name: {name}</div>
          <div className={styles['profile-user__info__name']}>Login: {login}</div>
          <div className={styles['profile-user__info__email']}>E-mail: {email}</div>
        </div>
        <div className={styles['profile__orders']}>
          <div className={styles['profile__orders-title']}>
            <h2>Your orders</h2>
          </div>
          <ProfileOrders />
        </div>
      </div>
    </div>
  );
}

export default Profile;
