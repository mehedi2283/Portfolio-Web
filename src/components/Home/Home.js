import About from "../About/About";
import Skills from "../Skills/Skills";
import Hero from "./../Hero/Hero";
import Projects from "./../Projects/Projects";
import ContactMe from './../ContactMe/ContactMe';
import Blogs from "../Blogs/Blogs";
import GoToTop from "./GoToTop";
import ScrollCarousel from "scroll-carousel";


           

const Home = () => {

    const handleScroll = () => {
        new ScrollCarousel(".my-carousel", {
            autoplay: true,
        });
    };

    
    return (
        <div>
            <div className="pb-40 " onLoad={handleScroll}>
                <Hero></Hero>
                <About></About>
                <Skills></Skills>
                <Projects></Projects>
                <Blogs></Blogs>
                <ContactMe></ContactMe>
                <GoToTop></GoToTop>
                
            </div>
        </div>
    );
};

export default Home;
