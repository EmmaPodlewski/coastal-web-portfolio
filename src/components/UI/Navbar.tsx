import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isSelected, setIsSelected] = useState("/");

  const NAVBAR_LIST = [
    { title: "Home", link: "/" },
    { title: "Expertise", link: "#expertise" },
    { title: "Portfolio", link: "#portfolio" },
    { title: "About Us", link: "#about" },
    { title: "Contact", link: "#contact" },
  ];
  return (
    <nav className="absolute h-14 z-10 w-full">
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
            {NAVBAR_LIST.map((item) => (
              <li key={item.link}>
                <NavLink
                  className={`
                    ${isSelected === item.link ? classes.active : undefined}
                  `}
                  to={item.link}
                  onClick={() => setIsSelected(item.link)}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
