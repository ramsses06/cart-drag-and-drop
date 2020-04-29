import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import './css/Header.css';
import Logo from '../images/logo.png';
import { NavLink } from 'react-router-dom';

function Header (props) {
  const handleClick = () => {
    window.localStorage.clear();
    window.location = '/';
  };

  return (
    <>
      <Navbar bg='light'>
        <Navbar.Brand>
          <NavLink className='brand-link' to={{ pathname: '/' }}>
            <span>LOGO</span>{' '}
            ecommerce
          </NavLink>
        </Navbar.Brand>
        <Button onClick={handleClick}>
          refresh
        </Button>
      </Navbar>
    </>
  );
}

export default Header;
