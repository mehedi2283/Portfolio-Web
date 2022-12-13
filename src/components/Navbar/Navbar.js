import React from "react";
import logo from "../../assets/logo.png";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { GoProject } from "react-icons/go";
import { MdPermContactCalendar } from "react-icons/md";
import { FaBloggerB } from "react-icons/fa";
import { Link } from "react-scroll";
import { NavHashLink } from "react-router-hash-link";

import "./Navbar.css";
import { NavLink } from "react-router-dom";

// let activeStyle = {
//     textDecoration: "underline",
//     textDecorationColor: "inherit",
//     textDecorationThickness: "4px",
//     fontWeight: "800",
//     textUnderlineOffset: "5px",
// };

const Navbar = () => {
    return (
        <div className="navbar bg-accent/20 mt-6 rounded-sm backdrop-blur z-50 justify-between">
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
                        <li>
                            <Link>Item 1</Link>
                        </li>
                        <li tabIndex={0}>
                            <Link className="justify-between">
                                Parent
                                <svg
                                    className="fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                                </svg>
                            </Link>
                            <ul className="p-2">
                                <li>
                                    <Link>Submenu 1</Link>
                                </li>
                                <li>
                                    <Link>Submenu 2</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link>Item 3</Link>
                        </li>
                    </ul>
                </div>
                <NavHashLink
                    to="/#home"
                    smooth
                    className="btn btn-ghost normal-case text-xl hover:bg-accent/0 hover:scale-125"
                >
                    <img className="w-10 " src={logo} alt="" />
                </NavHashLink>
            </div>
            <div className=" hidden lg:flex w-4/5">
                <div className="menu menu-horizontal px-1 justify-around flex w-full ">
                    <NavHashLink
                        activeClass="active"
                        smooth={true}
                        to="/#home"
                        activeClassName="selected"
                        activeStyle={{ color: "red" }}
                        // style={({ isActive }) =>
                        //     isActive ? activeStyle : undefined
                        // }
                        className="Link flex items-center btn btn-outline border-none hover:bg-primary/10 font-black"
                    >
                        <FaHome className="mr-1"></FaHome>
                        Home
                    </NavHashLink>
                    <NavHashLink
                        to="/#about"
                        scroll={(el) =>
                            el.scrollIntoView({
                                behavior: "smooth",
                                block: "center",
                            })
                        }
                        // style={({ isActive }) =>
                        //     isActive ? activeStyle : undefined
                        // }
                        className="Link flex items-center btn btn-outline border-none hover:bg-primary/10 "
                    >
                        <FaUser className="mr-1"></FaUser>
                        About
                    </NavHashLink>
                    <NavHashLink
                        // style={({ isActive }) =>
                        //     isActive ? activeStyle : undefined
                        // }

                        to="/#skills"
                        scroll={(el) =>
                            el.scrollIntoView({
                                behavior: "smooth",
                                block: "center",
                            })
                        }
                        className="Link flex items-center btn btn-outline border-none hover:bg-primary/10"
                    >
                        <GiSkills className="mr-1"></GiSkills>
                        Skills
                    </NavHashLink>
                    <NavHashLink
                        // style={({ isActive }) =>
                        //     isActive ? activeStyle : undefined
                        // }

                        scroll={(el) =>
                            el.scrollIntoView({
                                behavior: "smooth",
                                block: "center",
                            })
                        }
                        to="/#projects"
                        className="Link flex items-center btn btn-outline border-none hover:bg-primary/10"
                    >
                        <GoProject className="mr-1"></GoProject>
                        Projects
                    </NavHashLink>

                    <NavHashLink
                        // style={({ isActive }) =>
                        //     isActive ? activeStyle : undefined
                        // }
                        to="/#blogs"
                        scroll={(el) =>
                            el.scrollIntoView({
                                behavior: "smooth",
                                block: "center",
                            })
                        }
                        className="Link flex items-center btn btn-outline border-none hover:bg-primary/10"
                    >
                        <FaBloggerB className="mr-1"></FaBloggerB>
                        Blogs
                    </NavHashLink>

                    <NavHashLink
                        // style={({ isActive }) =>
                        //     isActive ? activeStyle : undefined
                        // }
                        className="Link flex items-center btn btn-outline border-none hover:bg-primary/10"
                        to={"/#contacts"}
                        // activeClassName="selected"
                        activeStyle={{ fontWeight: "bold" }}
                        scroll={(el) =>
                            el.scrollIntoView({
                                behavior: "smooth",
                                block: "center",
                            })
                        }
                    >
                        {/* <MdPermContactCalendar className="mr-1"></MdPermContactCalendar> */}
                        Contacts
                    </NavHashLink>
                </div>
            </div>
            <div className="">
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
            </div>
        </div>
    );
};

export default Navbar;
