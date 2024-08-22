import React from 'react';
import SignInForm from './SignInForm/SignInForm';
import style from './SignIn.module.css';
import { AuthProps } from '../../../../types/Props';

function SignIn(props: AuthProps) {
  return (
    <section className={`${style['sign-in']}`}>
      <div className={`${style['sign-in-content']} container`}>
        <SignInForm setIsAuth={props.setIsAuth} setUser={props.setUser} />
      </div>
    </section>
  );
}

export default SignIn;
