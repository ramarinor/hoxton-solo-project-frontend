import './SignUp.css';
import { TextField, Button } from '@mui/material';

function SignUp() {
  return (
    <div className='sign-up'>
      <h2>Sign Up</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <TextField
          name='firstName'
          type='text'
          label='FIRST NAME'
          variant='outlined'
          required
        />
        <TextField
          name='lastName'
          type='text'
          label='LAST NAME'
          variant='outlined'
          required
        />

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
        <TextField
          name='image'
          type='url'
          label='IMAGE URL'
          variant='outlined'
          required
        />
        <Button type='submit' variant='contained'>
          Sign Up
        </Button>
      </form>
    </div>
  );
}

export default SignUp;
