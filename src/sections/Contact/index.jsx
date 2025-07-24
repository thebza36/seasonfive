import React from 'react'
import "./Contact.css";
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { FaLocationCrosshairs } from 'react-icons/fa6';
import { FiPhoneCall } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact">
        <div className="overlay__div">
            <div className="container">
                <div className="flex left__container">
                    <div className="contact__info__wrapper">

                        {/*contact info */}
                        <div className="flex contact__info">
                            <div className="flex__center icon">
                                <MdOutlineAlternateEmail />
                            </div>
                            <div className="details">
                                <h4>Email Us</h4>
                                <p className="muted">fast and Reliable Support</p>
                                <p>
                                    <a href="mailto:sedibastillwater365@gmail.com">sedibastillwater365@gmail.com</a>
                                </p>
                            </div>
                        </div>
                           {/*contact info end */}


                        {/*contact info */}
                        <div className="flex contact__info">
                            <div className="flex__center icon">
                                <FaLocationCrosshairs />
                            </div>
                            <div className="details">
                                <h4>Our Address</h4>
                                <p className="muted">Visit our Offices </p>
                                <p>
                                    365 Mojuteng, Northam, Limpopo, Republic Of South Africa
                                </p>
                            </div>
                        </div>
                           {/*contact info end */}


                           {/*contact info */}
                        <div className="flex contact__info">
                            <div className="flex__center icon">
                                <FiPhoneCall />
                            </div>
                            <div className="details">
                                <h4>Phone Number</h4>
                                <p className="muted">Dial the Number</p>
                                <p>
                                    +27 71 768 0449 
                                </p>
                            </div>
                        </div>
                           {/*contact info end */}
                           

                    </div>
                </div>
                <form className="form">
                    <div className="form__top">
                        <h3 className="sub__heading">Get In Touch</h3>
                        <p className="muted">
                            Have any water project in mind or need expert advice? We're here to
                            help! Reach out to our team for personalized consultations, 
                            inquiries, or to start your next water related project with Sediba Still 
                            Water today.

                        </p>
                    </div>
                    <div className="form__middle">
                        <input 
                        type="text"
                        placeholder="full name"
                        name="fullName"
                        className="control"
                        />

                        <input 
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        className="control"
                        />

                        <input 
                        type="tel"
                        placeholder="Phone Number"
                        name="phoneNumber"
                        className="control"
                        />

                        <textarea name="message" placeholder="Your Message" className="control"></textarea>
                    </div>
                    <div className="form__bottom">
                        <button type="button" className="btn primary">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  );
};

export default Contact;