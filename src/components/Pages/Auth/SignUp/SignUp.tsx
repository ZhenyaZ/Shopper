import React from 'react';
import styles from './SignUp.module.css';
import SignUpForm from './SignUpForm/SignUpForm';
function SignUp() {
  return (
    <section className={styles['sign-up']}>
      <div className={`${styles['sign-up-content']} container`}>
        <SignUpForm />
      </div>
    </section>
  );
}

export default SignUp;
