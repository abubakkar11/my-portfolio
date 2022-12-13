import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const menuBar = [
        <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link id='projects'>My Projects</Link></li>
        <li><Link>Contact me</Link></li>
        <li><Link>Blog</Link></li>
        </>
    ]
    return (
        <div className="navbar bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow text-black bg-base-100 rounded-box w-52">
              
             {menuBar}
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-2xl">M <span className='text-green-600'>A</span> S</Link>
        </div>
        <div className="navbar-center hidden  lg:flex">
          <ul className="menu menu-horizontal px-1">
            {menuBar}
          </ul>
        </div>
      </div>
    );
};

export default Header;