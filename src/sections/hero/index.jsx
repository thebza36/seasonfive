import React from 'react'
import Achievements from "../../components/Achievements";
import {FaArrowTurnDown} from  "react-icons/fa6";
import { Link } from 'react-scroll';
import {crane} from "../../assets"
import "./Hero.css";

const Hero = () => {
  return (
    <section id='hero' className='blur__effect'>
      <div className="overlay__div">
      <div className="container">
        <div className="column left">
            <div className="hero__content">
                <h1 className="heading"> Fountain that, Never dries
                </h1>
                <p className="description">
                    Say goodbye to impurities and hello to freshness with our premium 
                    purified water. Whether you’re at home, in the office, or on the go, we provide a crisp, 
                    clean taste that keeps you hydrated throughout the day. Our water undergoes 
                    advanced purification techniques to ensure every bottle delivers optimal purity and quality.
                    We are a reliable company that supplies cooperates, companies, government 
                    organizations, events, non profit organizations and any other establishments with
                    the best purified water.
                </p>
            </div>
            <Achievements/>
            <div className="flex__center buttons__wrapper">
              <Link to="portfolio" smooth={true} className="btn"> Projects </Link>
              <Link to="contact" smooth={true} className="flex__center btn primary"> Get Water <FaArrowTurnDown/> </Link>
            </div>
        </div>
        <div className="column hero__image-container object__contain">
               <img src={crane} alt=''/>
            </div>
      </div>
      </div>
    </section>
  )
}

export default Hero;
