import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "./../components/Footer/Footer";
import "./main.css";

const Main = () => {
    return (
        <div className=" page-container ">
            <div className="z-50 duration-300  sticky top-1">
                <Navbar></Navbar>
            </div>
            <div id="home" className=" pb-40 -z-10">
                <Outlet></Outlet>
            </div>
            <div className="footer mb-6">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;
