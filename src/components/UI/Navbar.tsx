import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <nav className="absolute h-14 z-10 w-screen">
      <div className="flex items-center justify-between h-full py-0 px-4 my-0 mr-4">
        <div className="logo"></div>
        <div
          className="max-sm:block hidden"
          onClick={() => setShowNavbar(!showNavbar)}
        >
          <span className="[&>svg]:w-7 text-white">
            {showNavbar ? <XMarkIcon /> : <Bars3Icon />}
          </span>
        </div>
        <div
          className={`${classes["nav-elements"]} ${
            showNavbar && `${classes.active}`
          }`}
        >
          <ul className="flex justify-between max-sm:flex-col">
            <li>
              <NavLink className="hover:font-bold" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="hover:font-bold" to="/expertise">
                Expertise
              </NavLink>
            </li>
            <li>
              <NavLink className="hover:font-bold" to="/portfolio">
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink className="hover:font-bold" to="/about">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink className="hover:font-bold" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
