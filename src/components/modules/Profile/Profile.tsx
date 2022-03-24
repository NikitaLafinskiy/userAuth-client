import { ProfileProps } from 'types/modules/Profile.template';
import './Profile.scss';
import { Header } from 'components/elements';

function Profile({ user, className, style }: ProfileProps) {
  const classes = className
    ? `modules__profile ${className}`
    : `modules__profile`;
  const userProfile = user && (
    <div className={classes} style={style}>
      <Header>{user.username}</Header>
      <Header>{user.email}</Header>
      <Header>{user.about}</Header>
    </div>
  );
  return <>{userProfile}</>;
}

export default Profile;
