import { User } from 'types/utils/authGet.template';

export interface ProfileProps {
  user: User;
  className?: string;
  style?: React.CSSProperties;
}
