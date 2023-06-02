import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AiFillHome } from 'react-icons/ai';
import { FaWallet,FaShoppingCart,FaRegCalendarAlt } from 'react-icons/fa';
import { LuCalendarHeart } from 'react-icons/lu';
import { RiMailStarFill } from 'react-icons/ri';


const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-[#D1A054] text-base-content">
          {/* Sidebar content here */}
          <li className="uppercase text-xl mb-8">
            <p className="font-bold text-2xl mb-0 pb-0">BISTRO BOSS </p>
            <p className="mt-0 pt-0 text-2xl">Restaurant</p>
          </li>
          <li className="flex">
          <NavLink
            to='/dashboard/home'
            className={({isActive}) =>
              isActive ? "text-white uppercase " : "uppercase"
            }
          >
            <AiFillHome></AiFillHome> User Home
          </NavLink>
          </li>
          <li className="flex">
          <NavLink
            to='/dashboard/reservation'
            className={({isActive}) =>
            isActive ? "text-white uppercase " : "uppercase"
            }
          >
            <FaRegCalendarAlt></FaRegCalendarAlt> Reservation
          </NavLink>
          </li>
          <li className="flex">
          <NavLink
            to='/dashboard/payment'
            className={({isActive}) =>
            isActive ? "text-white uppercase " : "uppercase"
            }
          >
            <FaWallet></FaWallet> Payment
          </NavLink>
          </li>
          <li className="flex">
          <NavLink
            to='/dashboard/myCart'
            className={({isActive}) =>
            isActive ? "text-white uppercase " : "uppercase"
            }
          >
            <FaShoppingCart></FaShoppingCart> My Cart
          </NavLink>
          </li>
          <li className="flex">
          <NavLink
            to='/dashboard/addReview'
            className={({isActive}) =>
            isActive ? "text-white uppercase " : "uppercase"
            }
          >
            <RiMailStarFill></RiMailStarFill> Add Review
          </NavLink>
          </li>
          <li className="flex">
          <NavLink
            to='/dashboard/myBooking'
            className={({isActive}) =>
            isActive ? "text-white uppercase " : "uppercase"
            }
          >
            <LuCalendarHeart></LuCalendarHeart> My Booking
          </NavLink>
          </li>
          <li className="border-b my-5">
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
