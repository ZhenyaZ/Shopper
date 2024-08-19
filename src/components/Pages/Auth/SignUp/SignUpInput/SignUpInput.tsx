import React from 'react';
import styles from '../SignUpForm/SignUpForm.module.css';
import { RegisterUser } from '../../../../../types/User';

interface SignUpInputProps {
  onSignUpHandler: (e: React.MouseEvent<HTMLButtonElement>, data: RegisterUser) => void;
}

function SignUpInput(props: SignUpInputProps) {
  const patternEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const [name, setName] = React.useState('');
  const [login, setLogin] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const validation = RegExp(patternEmail).test(email) && password.length >= 8 && name.length > 0 && login.length > 0;
  const emailValidation = RegExp(patternEmail).test(email);
  const passwordValidation = password.length >= 8;
  const nameValidation = name.length > 0;
  const loginValidation = login.length >= 5;
  return (
    <>
      <div className={styles['form-controllers__name']}>
        <label htmlFor="name" className="formattedLabel">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={nameValidation ? `${styles['valid-input']}` : `${styles['invalid-input']}`}
        />
      </div>
      <div className={styles['form-controllers__login']}>
        <label htmlFor="login" className="formattedLabel">
          Login
        </label>
        <input
          type="text"
          id="login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          className={loginValidation ? `${styles['valid-input']}` : `${styles['invalid-input']}`}
        />
      </div>

      <div className={styles['form-controllers__email']}>
        <label htmlFor="email" className="formattedLabel">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={emailValidation ? `${styles['valid-input']}` : `${styles['invalid-input']}`}
        />
      </div>
      <div className={styles['form-controllers__password']}>
        <label htmlFor="password" className="formattedLabel">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={passwordValidation ? `${styles['valid-input']}` : `${styles['invalid-input']}`}
        />
        <div className={`${styles['form-controllers__password__description']}`}>
          <span>*Password must be at least 8 characters</span>
        </div>
      </div>
      <div className={`${styles['form-controllers__signin']} button-stylized`}>
        <button
          disabled={!validation}
          type={'button'}
          onClick={(e) => props.onSignUpHandler(e, { name, login, email, password })}>
          Sign Up
        </button>
      </div>
    </>
  );
}

export default SignUpInput;
