import React from 'react'
import { logo } from "../../assets";
import "./logo.css";

const Logo = () => {
   return (
    <div className=" flex__center logo__container">
    <div className = "logo">
    <img src={logo} alt= ""></img>
    </div>
      <h2>SED<span className ="text__gradient">IBA</span></h2>
    </div>
  );
};

export default Logo;
