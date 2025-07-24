import Navbar from "./sections/navbar";
import Hero from "./sections/hero";
import About from "./sections/About";
import WhyChooseUs from "./sections/WhyChooseUs";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import Team from "./sections/Team";
import Testimonial from "./sections/Testimonial";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import "swiper/css"

function App() {
  return (
    <>
       <Navbar/>
       <Hero/>
       <About/>
       <WhyChooseUs/>
       <Services/>
       <Portfolio/>
       <Team/>
       <Testimonial />
       <Blog />
       <Contact />
       <Footer />
    </>
  );
}

export default App;
