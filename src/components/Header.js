import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h1>Tap Room</h1>
      <Link to="/">Home</Link> | <Link to="newkeg">Add new Keg</Link>
    </div>
  );
}

export default Header;
