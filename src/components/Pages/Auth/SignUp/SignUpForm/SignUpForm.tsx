import React from 'react';
import styles from './SignUpForm.module.css';
import { SignUp } from '../../../../../api/register';
import SignUpInput from '../SignUpInput/SignUpInput';
import { RegisterUser } from '../../../../../types/User';
function SignUpForm() {
  const [message, setMessage] = React.useState<{ message: string }>({} as { message: string });

  const onSignUpHandler = (e: React.MouseEvent<HTMLButtonElement>, data: RegisterUser) => {
    e.preventDefault();
    SignUp(data).then((response) => {
      if (response.response) {
        setMessage(response.response.data);
      } else {
        setMessage(response.data);
      }
    });
  };
  return (
    <form>
      <div className={styles['form-controllers']}>
        <SignUpInput onSignUpHandler={onSignUpHandler} />
        {message ? <div className={styles['form-controllers__message']}>{message.message}</div> : null}
      </div>
    </form>
  );
}

export default SignUpForm;
