import { AuthForm } from 'components/templates';
import { AuthWrapper } from 'components/layouts';

export default function login() {
  const initialValues = {
    email: '',
    password: '',
  };

  return (
    <AuthWrapper>
      <AuthForm initialValues={initialValues} isRegister={false} />
    </AuthWrapper>
  );
}
