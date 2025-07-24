import React from 'react'
import "./About.css";
import {about} from "../../assets";
import { keypoints } from '../../data';

const About = () => {
  return (
    <section id="about">
        <div className="overlay__div">
            <div className="container">
                <div className="about__image">
                    < img src={about} alt='' />
                </div>
                <div className="section__header">
                <h3 className="title"> About Us </h3>
                <h1 className="sub__heading">
                    High Quality Water,
                    Healthy Lifestyle
                </h1>
                <p className="description">
                    At Sediba Still Water, we turn your ideas into reality with expert
                    craftsmanship and innovative solutions. From concept to
                    completion, we’re dedicated to creating spaces that inspire and
                    stand the test of time. Let’s build a future you can be proud of.
                </p>
                <div className="keypoints__container">
                    {keypoints.map ((keypoints, index) => (
                            <div className= "flex keypoints" key={index}>
                                <div className="flex__center primary icon">
                                    {keypoints.icon}
                                    </div>
                                    <h4 className="title">{keypoints.title}</h4>
                                </div>

                        ))}
                </div>
            </div>
        </div>
        </div>
    </section>
  );
};

export default About;
