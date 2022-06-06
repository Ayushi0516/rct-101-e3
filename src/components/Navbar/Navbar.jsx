import React from "react";
import {Link} from "react-router-dom"
// import "./App.css";
// use react-router Link or NavLink
// const Link = <a />;

// const [count, setCounter]=React.useState(0)


const Navbar = () => {
  const [count, setCounter]=React.useState(0)

  return (
    <div data-cy="navbar" className="top">
      <p className="logo">Logo</p> 
      <Link data-cy="navbar-home-link" to="/">Home</Link>
      <span data-cy="navbar-cart-items-count">count:{()=>setCounter(count+1)}</span>
      <button data-cy="navbar-login-logout-button" ><Link to="/login">Login</Link></button>
    </div>
  );
};

export default Navbar;
