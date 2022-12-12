import React from "react";
import { Link } from "react-router-dom";
import { VscServerProcess } from "react-icons/vsc";
import { BsCreditCard2Front } from "react-icons/bs";
import { MdOutlineDevices } from "react-icons/md";
import { BsFullscreen } from "react-icons/bs";

const About = () => {
    return (
        <div data-aos="fade-down"
            id="about"
            className="bg-accent/10 p-10 backdrop-blur-sm rounded-sm cursor-default"
        >
            <h1 className="text-4xl text-center font-bold divider  uppercase ">
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
                I'm a dependable person and hardworking. I'm honest, flexible
                and reliable. Here some of my information.
            </p>
            <div className="grid grid-cols-11 mt-9">
                <section className="col-span-5 grid justify-items-center">
                    {" "}
                    <h1 className="text-center text-3xl font-bold mb-3 uppercase" data-aos="fade-down-right">
                        Personal Information
                    </h1>
                    <div className="flex flex-col lg:flex-row justify-evenly ">
                        <div className="mr-5" data-aos="fade-down-right">
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
                        <div data-aos="fade-down-left">
                            <p>
                                Nationality:{" "}
                                <span className="font-bold">Bangladeshi</span>
                            </p>
                            <p>
                                Address:{" "}
                                <span className="font-bold">Dhaka</span>
                            </p>
                            <p>
                                Email:{" "}
                                <span className="font-bold">
                                    mehedihasann.babu@gmail.com
                                </span>
                            </p>
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
                    </div>
                </section>
                <section className="divider divider-horizontal col-span-1 mx-auto "></section>
                <section className="col-span-5 ">
                    <h1 className="text-center text-3xl font-bold uppercase mb-3" data-aos="fade-down-left">
                        {" "}
                        I can do
                    </h1>
                    <div className="grid grid-cols-2 text-center gap-5">
                        <section data-aos="fade-down-right" className="bg-accent/30 p-4 rounded-lg hover:text-primary/80 duration-200   hover:scale-105 py-10">
                            <VscServerProcess className="text-6xl mx-auto"></VscServerProcess>
                            <p className="">Back-End Developement</p>
                        </section>
                        <section data-aos="fade-down-left" className="bg-accent/30 p-4 rounded-lg hover:text-primary/80 duration-200   hover:scale-105 py-10">
                            <BsCreditCard2Front className="text-6xl mx-auto"></BsCreditCard2Front>
                            <p className="">Front-End Developement</p>
                        </section>
                        <section data-aos="fade-down-right" className="bg-accent/30 p-4 rounded-lg hover:text-primary/80 duration-200   hover:scale-105 py-10">
                            <BsFullscreen className="text-6xl mx-auto"></BsFullscreen>
                            <p className="">Fullstack Developement</p>
                        </section>
                        <section data-aos="fade-down-left" className="bg-accent/30 p-4 rounded-lg hover:text-primary/80 duration-200   hover:scale-105 py-10">
                            <MdOutlineDevices className="text-6xl mx-auto"></MdOutlineDevices>
                            <p className="">Responsive Designt</p>
                        </section>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
