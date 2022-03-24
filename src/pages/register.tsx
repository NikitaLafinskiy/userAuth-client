import { AuthForm } from 'components/templates';
import { AuthWrapper } from 'components/layouts';

export default function register() {
  const initialValues = {
    username: '',
    email: '',
    password: '',
    about: '',
  };

  return (
    <AuthWrapper>
      <AuthForm initialValues={initialValues} isRegister={true} />
    </AuthWrapper>
  );
}
