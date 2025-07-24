import React from 'react'
import "./Blog.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { blogs } from "../../data";
import { Autoplay } from "swiper/modules";
const Blog = () => {
  return (
    <section id="blog">
        <div className="container">
            <div className="section__header">
                <h3 className="title">Water Pricing</h3>
                <div className="sub__heading">Water Supply Insights and Innovations and Prices</div>
                <p className="description">Stay informed with the latest trends, 
                    tips, and expert advice on all things water purification. 
                    Explore industry insights to help guide your next project!
                </p>
            </div>
            <div>
                <Swiper
                grabCursor={true}
                slidesPerView={1}
                loop={true}
                spaceBetween={15}
                autoplay={true}
                speed={5000}
                modules={[Autoplay]}
                breakpoints={{
                600: { slidesPerView: 2}
                }}
                
                className="blogs__container">
                    {blogs.map((blog, index) => (
                        <SwiperSlide className="blog" key={index}>
                            <div className="image__container">
                                <img src={blog.image} alt="" />
                            </div>
                            <div className="details">
                                <h4 className="line__clamp__2 title">{blog.title}</h4>
                                <p className='line__clamp__2 muted'>{blog.content}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    </section>
  );
};

export default Blog;