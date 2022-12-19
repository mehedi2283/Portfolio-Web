import React from "react";
import { Link } from "react-router-dom";
import { ImBook } from "react-icons/im";
import { ImMobile } from "react-icons/im";
import { ImAirplane } from "react-icons/im";

import "./Navbar.css";

// let activeStyle = {
//     textDecoration: "underline",
//     textDecorationColor: "inherit",
//     textDecorationThickness: "4px",
//     fontWeight: "800",
//     textUnderlineOffset: "5px",
// };

const DetailsNavbar = () => {
    return (
        <div className="navbar bg-accent/20 mt-1 rounded-sm backdrop-blur z-50 justify-between hidden lg:flex">
            <div className=" ">
                <div className="dropdown ">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <Link
                        to="/details/awesome-course-details"
                        smooth
                        offset={-50}
                        className="Link flex items-center btn btn-outline border-none hover:bg-primary/10 "
                    >
                        <ImBook className="mr-1"></ImBook>
                        Awesome Course
                    </Link>

                    <Link
                        to="/details/sellPhone-details"
                        smooth
                        offset={-50}
                        className="Link flex items-center btn btn-outline border-none hover:bg-primary/10 "
                    >
                        <ImMobile className="mr-1"></ImMobile>
                        SellPhone
                    </Link>

                    <Link
                        to="/details/tourDe-details"
                        smooth
                        offset={-105}
                        className="Link flex items-center btn btn-outline border-none hover:bg-primary/10"
                    >
                        <ImAirplane className="mr-1"></ImAirplane>
                        toutDe
                    </Link>
                    </ul>
                </div>
                
            </div>
            <div className=" hidden lg:flex w-4/5 mx-auto">
                <div className="menu menu-horizontal px-1 justify-around flex w-full ">
                    {/* <Link
                        to="/home"
                        className="Link flex items-center btn btn-outline border-none hover:bg-primary/10 font-black"
                    >
                        <FaHome className="mr-1"></FaHome>
                        Home
                    </Link> */}

                    <Link
                        to="/details/awesome-course-details"
                        smooth
                        offset={-50}
                        className="Link flex items-center btn btn-outline border-none hover:bg-primary/10 "
                    >
                        <ImBook className="mr-1"></ImBook>
                        Awesome Course
                    </Link>

                    <Link
                        to="/details/sellPhone-details"
                        smooth
                        offset={-50}
                        className="Link flex items-center btn btn-outline border-none hover:bg-primary/10 "
                    >
                        <ImMobile className="mr-1"></ImMobile>
                        SellPhone
                    </Link>

                    <Link
                        to="/details/tourDe-details"
                        smooth
                        offset={-105}
                        className="Link flex items-center btn btn-outline border-none hover:bg-primary/10"
                    >
                        <ImAirplane className="mr-1"></ImAirplane>
                        toutDe
                    </Link>
                </div>
            </div>
            {/* <div className="">
                <NavLink
                    to={{
                        pathname:
                            "//drive.google.com/file/d/1LxZVZ0Ti_icfpQ2FV39kOHWX0x_P9U8v/view",
                    }}
                    target="_blank"
                    className="rounded-sm btn btn-primary  text-primary hover:text-white hover:scale-105 bg-accent/50 border-none font-black"
                >
                    Resume
                </NavLink>
            </div> */}
        </div>
    );
};

export default DetailsNavbar;
