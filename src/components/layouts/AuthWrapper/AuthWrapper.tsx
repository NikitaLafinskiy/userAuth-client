import { AuthWrapperProps } from 'types/layouts/AuthWrapper.template';
import './AuthWrapper.scss';

function AuthWrapper({ children }: AuthWrapperProps) {
  return <div className='layouts__authWrapper'>{children}</div>;
}

export default AuthWrapper;
