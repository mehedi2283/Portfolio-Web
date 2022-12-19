import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "./../components/Footer/Footer";
import "./main.css";

const Main = () => {
    return (
        <div className=" page-container ">
            <div className=" sticky top-1 z-50    duration-300 ">
                <Navbar></Navbar>
            </div>
            <div className=" pb-40">
                <Outlet></Outlet>
            </div>
            <div className="footer mb-6">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;
