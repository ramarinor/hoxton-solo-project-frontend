import './Login.css';
import SignIn from '../components/SignIn/SignIn';
import SignUp from '../components/SignUp/SignUp';

function Login() {
  return (
    <div className='login'>
      <SignUp />
      <SignIn />
    </div>
  );
}

export default Login;
