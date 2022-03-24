export interface AuthFormProps {
  isRegister: boolean;
  initialValues: {
    username?: string;
    email: string;
    password: string;
    about?: string;
  };
}

export interface AuthFormValues {
  username?: string;
  email: string;
  password: string;
  about?: string;
}
