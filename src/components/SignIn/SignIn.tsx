import './SignIn.css';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
function SignIn() {
  return (
    <div className='sign-in'>
      <h2>Sign In</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formEl = e.target;
        }}
      >
        <TextField
          name='username'
          type='text'
          label='USERNAME'
          variant='outlined'
          required
        />
        <TextField
          name='password'
          type='password'
          label='PASSWORD'
          variant='outlined'
          required
        />
        <Button type='submit' variant='contained'>
          Sign In
        </Button>
      </form>
    </div>
  );
}

export default SignIn;
