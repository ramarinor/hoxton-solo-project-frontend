import { Link } from 'react-router-dom';
import { useStore } from '../../store';
import AccountDropdownMenu from '../AccountDropdownMenu/AccountDropdownMenu';
import CategoriesDropdownMenu from '../CategoriesDropdownMenu/CategoriesDropdownMenu';
import '../Header/Header.css';
import LogInButton from '../LoginButton/LoginButton';
function Header() {
  const loggedInUser = useStore((store) => store.loggedInUser);
  return (
    <header className='header'>
      <div className='dropdown-wrapper'>
        <CategoriesDropdownMenu />
      </div>

      <Link to='/'>
        <h1>Kosovan Post</h1>
      </Link>
      <div className='dropdown-wrapper'>
        {loggedInUser === null ? (
          <LogInButton />
        ) : (
          <AccountDropdownMenu loggedInUser={loggedInUser} />
        )}
      </div>
    </header>
  );
}

export default Header;
