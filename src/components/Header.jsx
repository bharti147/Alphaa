import React, { useState } from "react";
import { MdLocationOn, MdCall, MdAccessTimeFilled } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";

import logo2 from "../assets/logo2.png";
import { NavLink } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import ServicesDropDown from "./ServicesDropDown";

function Header() {
  const [isOpen, setOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <header className="flex-col flex">
      {/* First Bar */}
      <div
        className="section1 bg-custom-dark text-white font-sans  w-full
       flex flex-wrap items-center justify-center h-auto p-4 text-center mx-auto
       sm:py-2 sm:text-normal 
       md:flex md:flex-row md:justify-center md:text-right md:items-center md:px-2 md:py-4
       lg:justify-end lg:pr-12
      

        "
      >
        <h2 className="flex items-center mx-4 my-1 md:text-md">
          <MdLocationOn className="text-sm text-custom-blue mr-1 lg:text-lg" />
         Hisar, Haryana
        </h2>
        <h2 className="flex items-center mx-4 my-1 md:text-md ">
          <MdCall className="text-sm text-custom-blue mr-1 lg:text-lg" />
          9728181252
        </h2>
        <h2 className="flex items-center mx-4 my-1 md:text-md ">
          {" "}
          <MdAccessTimeFilled className="text-sm text-custom-blue mr-1 lg:text-lg" />{" "}
          Mon - Fri: 9:00am - 7:00pm
        </h2>
        <h2 className="flex items-center mx-4 my-1 md:text-md ">
          {" "}
          <MdAccessTimeFilled className="text-sm text-custom-blue mr-1 lg:text-lg" />{" "}
          Appointments All Week
        </h2>
      </div>

      {/* Navbar */}
      <div
        className="section2 w-full h-auto flex flex-col items-center justify-center
      md:justify-between md:flex-row
       lg:items-center lg:justify-between lg:h-20  lg:py-12
       xl:items-center xl:justify-between xl:h-28 
        
      "
      >
        {/* logo */}
        <img
          className="object-cover object-center   pl-16 w-full h-auto 
           md:object-contain md:h-24 md:w-auto md:pl-10
          lg:object-contain lg:h-28 lg:mt-4 lg:pl-10 
          xl:object-cover xl:h-44 xl:mt-4 xl:pl-40
         "
          src={logo2}
          alt="logo"
        />

        {/* menu */}
        <div
          className="w-full md:w-auto flex md:px-6 items-center md:justify-start
lg:w-auto  lg:justify-between lg:flex-end lg:px-1 
xl:w-auto  xl:justify-between xl:flex-end xl:px-1 
"
        >
          {/* menu for large screens */}
          <div
            className="hidden 
lg:flex lg:items-center lg:w-auto  
xl:flex xl:items-center xl:w-auto 

 "
          >
            <NavLink
              to="/"
              // className={({ isActive }) =>
              //   `px-1 py-6 text-center font-bold w-full cursor-pointer ${
              //     isActive
              //       ? "bg-custom-dark text-white"
              //       : "bg-white text-black"
              //   }`
              // }
              className="flex items-center  justify-center px-4 py-6 text-center font-bold w-auto cursor-pointer hover:bg-custom-dark hover:text-white  lg:text-sm xl:text-base"
            >
              HOME
            </NavLink>
            <NavLink
              to="/about"
              // className={({ isActive }) =>
              //   `px-1 py-6 text-center font-bold w-full cursor-pointer ${
              //     isActive
              //       ? "bg-custom-dark text-white"
              //       : "bg-white text-black"
              //   }`
              // }
              className="flex items-center  justify-center px-4 py-6 text-center font-bold w-auto cursor-pointer hover:bg-custom-dark hover:text-white lg:text-sm xl:text-base"
            >
              ABOUT US
            </NavLink>
            <NavLink
              to="/services"
              className="flex items-center  px-4 py-6 text-center font-bold w-auto cursor-pointer hover:bg-custom-dark hover:text-white lg:text-sm
              xl:text-base"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              SERVICES &nbsp;{" "}
              <IoMdArrowDropdown
                className={`text-lg ${isExpanded ? "rotate-180" : ""}`}
              />
            </NavLink>
            <ServicesDropDown isExpanded={isExpanded} />

          </div>

          {/* menu for smaller screens */}
          <div
            className="w-full h-auto flex 
          md:w-auto md:h-auto 
          lg:hidden
           "
          >
            {!isOpen ? (
              <div className="w-10 h-auto py-1">
                <button
                  className="pl-10"
                  onClick={() => {
                    setOpen(!isOpen);
                  }}
                >
                  <GiHamburgerMenu className="text-3xl font-extrabold " />
                </button>
              </div>
            ) : (
              <div className="w-full h-auto   py-1 ">
                <button
                  className="md:mb-3 pl-10"
                  onClick={() => {
                    setOpen(!isOpen);
                  }}
                >
                  <FaXmark className="text-3xl font-extrabold" />
                </button>
                <div
                  className="h-auto py-4 w-full flex flex-col 
            md:w-full md:absolute md:left-0  mt-2
            "
                >
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `p-8 font-bold w-full cursor-pointer ${
                        isActive
                          ? "bg-custom-orange text-white"
                          : "bg-white text-black"
                      }`
                    }
                  >
                    HOME
                  </NavLink>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `p-8 font-bold w-full cursor-pointer ${
                        isActive
                          ? "bg-custom-orange text-white"
                          : "bg-white text-black"
                      }`
                    }
                  >
                    ABOUT US
                  </NavLink>
                  <div className="relative lg:hidden ">
                  <NavLink
                    to="/services"
                    className={({ isActive }) =>
                      `flex items-center p-8 font-bold w-full cursor-pointer ${
                        isActive
                          ? "bg-custom-orange text-white"
                          : "bg-white text-black"
                      }`
                    }
                    onClick={() => setIsExpanded(!isExpanded)}
                  >
                  
                    SERVICES &nbsp;{" "}
                    <IoMdArrowDropdown
                className={`text-lg ${isExpanded ? "rotate-180" : ""}`}
              />
                  </NavLink>
                  <ServicesDropDown isExpanded={isExpanded} />
                 </div>
                </div>
              </div>
            )}
          </div>

          {/* button */}
          <button
            className="hidden md:block md:p-4 md:ml-16 md:bg-custom-dark md:text-white md:rounded 
        lg:mr-8  lg:px-4 lg:font-bold  lg:text-sm lg:ml-4
        xl:mx-10  xl:px-6 xl:font-bold xl:text-base
        "
          >
            CALL US ANYTIME
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
{
  /* <MdLocationOn className='text-custom-orange'/>
<MdCall className='text-custom-orange'/>
<MdAccessTimeFilled className='text-custom-orange mr-1'/> */
}

// FIRST HOME BUYER
// BUYING NEXT HOME
// REVIEW CURRENT LOANS
// COMMERCIAL LOAN
// ASSET FINANCE
// PERSONAL LOAN
// SELF-MANAGED SUPER FUND (SMSF) LENDING
