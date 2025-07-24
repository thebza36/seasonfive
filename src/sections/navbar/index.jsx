import React, { useState } from "react";
import  "./navbar.css";
import Logo from "../../components/logo";
import { navigation } from "../../data";
import { Link } from "react-scroll";
import SocialHandles from "../../components/logo/socialHandles";
import { FaArrowTurnDown } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import SideBar from "../../components/sideBar";
import useNavbar from "../../hook/useNavbar";


const Navbar = () => {
  const [openSideBar,setOpenSidebar] = useState(false);
  const {showNavbar} = useNavbar();

  return (
    <>
   <SideBar openSideBar={openSideBar} 
     onClose={() => setOpenSidebar(!openSideBar)} 
    />

    <nav className= {`flex__center navbar ${showNavbar ? 'drop':''}`} >
      <Logo />
        <div className="navbar__links" >
        {navigation.map((item, index) => (
          
          <Link
          to={item.to}
          className ="nav__item"
          activeClass ="active"
          spy={true}
          smooth={true}
          offset={-300}
          key={index}
          >
          {item.label}
        </Link>
      ))}
        </div>
        <SocialHandles />
         <div className="flex__center">
          <Link to="contact" smooth={true}  className="flex__center btn primary"> 
          Get Water <FaArrowTurnDown /> 
          </Link>
          <button 
          className="flex__center icon menu__btn"
          onClick={() =>setOpenSidebar(!openSideBar)}
          >
         
         <FiMenu />
          </button> 
         </div>   
    </nav>
    </>
  );
 }; 

export default Navbar;