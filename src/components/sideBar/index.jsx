import React from "react";
import "./sidebar.css";
import Logo from "../logo";
import { FaTimes} from "react-icons/fa";
import { navigation } from "../../data";
import { Link } from "react-scroll";


const SideBar= ({ openSideBar, onClose }) => {
  return (
  
    <div className={` sidebar ${openSideBar ? "visible" : ""}`} >
    <div className="sidebar__wrapper">
     <div className="flex__center top">
      <Logo />
      <button className="flex__center icon" onClick={onClose}>
        <FaTimes />
      </button>

     </div>
     <div className="middle nav__links">

      {navigation.map((nav, index) => (
        <Link 
        to={nav.to} 
        smooth={true} 
        className="nav__item" 
        onClick={onClose}
        key={index}
        >
          {nav.label}
        </Link>
      ))}
     </div>
    </div>
  </div>
  );
};

export default SideBar;
