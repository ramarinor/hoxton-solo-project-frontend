import { Link } from 'react-router-dom';
import CategoriesDropdownMenu from '../CategoriesDropdownMenu/CategoriesDropdownMenu';
import '../Header/Header.css';
function Header() {
  return (
    <header className='header'>
      <div className='dropdown-wrapper'>
        <CategoriesDropdownMenu />
      </div>

      <Link to='/'>
        <h1>Kosovan Post</h1>
      </Link>
      <div className='dropdown-wrapper'></div>
    </header>
  );
}

export default Header;
