import './Login.css';
import SignIn from '../components/SignIn/SignIn';
import SignUp from '../components/SignUp/SignUp';
import { useStore } from '../store';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Login() {
  const loggedInUser = useStore((store) => store.loggedInUser);
  const navigate = useNavigate();
  useEffect(() => {
    if (loggedInUser) {
      navigate('/home');
    }
  }, [loggedInUser]);
  return (
    <div
      className='login'
      style={{ backgroundColor: '#dbdbdb', color: 'black' }}
    >
      <SignUp />
      <SignIn />
    </div>
  );
}

export default Login;
