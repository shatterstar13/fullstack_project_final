import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className='navbar navbar-expand-md navbar-light'>
        <div className='container-fluid'>
          <a className='navbar-brand' id='footerlogo' href='#'>
            GIZMO
          </a>

          <form className='w-50 me-auto'>
            <input
              className='form-control shadow-none'
              type='search'
              placeholder='Search'
            />
          </form>
          <Link to={"/login"}>
            <button className='btn btn-outline-primary me-2 shadow-none'>
              Log In
            </button>
          </Link>
          <Link to={"/signup"}>
            <button className='btn btn-primary'>Sign Up</button>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
