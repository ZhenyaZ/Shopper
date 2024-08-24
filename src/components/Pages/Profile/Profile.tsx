import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Profile.module.css';

function Profile() {
  const location = useLocation();
  const { _id, login, name, email } = location.state.user;

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
