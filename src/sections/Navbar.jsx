import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

export default function Example() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-14">
      <Typography
        as="li"
        variant="h6"
        color="blue-gray"
        className="p-1 nav-items font-normal"
      >
        <NavLink
          reloadDocument
          to="/about"
          className={({ isActive }) =>
            isActive
              ? " flex items-center text-blue-400 font-bold"
              : "r-black hover:text-blue-400 flex items-center"
          }
        >
          How it works
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        color="blue-gray"
        className="p-1 nav-items font-normal"
      >
        <NavLink
          reloadDocument
          to="/services"
          className={({ isActive }) =>
            isActive
              ? " flex items-center text-blue-400 font-bold"
              : "r-black hover:text-blue-400 flex items-center"
          }
        >
          Careers
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        color="blue-gray"
        className="p-1 nav-items font-normal"
      >
        <NavLink
          reloadDocument
          to="/portfolio"
          className={({ isActive }) =>
            isActive
              ? " flex items-center text-blue-400 font-bold"
              : "r-black hover:text-blue-400 flex items-center"
          }
        >
          Docs
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        color="blue-gray"
        className="p-1 nav-items font-normal"
      >
        <NavLink
          reloadDocument
          to="/portfolio"
          className={({ isActive }) =>
            isActive
              ? " flex items-center text-blue-400 font-bold"
              : "r-black hover:text-blue-400 flex items-center"
          }
        >
          Partners
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        color="blue-gray"
        className="p-1 nav-items font-normal"
      >
        <NavLink
          reloadDocument
          to="/portfolio"
          className={({ isActive }) =>
            isActive
              ? " flex items-center text-blue-400 font-bold"
              : "r-black hover:text-blue-400 flex items-center"
          }
        >
          News
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        color="blue-gray"
        className="p-1 nav-items font-normal"
      >
        <NavLink
          reloadDocument
          to="/portfolio"
          className={({ isActive }) =>
            isActive
              ? " flex items-center text-blue-400 font-bold"
              : "r-black hover:text-blue-400 flex items-center"
          }
        >
          Blog
        </NavLink>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="navbar max-w-none  py-2 px-4 lg:px-8 lg:py-4 bg-transparent border-none">
      <div className="container text-blue-gray-900">
        <div className="hidden lg:block">{navList}</div>

        <IconButton
          variant="text"
          className=" ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent focus:outline-none active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-7 w-7"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav} className="fixed mt-5 bg-blue-400">
        {navList}
      </MobileNav>
    </Navbar>
  );
}
