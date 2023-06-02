import React from 'react';
import { NavLink } from "react-router-dom";
import { AiFillHome } from 'react-icons/ai';
import { ImSpoonKnife } from 'react-icons/im';
import { FaBars,FaBook } from 'react-icons/fa';
import { BsPeopleFill } from 'react-icons/bs';


const CopyCode = () => {
    return (
        <ul className="menu p-4 w-80 h-full bg-[#D1A054] text-base-content">
          {/* Sidebar content here */}
          <li className="uppercase text-xl mb-8">
            <p className="font-bold text-2xl mb-0 pb-0">BISTRO BOSS </p>
            <p className="mt-0 pt-0 text-2xl">Restaurant</p>
          </li>
          <li className="flex">
          <NavLink
            to=''
            className={({isActive}) =>
              isActive ? "" : ""
            }
          >
            <AiFillHome></AiFillHome> Admin Home
          </NavLink>
          </li>
          <li className="flex">
          <NavLink
            to=''
            className={({isActive}) =>
              isActive ? "" : ""
            }
          >
            <ImSpoonKnife></ImSpoonKnife> Add Items
          </NavLink>
          </li>
          <li className="flex">
          <NavLink
            to=''
            className={({isActive}) =>
              isActive ? "" : ""
            }
          >
            <FaBars></FaBars> Manage Items
          </NavLink>
          </li>
          <li className="flex">
          <NavLink
            to=''
            className={({isActive}) =>
              isActive ? "" : ""
            }
          >
            <FaBook></FaBook> Manage Bookings
          </NavLink>
          </li>
          <li className="flex">
          <NavLink
            to=''
            className={({isActive}) =>
              isActive ? "" : ""
            }
          >
            <BsPeopleFill></BsPeopleFill> All Users
          </NavLink>
          </li>
          <li className="border-b my-5">
          </li>
        </ul>
    );
};

export default CopyCode;