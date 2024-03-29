import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart()
  const [isAdmin] = useAdmin()
  const handleLogout = () => {
    logOut();
  };
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/shop/salad">Our Shop</Link>
      </li>
      <li>
        <Link to={isAdmin ? "/dashboard/adminHome" : "/dashboard/userHome"}>Dashboard</Link>
      </li>
      <li>
        <Link to="/dashboard/myCart">
          <button className="btn btn-warning">
            <FaShoppingCart className='text-white'></FaShoppingCart>
            <div className="badge badge-primary ms-2">+{cart?.length || 0}</div>
          </button>
        </Link>
      </li>
      <li>
        {user ? (
          <Link onClick={handleLogout}>Log out</Link>
        ) : (
          <Link to="/login">Log in</Link>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar max-w-screen-2xl fixed z-10 bg-opacity-30 bg-black text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl grid ">
          <p>BISTRO BOSS</p>
          <p>Restaurant</p>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">{user && user.displayName}</div>
    </div>
  );
};

export default Header;
