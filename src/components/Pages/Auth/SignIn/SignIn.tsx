import SignInForm from './SignInForm/SignInForm';
import style from './SignIn.module.css';

function SignIn() {
  return (
    <section className={`${style['sign-in']}`}>
      <div className={`${style['sign-in-content']} container`}>
        <SignInForm />
      </div>
    </section>
  );
}

export default SignIn;
