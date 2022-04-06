import { MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import { useStore } from '../../store';
import './User.css';
type Props = {
  user: User;
};
function User({ user }: Props) {
  const setModalMessage = useStore((store) => store.setModalMessage);
  const [roleId, setRoleId] = useState<number>(user.roleId);
  function editUserRole(roleId: number) {
    fetch(`http://localhost:4000/users/${user.id}`, {
      method: 'PATCH',
      headers: {
        Authorization: localStorage.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ roleId })
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.error) setModalMessage(data.error);
        else setRoleId(data.user.roleId);
      });
  }

  return (
    <div className='user' key={user.id}>
      <img src={`${user.image}`} />
      <b>{user.username}</b>
      <div>
        <Select
          fullWidth
          name='role'
          value={roleId}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          required
          onChange={(e) => {
            editUserRole(Number(e.target.value));
          }}
        >
          <MenuItem value={1}>Admin</MenuItem>
          <MenuItem value={2}>Journalist</MenuItem>
          <MenuItem value={3}>User</MenuItem>
        </Select>
      </div>
    </div>
  );
}

export default User;
