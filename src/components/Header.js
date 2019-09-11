import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo192.png';

const Header = () => {
  return (
    <div>
      <img src={Logo} alt=""/>
      <h1>Tap Room</h1>
      <Link to="/">Home</Link> | <Link to="newkeg">Add new Keg</Link>
    </div>
  );
}

export default Header;
