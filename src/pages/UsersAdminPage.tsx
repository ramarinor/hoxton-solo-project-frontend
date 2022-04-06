import { useEffect, useState } from 'react';
import { useStore } from '../store';
import User from '../components/User/User';

function UsersAdminPage() {
  const [users, setUsers] = useState<User[]>([]);
  const setModalMessage = useStore((store) => store.setModalMessage);

  useEffect(() => {
    fetch('http://localhost:4000/users', {
      headers: {
        Authorization: localStorage.token
      }
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.error) {
          setModalMessage(data.error);
        } else {
          setUsers(data.users);
        }
      });
  }, []);

  return (
    <div className='users'>
      {users.map((user) => (
        <User user={user} />
      ))}
    </div>
  );
}

export default UsersAdminPage;
