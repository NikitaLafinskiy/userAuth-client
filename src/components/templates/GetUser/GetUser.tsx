import { authGet } from 'utils/fetchers';
import { useEffect, useState } from 'react';
import { User } from 'types/utils/authGet.template';
import { Profile } from 'components/modules';

export default function GetUser() {
  const [user, setUser] = useState<User>({
    id: 0,
    username: '',
    email: '',
    password: '',
    about: '',
  });

  useEffect(() => {
    authGet('api/getUser', true).then((user) => {
      setUser(user as User);
    });
  }, []);

  return <Profile user={user} />;
}
