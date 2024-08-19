interface RegisterUser {
  name: string;
  login: string;
  email: string;
  password: string;
}

interface LoginUser {
  login: string;
  password: string;
}
export type { RegisterUser, LoginUser };
