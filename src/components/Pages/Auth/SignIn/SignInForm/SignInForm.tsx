import React from 'react';
import style from './SignInForm.module.css';
import { useNavigate } from 'react-router-dom';
import { SignIn } from '../../../../../api/auth';
import { useUserStore } from '../../../../../store/UserStore';

type responseType = {
  data: {
    message: string;
    status: number;
    data: {
      _id: string;
      login: string;
      name: string;
      email: string;
    };
  };
  status: number;
  response?: {
    data: { message: string };
    status: number;
  };
};

function SignInForm() {
  const navigate = useNavigate();
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [message, setMessage] = React.useState<{ message: string }>({} as { message: string });
  const setAuth = useUserStore((state) => state.setIsAuth);
  const setUser = useUserStore((state) => state.setUser);

  const onAuthHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const signInPromise: Promise<responseType> = SignIn({ login, password }) as Promise<responseType>;
    signInPromise.then((response: responseType) => {
      if (response.response) {
        setMessage(response.response.data);
      } else {
        setAuth(true);
        setUser(response.data.data);
        setMessage({message: response.data.message});
        navigate(`/profile/${response.data.data._id}`, { state: { user: response.data.data } });
      }
    });
  };

  return (
    <form>
      <div className={style['form-controllers']}>
        <div className={style['form-controllers__login']}>
          <label htmlFor="login" className="formattedLabel">
            Login
          </label>
          <input type="text" id="login" value={login} onChange={(e) => setLogin(e.target.value)} />
        </div>
        <div className={style['form-controllers__password']}>
          <label htmlFor="password" className="formattedLabel">
            Password
          </label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className={`${style['form-controllers__signin']} button-stylized`}>
          <button
            type={'button'}
            onClick={(e) => {
              onAuthHandler(e);
            }}>
            Sign In
          </button>
        </div>
        {message ? <div className={style['form-controllers__message']}>{message.message}</div> : null}
      </div>
    </form>
  );
}

export default SignInForm;
