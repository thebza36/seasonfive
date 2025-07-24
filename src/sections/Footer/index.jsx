import React from 'react'
import "./Footer.css";
import Logo from '../../components/logo';
import { footer }  from "../../data";

const Footer = () => {
  return (

    <footer id="footer">
        <div className="overlay__div">
            <div className="container">
                <div className="column">
                    <Logo /><br></br>
                    <p>
                        Our mission is to supply the whole Republic of South Africa 
                        with purified water that can inspire and uplift the nation with 
                        combining quality craftsmanship with innovative solutions to meet
                        the evolving needs of our clients and communities.
                    </p>
                </div>
                {
                    footer.map((foot, index) => (
                        <div className="column" key={index}>
                            <h4>{foot.title}</h4>
                            {
                                foot.routes.map((route, index)=>(
                                    <a href={route.href} className="route" key={index}>
                                        {route.name}
                                    </a>
                                ))
                            }
                        </div>
                    ))}
            </div>
            <div className="footer__bottom">
                <p>Copyright &copy; Sediba Still Water - Coded by Thebeko Maboee - 2026</p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;