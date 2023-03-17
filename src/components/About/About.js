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
        className="   mx-auto cursor-default p-4 pt-20"
    >
        <h1
            className="divider text-center text-4xl font-bold  uppercase "
            data-aos="fade-down"
        >
            <span className=" -translate-y-4 ">About</span>{" "}
            <span className="-translate-y-5 text-primary underline underline-offset-4">
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
        <div className="mt-9 flex w-full flex-col md:flex-row ">
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
                    <div data-aos-"sm:fade-down-left " className="flex flex-col justify-center items-center">
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
            <section className=" mx-auto w-full justify-items-center lg:text-sm">
                <h1
                    className="mb-10 text-center text-3xl font-bold uppercase"
                    data-aos="fade-down"
                >
                    {" "}
                    Personal Information
                </h1>
                <div
                    className="grid gap-1 rounded bg-accent/20 py-10 text-center xl:grid-cols-2 xl:py-20"
                    data-aos="fade-down"
                >
                    <div className="">
                        <section
                            data-aos="fade-down"
                            className=" grid items-center"
                        >
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
                        <section
                            data-aos="fade-down"
                            className="grid justify-items-center"
                        >
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
                                <span className="text-ellipsis font-bold ">
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
                                        <span className="ml-1 font-bold">
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
                                        <span className="ml-1 font-bold">
                                            Mehedi
                                        </span>
                                    </p>
                                </Link>
                            </div>
                        </section>
                    </div>
                </div>
            </section>

            <section className="divider w-full text-center  md:divider-horizontal"></section>

            <section className="mx-auto w-full justify-items-center ">
                <h1
                    className="mb-3 text-center text-3xl font-bold uppercase"
                    data-aos="fade-down"
                >
                    {" "}
                    I can do
                </h1>
                <div className="grid grid-cols-2 gap-2 text-center md:gap-5">
                    <div className="duration-200  hover:scale-105 ">
                        <section
                            data-aos="fade-down-left"
                            className="rounded-lg bg-accent/20 p-4 py-10     hover:text-primary/80"
                        >
                            <VscServerProcess className="mx-auto text-3xl sm:text-6xl"></VscServerProcess>
                            <p className="text-xs md:text-base">
                                Back-End Developement
                            </p>
                        </section>
                    </div>
                    <div className="duration-200 hover:scale-105 ">
                        <section
                            data-aos="fade-down-right"
                            className="rounded-lg bg-accent/20 p-4 py-10     hover:text-primary/80"
                        >
                            <BsCreditCard2Front className="mx-auto text-3xl sm:text-6xl"></BsCreditCard2Front>
                            <p className="text-xs md:text-base">
                                Front-End Developement
                            </p>
                        </section>
                    </div>
                    <div className="duration-200 hover:scale-105 ">
                        <section
                            data-aos="fade-down-left"
                            className="rounded-lg bg-accent/20 p-4 py-10     hover:text-primary/80"
                        >
                            <BsFullscreen className="mx-auto text-3xl sm:text-6xl"></BsFullscreen>
                            <p className="text-xs md:text-base">
                                Fullstack Developement
                            </p>
                        </section>
                    </div>
                    <div className="duration-200 hover:scale-105 ">
                        <section
                            data-aos="fade-down-right"
                            className="rounded-lg bg-accent/20 p-4 py-10     hover:text-primary/80"
                        >
                            <MdOutlineDevices className="mx-auto text-3xl sm:text-6xl"></MdOutlineDevices>
                            <p className="text-xs md:text-base">
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
