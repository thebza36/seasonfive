import React from 'react'
import "./Testimonial.css";
import { testimonials } from '../../data';
import { FaStar } from 'react-icons/fa';

const Testimonial = () => {
  return (
    <section id='testimonials'>
        <div className="container">
            <div className="testimonials__container">
                {testimonials.map((item,index) => (
                    <div className="testimonial__card" key={index}>
                        <div className="flex top">
                            <div className="profile">
                                <img src={item.image} alt="" />
                            </div>
                        </div>
                        <div className="details">
                            <h4>{item.name}</h4>
                             <div className="flex star__container">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                             </div>
                        </div>
                        <div className="bottom">
                            <p className="muted">{item.review}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Testimonial;