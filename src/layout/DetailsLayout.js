import React from "react";
import { Outlet } from "react-router-dom";
import DetailsNavbar from "../components/Navbar/DetailsNavbar";
import Footer from "./../components/Footer/Footer";
import "./main.css";

const DetailsLayout = () => {
    return (
        <>
           
            <div className=" page-container">
                <div  className="z-50 duration-300  sticky top-1 mb-20">
                    <DetailsNavbar></DetailsNavbar>
                </div>
                <div  className=" pb-60 -z-10">
                    <Outlet></Outlet>
                </div>
                <div className="footer mb-6">
                    <Footer></Footer>
                </div>
            </div>
        </>
    );
};

export default DetailsLayout;