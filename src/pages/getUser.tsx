import { GetUser } from 'components/templates';
import { AuthWrapper } from 'components/layouts';

function getUser() {
  return (
    <AuthWrapper>
      <GetUser />
    </AuthWrapper>
  );
}

export default getUser;
