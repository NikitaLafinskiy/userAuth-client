export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  about: string;
}

export interface Response {
  user: User;
}

export type getParams = (
  url: string,
  withCredentials: true
) => Promise<User | unknown>;
