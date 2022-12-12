import React, { useEffect } from "react";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Hero from "./../Hero/Hero";
import Projects from "./../Projects/Projects";
import ContactMe from './../ContactMe/ContactMe';
import Blogs from "../Blogs/Blogs";
import GoToTop from "./GoToTop";

           

const Home = () => {

    
    return (
        <div >
            <div className="pb-40">
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
