// Nav.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/chat-forum">Chat Forum</Link></li>
        <li><Link to="placement-prep">Placement Preparation</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
