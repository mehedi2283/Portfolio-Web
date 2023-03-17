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
        <div
            className="navbar z-50 mt-6 justify-between rounded-sm bg-accent/20 backdrop-blur"
            data-aos="fade-up"
        >
            <div className=" flex w-full justify-between lg:w-2 ">
                <div
                    className="dropdown "
                    data-aos="fade-right"
                    data-aos-duration="1000"
                >
                    <label tabIndex={0} className="btn-ghost btn lg:hidden">
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
                        className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-gray-900 p-2 pb-4 shadow"
                    >
                        <NavHashLink
                            smooth
                            to="/#home"
                            className="Link btn-outline btn flex items-center border-none font-black hover:bg-primary/10"
                        >
                            <FaHome className="mr-1"></FaHome>
                            Home
                        </NavHashLink>

                        <NavHashLink
                            to="/#about"
                            smooth
                            className="Link btn-outline btn flex items-center border-none hover:bg-primary/10 "
                        >
                            <FaUser className="mr-1"></FaUser>
                            About
                        </NavHashLink>

                        <NavHashLink
                            to="/#skills"
                            smooth
                            className="Link btn-outline btn flex items-center border-none hover:bg-primary/10"
                        >
                            <GiSkills className="mr-1"></GiSkills>
                            Skills
                        </NavHashLink>

                        <NavHashLink
                            smooth
                            to="/#projects"
                            className="Link btn-outline btn flex items-center border-none hover:bg-primary/10"
                        >
                            <GoProject className="mr-1"></GoProject>
                            Projects
                        </NavHashLink>

                        <NavHashLink
                            to="/#blogs"
                            smooth
                            className="Link btn-outline btn flex items-center border-none hover:bg-primary/10"
                        >
                            <FaBloggerB className="mr-1"></FaBloggerB>
                            Blogs
                        </NavHashLink>

                        <NavHashLink
                            className="Link btn-outline btn flex items-center border-none hover:bg-primary/10"
                            to={"/#contacts"}
                            smooth
                        >
                            <MdPermContactCalendar className="mr-1"></MdPermContactCalendar>
                            Contacts
                        </NavHashLink>
                        <div className=" mx-auto w-4/5  ">
                            <NavLink
                                to={{
                                    pathname:
                                        "//drive.google.com/file/d/1LxZVZ0Ti_icfpQ2FV39kOHWX0x_P9U8v/view",
                                }}
                                target="_blank"
                                className="btn-primary btn mx-auto w-full rounded-lg border border-t-0 border-b-4 border-b-primary bg-gray-100/5 font-black text-primary"
                            >
                                Resume
                            </NavLink>
                        </div>
                    </ul>
                </div>
                <NavHashLink
                    to="/#home"
                    smooth
                    className="btn-ghost btn text-xl normal-case hover:bg-accent/0 lg:no-animation lg:hover:scale-125"
                >
                    <img
                        className="w-10"
                        data-aos="fade-down"
                        data-aos-duration="1000"
                        src={logo}
                        alt=""
                    />
                </NavHashLink>
                <div
                    className="dropdown dropdown-bottom dropdown-end  "
                    data-aos="fade-left"
                    data-aos-duration="1000"
                >
                    <label tabIndex={0} className="btn-ghost btn lg:hidden">
                        <FaProjectDiagram className=" text-lg"></FaProjectDiagram>
                    </label>
                    <ul
                        tabIndex={0}
                        className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-gray-900 p-2 shadow backdrop-blur-sm"
                    >
                        <Link
                            to="/details/awesome-course-details"
                            smooth
                            offset={-50}
                            className="Link btn-outline btn flex items-center border-none hover:bg-primary/10 "
                        >
                            <ImBook className="mr-1"></ImBook>
                            Awesome Course
                        </Link>

                        <Link
                            to="/details/sellPhone-details"
                            smooth
                            offset={-50}
                            className="Link btn-outline btn flex items-center border-none hover:bg-primary/10 "
                        >
                            <ImMobile className="mr-1"></ImMobile>
                            SellPhone
                        </Link>

                        <Link
                            to="/details/tourDe-details"
                            smooth
                            offset={-105}
                            className="Link btn-outline btn flex items-center border-none hover:bg-primary/10"
                        >
                            <ImAirplane className="mr-1"></ImAirplane>
                            toutDe
                        </Link>
                    </ul>
                </div>
            </div>

            <div className=" hidden w-10/12 lg:flex">
                <div className="menu menu-horizontal flex w-full justify-center px-1 xl:justify-around ">
                    <NavHashLink
                        smooth
                        to="/#home"
                        className="Link btn flex rounded border-0 bg-transparent text-slate-400 hover:translate-y-1  hover:border-b-2  hover:border-primary hover:bg-accent/30  hover:font-bold lg:no-animation"
                    >
                        <FaHome className="mr-1"></FaHome>
                        Home
                    </NavHashLink>

                    <NavHashLink
                        to="/#about"
                        smooth
                        className="Link btn flex rounded border-0 bg-transparent text-slate-400 hover:translate-y-1  hover:border-b-2  hover:border-primary hover:bg-accent/30  hover:font-bold lg:no-animation "
                    >
                        <FaUser className="mr-1"></FaUser>
                        About
                    </NavHashLink>

                    <NavHashLink
                        to="/#skills"
                        smooth
                        className="Link btn flex rounded border-0 bg-transparent text-slate-400 hover:translate-y-1  hover:border-b-2  hover:border-primary hover:bg-accent/30  hover:font-bold lg:no-animation"
                    >
                        <GiSkills className="mr-1"></GiSkills>
                        Skills
                    </NavHashLink>

                    <NavHashLink
                        smooth
                        to="/#projects"
                        className="Link btn flex rounded border-0 bg-transparent text-slate-400 hover:translate-y-1  hover:border-b-2  hover:border-primary hover:bg-accent/30  hover:font-bold lg:no-animation"
                    >
                        <GoProject className="mr-1"></GoProject>
                        Projects
                    </NavHashLink>

                    <NavHashLink
                        to="/#blogs"
                        smooth
                        className="Link btn flex rounded border-0 bg-transparent text-slate-400 hover:translate-y-1  hover:border-b-2  hover:border-primary hover:bg-accent/30  hover:font-bold lg:no-animation"
                    >
                        <FaBloggerB className="mr-1"></FaBloggerB>
                        Blogs
                    </NavHashLink>

                    <NavHashLink
                        className="Link btn flex rounded border-0 bg-transparent text-slate-400 hover:translate-y-1  hover:border-b-2  hover:border-primary hover:bg-accent/30  hover:font-bold lg:no-animation"
                        to={"/#contacts"}
                        smooth
                    >
                        <MdPermContactCalendar className="mr-1"></MdPermContactCalendar>
                        Contacts
                    </NavHashLink>
                </div>
            </div>
            <div
                className=" hidden lg:flex  "
                data-aos="fade-down"
                data-aos-duration="1000"
            >
                <NavLink
                    to={{
                        pathname:
                            "//drive.google.com/file/d/1LxZVZ0Ti_icfpQ2FV39kOHWX0x_P9U8v/view",
                    }}
                    target="_blank"
                    className="btn rounded border-0 bg-accent/50  font-black text-primary hover:translate-y-1  hover:border-b-2 hover:border-primary hover:bg-accent/50"
                >
                    Resume
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;
