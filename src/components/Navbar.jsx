import React from 'react';
//mport Logo from '../components/logo.png'; // ✅ Ensure this path is correct
//import Logo from './logo.png'
import Logo from '../../src/logo.png'
const Navbar = () => {
  return (
    <div className=''>
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">
            <img src={Logo} alt="Logo" width={100} />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup" >
            <div className="navbar-nav text-white" id='navarrange'>
              <a className="nav-link active" aria-current="page" href="#home">
                Home
              </a>
              <a className="nav-link" href="#product">Products</a>
              <a className="nav-link" href="#service">Services</a>
              <a className="nav-link" href="#contactme">Contact</a>
              
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
