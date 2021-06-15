import '../css/Header.css';

import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className='bg-container'>
        {/* <img
          className='bg-img'
          src='https://www.allo-infopc.com/wp-content/uploads/2020/10/business-5475661_1280-750x458.jpg'
          alt='How developers code'
        /> */}
      </div>
      <nav className='navbar-container hidden-desktop'>
        <ul className='menu-list'>
          <li className='menu-list-item'>
            <NavLink to='/'>Homepage</NavLink>
          </li>
          <li className='menu-list-item'>
            <NavLink to='/about'>About me</NavLink>
          </li>
          <li className='menu-list-item'>
            <NavLink to='/projects'>My Projects</NavLink>
          </li>
          <li className='menu-list-item'>
            <NavLink to='/skills'>Skills & Experiences</NavLink>
          </li>
          {/* <li className='menu-list-item'>
            <NavLink to='/skills#experiences'>Experiences</NavLink>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
