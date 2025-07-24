import React from 'react'
import "./Services.css";
import { Link } from "react-scroll";
import { sketch } from "../../assets";
import { services } from '../../data';

const Services = () => {
  return (
    <section id="services">
        <div className="overlay__div">
            <div className="container">
                <div className="grid">
                    <div className="section__header">
                        <h3 className="sub__heading">Need Water, we got you 365!</h3>
                        <p className="muted description">
                        Ready to get purified water as little as R1.50 per Litre?
                        Our expert team offers personalized consultations to guide you through every step—from
                        ordering to delivery. Let’s lay the groundwork for your next water supply.
                        Schedule your consultation today!
                        </p>
                        <Link to="contact" className="btn primary">
                        Order Water
                        </Link>
                    </div>
                    <div className="object__contain">
                        <img src={sketch} alt="" />
                    </div>
                </div>
                {/* grid end */}
                <div className="grid services">{
                    services.map((services,index)=>(
                        <div className="service" key={index}>
                            <div className="flex top">
                                <div className="flex__center icon">{services.icon}</div>
                                <h4 className="title">{services.title}</h4>
                            </div>
                            <div className="middle">
                                <p className="description">{services.description}</p>
                            </div>
                            <div className="flex bottom">
                                <Link to="contact" className="btn">Reach Out</Link>
                            </div>
                        </div>  
                ))
                }</div>
            </div>
        </div>
    </section>
  );
};

export default Services;