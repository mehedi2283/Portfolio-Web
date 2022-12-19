import React from "react";
import { Link } from "react-router-dom";
import { VscServerProcess } from "react-icons/vsc";
import { BsCreditCard2Front } from "react-icons/bs";
import { MdOutlineDevices } from "react-icons/md";
import { BsFullscreen } from "react-icons/bs";

const About = () => (
    <div
        data-aos="fade-down"
        id="about"
        className="   cursor-default mx-auto pt-20 p-4"
    >
        <h1
            className="text-4xl text-center font-bold divider  uppercase "
            data-aos="fade-down"
        >
            <span className=" -translate-y-4 ">About</span>{" "}
            <span className="underline underline-offset-4 text-primary -translate-y-5">
                Me
            </span>
        </h1>
        <p className="text-center" data-aos="fade-down">
            I consider myself a junior web Developer. Currently I'm a
            undergraduate at Daffodil International University. I'm still
            learning and trying to improve myself.
        </p>
        <p className="text-center" data-aos="fade-down">
            I'm a dependable person and hardworking. I'm honest, flexible and
            reliable. Here some of my information.
        </p>
        <div className="flex flex-col w-full md:flex-row mt-9 ">
            {/* <section className="md:col-span-5 col-span-11 grid justify-items-center lg:text-sm " >
                {" "}
                <h1
                    className="text-center text-2xl md:text-3xl font-bold uppercase"
                    data-aos="fade-down"
                >
                    Personal Information
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 justify-evenly md:text-base p-4 backdrop-blur-sm rounded bg-accent/10"
                    data-aos="fade-down"
                >
                    <div className="sm:mr-3 flex flex-col justify-center items-center w-full">
                        <p>
                            First Name:{" "}
                            <span className="font-bold">Mehedi Hasan</span>
                        </p>
                        <p>
                            Last Name:{" "}
                            <span className="font-bold">Babu</span>
                        </p>
                        <p>
                            Age: <span className="font-bold">23 Years</span>
                        </p>
                        <p>
                            Open for Job:{" "}
                            <span className="font-bold text-primary">
                                Yes
                            </span>
                        </p>
                        <p>
                            Phone:{" "}
                            <span className="font-bold">
                                +8801645653950
                            </span>
                        </p>
                    </div>
                    <div data-aos="sm:fade-down-left " className="flex flex-col justify-center items-center">
                        <p>
                            Nationality:{" "}
                            <span className="font-bold">Bangladeshi</span>
                        </p>
                        <p>
                            Address:{" "}
                            <span className="font-bold">Dhaka</span>
                        </p>
                        <p className="">
                            Email:{" "}
                            <span className="font text-ellipsis ">
                                mehedihasann.babu@gmail.com
                            </span>
                        </p>
                        <div><Link
                            className="lg:place-self-start "
                            to={{
                                pathname: "//www.linkedin.com/in/mehedi-hasan2283/",
                            }}
                            target="_blank"
                        >
                            <p className="flex items-center">
                                LinkedIn:{" "}
                                <span className="font-bold ml-1">
                                    Mehedi
                                </span>
                            </p>
                        </Link></div>
                        <div><Link
                            className="lg:place-self-start"
                            to={{
                                pathname: "//github.com/mehedi2283",
                            }}
                            target="_blank"
                        >
                            <p className="flex items-center">
                                GitHub:{" "}
                                <span className="font-bold ml-1">
                                    Mehedi
                                </span>
                            </p>
                        </Link></div>
                    </div>
                </div>
            </section> */}
            <section className=" justify-items-center w-full mx-auto lg:text-sm">
                <h1
                    className="text-center text-3xl font-bold uppercase mb-10"
                    data-aos="fade-down"
                >
                    {" "}
                    Personal Information
                </h1>
                <div className="grid xl:grid-cols-2 text-center bg-accent/20 xl:py-20 py-10 rounded gap-1" data-aos="fade-down">
                    <div className="" >
                        <section data-aos="fade-down" className=" grid items-center">
                            <p>
                                First Name:{" "}
                                <span className="font-bold">Mehedi Hasan</span>
                            </p>
                            <p>
                                Last Name:{" "}
                                <span className="font-bold">Babu</span>
                            </p>
                            <p>
                                Age: <span className="font-bold">23 Years</span>
                            </p>
                            <p>
                                Open for Job:{" "}
                                <span className="font-bold text-primary">
                                    Yes
                                </span>
                            </p>
                            <p>
                                Phone:{" "}
                                <span className="font-bold">
                                    +8801645653950
                                </span>
                            </p>
                        </section>
                    </div>
                    <div className=" ">
                        <section data-aos="fade-down" className="grid justify-items-center">
                            <p>
                                Nationality:{" "}
                                <span className="font-bold">Bangladeshi</span>
                            </p>
                            <p>
                                Address:{" "}
                                <span className="font-bold">Dhaka</span>
                            </p>
                            <p className="">
                                Email:{" "}
                                <span className="font-bold text-ellipsis ">
                                    mehedihasann.babu@gmail.com
                                </span>
                            </p>
                            <div>
                                <Link
                                    className="lg:place-self-start "
                                    to={{
                                        pathname:
                                            "//www.linkedin.com/in/mehedi-hasan2283/",
                                    }}
                                    target="_blank"
                                >
                                    <p className="flex items-center">
                                        LinkedIn:{" "}
                                        <span className="font-bold ml-1">
                                            Mehedi
                                        </span>
                                    </p>
                                </Link>
                            </div>
                            <div>
                                <Link
                                    className="lg:place-self-start"
                                    to={{
                                        pathname: "//github.com/mehedi2283",
                                    }}
                                    target="_blank"
                                >
                                    <p className="flex items-center">
                                        GitHub:{" "}
                                        <span className="font-bold ml-1">
                                            Mehedi
                                        </span>
                                    </p>
                                </Link>
                            </div>
                        </section>
                    </div>
                </div>
            </section>

            <section className="divider md:divider-horizontal text-center  w-full">
               
            </section>

            <section className="justify-items-center w-full mx-auto ">
                <h1
                    className="text-center text-3xl font-bold uppercase mb-3"
                    data-aos="fade-down"
                >
                    {" "}
                    I can do
                </h1>
                <div className="grid grid-cols-2 text-center md:gap-5 gap-2">
                    <div className="hover:scale-105  duration-200 ">
                        <section
                            data-aos="fade-down-left"
                            className="bg-accent/20 p-4 rounded-lg hover:text-primary/80     py-10"
                        >
                            <VscServerProcess className="sm:text-6xl text-3xl mx-auto"></VscServerProcess>
                            <p className="md:text-base text-xs">
                                Back-End Developement
                            </p>
                        </section>
                    </div>
                    <div className="hover:scale-105 duration-200 ">
                        <section
                            data-aos="fade-down-right"
                            className="bg-accent/20 p-4 rounded-lg hover:text-primary/80     py-10"
                        >
                            <BsCreditCard2Front className="sm:text-6xl text-3xl mx-auto"></BsCreditCard2Front>
                            <p className="md:text-base text-xs">
                                Front-End Developement
                            </p>
                        </section>
                    </div>
                    <div className="hover:scale-105 duration-200 ">
                        <section
                            data-aos="fade-down-left"
                            className="bg-accent/20 p-4 rounded-lg hover:text-primary/80     py-10"
                        >
                            <BsFullscreen className="sm:text-6xl text-3xl mx-auto"></BsFullscreen>
                            <p className="md:text-base text-xs">
                                Fullstack Developement
                            </p>
                        </section>
                    </div>
                    <div className="hover:scale-105 duration-200 ">
                        <section
                            data-aos="fade-down-right"
                            className="bg-accent/20 p-4 rounded-lg hover:text-primary/80     py-10"
                        >
                            <MdOutlineDevices className="sm:text-6xl text-3xl mx-auto"></MdOutlineDevices>
                            <p className="md:text-base text-xs">
                                Full-Responsive Design
                            </p>
                        </section>
                    </div>
                </div>
            </section>
        </div>
    </div>
);

export default About;
