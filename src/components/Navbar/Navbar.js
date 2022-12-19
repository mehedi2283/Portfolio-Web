import React from "react";
import logo from "../../assets/logo.png";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { GoProject } from "react-icons/go";
import { FaBloggerB } from "react-icons/fa";
import { MdPermContactCalendar } from "react-icons/md";
import { NavHashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import { ImBook } from "react-icons/im";
import { ImMobile } from "react-icons/im";
import { ImAirplane } from "react-icons/im";
import { FaProjectDiagram } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./Navbar.css";
const Navbar = () => {
    return (
        <div className="navbar bg-accent/20 mt-6 rounded-sm backdrop-blur z-50 justify-between" data-aos='fade-up'>
            <div className=" flex justify-between w-full lg:w-2 ">
                <div className="dropdown " data-aos='fade-right' data-aos-duration="1000">
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
                        className="menu menu-compact dropdown-content mt-3 p-2 pb-4 shadow bg-gray-900 rounded-box w-52"
                    >
                        <NavHashLink
                            smooth
                            to="/#home"
                            className="Link flex items-center btn btn-outline border-none hover:bg-primary/10 font-black"
                        >
                            <FaHome className="mr-1"></FaHome>
                            Home
                        </NavHashLink>

                        <NavHashLink
                            to="/#about"
                            smooth
                            className="Link flex items-center btn btn-outline border-none hover:bg-primary/10 "
                        >
                            <FaUser className="mr-1"></FaUser>
                            About
                        </NavHashLink>

                        <NavHashLink

                            to="/#skills"
                            smooth
                            className="Link flex items-center btn btn-outline border-none hover:bg-primary/10"
                        >
                            <GiSkills className="mr-1"></GiSkills>
                            Skills
                        </NavHashLink>

                        <NavHashLink

smooth
                            to="/#projects"
                            className="Link flex items-center btn btn-outline border-none hover:bg-primary/10"
                        >
                            <GoProject className="mr-1"></GoProject>
                            Projects
                        </NavHashLink>
                        

                        <NavHashLink
                            to="/#blogs"
                            smooth
                            className="Link flex items-center btn btn-outline border-none hover:bg-primary/10"
                        >
                            <FaBloggerB className="mr-1"></FaBloggerB>
                            Blogs
                        </NavHashLink>

                        <NavHashLink
                            className="Link flex items-center btn btn-outline border-none hover:bg-primary/10"
                            to={"/#contacts"}
                            smooth
                        >
                            <MdPermContactCalendar className="mr-1"></MdPermContactCalendar>
                            Contacts
                        </NavHashLink>
                        <div className=" w-4/5 mx-auto  ">
                            <NavLink
                                to={{
                                    pathname:
                                        "//drive.google.com/file/d/1LxZVZ0Ti_icfpQ2FV39kOHWX0x_P9U8v/view",
                                }}
                                target="_blank"
                                className="rounded-lg btn btn-primary bg-gray-100/5 border-b-primary border text-primary w-full border-t-0 border-b-4 font-black mx-auto"
                            >
                                Resume
                            </NavLink>
                        </div>
                    </ul>
                </div>
                <NavHashLink
                    to="/#home"
                    smooth
                    className="btn btn-ghost normal-case text-xl lg:no-animation hover:bg-accent/0 lg:hover:scale-125"
                >
                    <img className="w-10" data-aos='fade-down' data-aos-duration="1000" src={logo} alt="" />
                </NavHashLink>
                <div className="dropdown dropdown-bottom dropdown-end  " data-aos='fade-left' data-aos-duration="1000">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <FaProjectDiagram className=" text-lg"></FaProjectDiagram>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-900 backdrop-blur-sm rounded-box w-52"
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

            <div className=" hidden lg:flex w-10/12">
                <div className="menu menu-horizontal px-1 justify-center xl:justify-around flex w-full ">
                    <NavHashLink
                        smooth
                        to="/#home"
                        className="Link flex btn lg:no-animation bg-transparent text-slate-400 hover:translate-y-1 rounded  hover:bg-accent/30  border-0 hover:border-b-2  hover:border-primary hover:font-bold"
                    >
                        <FaHome className="mr-1"></FaHome>
                        Home
                    </NavHashLink>

                    <NavHashLink
                        to="/#about"
                        smooth
                        className="Link flex btn lg:no-animation bg-transparent text-slate-400 hover:translate-y-1 rounded  hover:bg-accent/30  border-0 hover:border-b-2  hover:border-primary hover:font-bold "
                    >
                        <FaUser className="mr-1"></FaUser>
                        About
                    </NavHashLink>

                    <NavHashLink

                        to="/#skills"
                        smooth
                        className="Link flex btn lg:no-animation bg-transparent text-slate-400 hover:translate-y-1 rounded  hover:bg-accent/30  border-0 hover:border-b-2  hover:border-primary hover:font-bold"
                    >
                        <GiSkills className="mr-1"></GiSkills>
                        Skills
                    </NavHashLink>

                    <NavHashLink

                        smooth
                        to="/#projects"
                        className="Link flex btn lg:no-animation bg-transparent text-slate-400 hover:translate-y-1 rounded  hover:bg-accent/30  border-0 hover:border-b-2  hover:border-primary hover:font-bold"
                    >
                        <GoProject className="mr-1"></GoProject>
                        Projects
                    </NavHashLink>

                    <NavHashLink
                        to="/#blogs"
                        smooth
                        className="Link flex btn lg:no-animation bg-transparent text-slate-400 hover:translate-y-1 rounded  hover:bg-accent/30  border-0 hover:border-b-2  hover:border-primary hover:font-bold"
                    >
                        <FaBloggerB className="mr-1"></FaBloggerB>
                        Blogs
                    </NavHashLink>

                    <NavHashLink
                        className="Link flex btn lg:no-animation bg-transparent text-slate-400 hover:translate-y-1 rounded  hover:bg-accent/30  border-0 hover:border-b-2  hover:border-primary hover:font-bold"
                        to={"/#contacts"}
                        smooth
                    >
                        <MdPermContactCalendar className="mr-1"></MdPermContactCalendar>
                        Contacts
                    </NavHashLink>
                </div>
            </div>
            <div className=" hidden lg:flex  " data-aos='fade-down' data-aos-duration="1000">
                <NavLink
                    to={{
                        pathname:
                            "//drive.google.com/file/d/1LxZVZ0Ti_icfpQ2FV39kOHWX0x_P9U8v/view",
                    }}
                    target="_blank"
                    className="hover:translate-y-1 rounded btn hover:bg-accent/50  text-primary border-0 hover:border-b-2  hover:border-primary bg-accent/50 font-black"
                >
                    Resume
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;
