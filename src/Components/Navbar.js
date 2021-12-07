/* eslint-disable  import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Navbar = () => (
  <nav className="nav d-flex a-center p-relative">
    <h1 className="nav-title">Bookstore CMS </h1>
    <ul className="nav-links d-flex j-center a-center">
      <li>
        <Link to="/" className="nav-link">Books</Link>
      </li>
      <li>
        <Link to="/categories" className="nav-link">Category</Link>
      </li>
    </ul>
    <button type="button" className="profile-btn d-flex a-center j-center" aria-label="user-icon"><FaUser className="user" /></button>
  </nav>
);

export default Navbar;
