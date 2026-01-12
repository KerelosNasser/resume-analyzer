import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
      <p className='text-2xl font-bold text-gradient'>Resume Analyzer</p>
      </Link>
      <Link to="/upload">
      <button className='primary-button w-fit'>Upload Resume</button>
      </Link>
    </nav>
  );
};

export default Navbar;