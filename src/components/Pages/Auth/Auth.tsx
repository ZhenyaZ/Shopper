import { Link } from 'react-router-dom';
import style from './Auth.module.css';
function Auth() {
  return (
    <div className={style['auth']}>
      <div className={`${style['auth-content']} container`}>
        <div className={style['auth-content__title']}>
          <h1>Auth</h1>
        </div>
        <div className={style['auth-content__choiceAuth']}>
          <div className={style['auth-content__choiceAuth__signin']}>
            <div className={style['auth-content__choiceAuth__signin__description']}>
              <h2>Already have an account?</h2>
            </div>
            <div className={`${style['auth-content__choiceAuth__signin__link']} button-stylized`}>
              <button>
                <Link to={'/auth/signin'}>Sign In</Link>
              </button>
            </div>
          </div>
          <div className={style['auth-content__choiceAuth__signup']}>
            <div className={style['auth-content__choiceAuth__signup__description']}>
              <h2>Don't have an account?</h2>
            </div>
            <div className={`${style['auth-content__choiceAuth__signup__link']} button-stylized`}>
              <button>
                <Link to={'/auth/signup'}>Sign Up</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
