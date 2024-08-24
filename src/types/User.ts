interface RegisterUser {
  name: string;
  login: string;
  email: string;
  password: string;
}

interface LoginUser {
  _id: string;
  login: string;
  name: string;
  email: string;
  password: string;
}
export type { RegisterUser, LoginUser };
