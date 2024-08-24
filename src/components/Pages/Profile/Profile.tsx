import styles from './Profile.module.css';
import { useUserStore } from '../../../store/UserStore';

function Profile() {
  const {login, name, email } = useUserStore((state) => state.data);

  return (
    <div className={styles.profile}>
      <div className={`${styles['profile-content']} container`}>
        <div className={styles['profile__title']}>Profile</div>
        <div className={styles['profile__user']}>
          <div className={styles['profile__user-name']}>Name: {name}</div>
          <div className={styles['profile__user-name']}>Login: {login}</div>
          <div className={styles['profile__user-email']}>E-mail: {email}</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
