import './SignIn.css';
import { TextField, Button } from '@mui/material';
import { useStore } from '../../store';
function SignIn() {
  const signIn = useStore((store) => store.signIn);

  return (
    <div className='sign-in'>
      <h2>Sign In</h2>
      <form
        onSubmit={(e: any) => {
          e.preventDefault();
          signIn(e.target.username.value, e.target.password.value);
          e.target.reset();
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
