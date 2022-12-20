import React from "react";
import { Outlet } from "react-router-dom";
import DetailsNavbar from "../components/Navbar/DetailsNavbar";
// import Navbar from "../components/Navbar/Navbar";
// import Footer from "./../components/Footer/Footer";
import ScrollToTop from './../assets/ScrollToTop';
import "./main.css";



const DetailsLayout = () => {
    return (
        <>
            <ScrollToTop></ScrollToTop>
            <div className=" page-container">
                {/* <div  className="z-50 duration-300  sticky top-1">
                    <Navbar></Navbar>
                </div> */}
                <div  className="z-40 duration-300  sticky top-[70px] mb-20">
                    <DetailsNavbar></DetailsNavbar>
                </div>
                <div  className=" pb-60 -z-10">
                    <Outlet></Outlet>
                </div>
                {/* <div className="footer mb-6">
                    <Footer></Footer>
                </div> */}
            </div>
        </>
    );
};

export default DetailsLayout;