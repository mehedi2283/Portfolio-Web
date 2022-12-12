import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../.././assets/awsCrs/awesome-course-8893a.web.app login.png";
import img2 from "../../.././assets/awsCrs/FireShot Capture 005 - Awesome Course - awesome-course-8893a.web.app.png";
import img3 from "../../.././assets/awsCrs/awesome-course-8893a.web.app details.png";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";

const AwesomeCourse = () => {
    return (
        <section>
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-5">
                    <div
                        className="lg:col-span-1 w-full"
                        data-aos="fade-down-right"
                    >
                        <Carousel autoPlay={true} infiniteLoop={true}>
                            <div>
                                <img src={img1} alt=" " />
                            </div>
                            <div>
                                <img src={img2} alt=" " />
                            </div>
                            <div>
                                <img src={img3} alt=" " />
                            </div>
                        </Carousel>
                    </div>

                    <div
                        className="lg:col-span-1 w-full"
                        data-aos="fade-down-left"
                    >
                        <div className="flex items-center justify-between">
                            <h1 className="text-3xl font-bold text-primary/90">
                                Awesome Course
                            </h1>
                            <p className="text-white text-sm">
                                (Oct 25 - Oct -27)/2022
                            </p>
                        </div>
                        <p className="text-white my-3">
                            Awesome Course is an online platform where you can
                            buy courses online.
                        </p>
                        <div className="my-3 flex flex-wrap items-center gap-5">
                            <Link
                                to={{
                                    pathname: "///awesome-course-8893a.web.app/",
                                }}
                                className="text-primary font-bold normal-case hover:text-white btn btn-primary  bg-accent/50 border-none btn-sm hover:scale-105 py-2 rounded  px-5 "
                                target="_blank"
                                rel="noreferrer"
                            >
                                Live Website
                            </Link>
                            <Link
                                to={{
                                    pathname:
                                        "//github.com/mehedi2283/awesome-course-client",
                                }}
                                className="text-primary font-bold normal-case hover:text-white btn btn-primary  bg-accent/50 border-none btn-sm hover:scale-105 py-2 rounded  px-5 "
                                target="_blank"
                                rel="noreferrer"
                            >
                                Client GitHub
                            </Link>
                            <Link
                                to={{
                                    pathname:
                                        "//github.com/mehedi2283/awesome-course-server",
                                }}
                                className="text-primary font-bold normal-case hover:text-white btn btn-primary  bg-accent/50 border-none btn-sm hover:scale-105 py-2 rounded  px-5 "
                                target="_blank"
                                rel="noreferrer"
                            >
                                Server GitHub
                            </Link>
                        </div>
                        <h2 className="text-white font-bold  uppercase">
                            📑Features
                        </h2>
                        <ul className="text-white my-3 flex flex-col gap-3">
                            <li className="flex items-center">
                                <TiTick className="text-primary text-2xl"></TiTick>{" "}
                                <span>Firebase Login System.</span>
                            </li>
                            <li className="flex items-center">
                                <TiTick className="text-primary text-2xl"></TiTick>{" "}
                                <span>Can see courses details.</span>
                            </li>
                            <li className="flex items-center">
                                <TiTick className="text-primary text-2xl"></TiTick>{" "}
                                <span>Private Checkout page.</span>
                            </li>
                            <li className="flex items-center">
                                <TiTick className="text-primary text-2xl"></TiTick>{" "}
                                <span>Responsive Design.</span>
                            </li>
                        </ul>
                        <h2 className="text-primary/90 font-bold  uppercase">
                            🚀 Technology
                        </h2>
                        <div className="flex items-center flex-wrap gap-3 my-3">
                            <button className="text-slate-300 bg-accent/50 py-2 rounded shadow  text-sm px-5 ">
                                React.js
                            </button>
                            <button className="text-slate-300 bg-accent/50 py-2 rounded shadow  text-sm px-5 ">
                                React Router Dom
                            </button>
                            <button className="text-slate-300 bg-accent/50 py-2 rounded shadow  text-sm px-5 ">
                                Tailwind CSS
                            </button>
                            <button className="text-slate-300 bg-accent/50 py-2 rounded shadow  text-sm px-5 ">
                                Firebase
                            </button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AwesomeCourse;
