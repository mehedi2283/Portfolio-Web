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
        <section className="cursor-default">
            <div className="container">
                <div className="mb-5 grid grid-cols-1 gap-10 lg:grid-cols-2">
                    <div className="w-full lg:col-span-1" data-aos="fade-down">
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

                    <div className="w-full lg:col-span-1" data-aos="fade-up">
                        <div className="flex items-center justify-between">
                            <h1 className="text-3xl font-bold text-primary/90">
                                Awesome Course
                            </h1>
                            <p className="text-xs text-white md:text-sm">
                                (Oct 25 - Oct -27)/2022
                            </p>
                        </div>
                        <p className="my-3 text-white">
                            Awesome Course is an online platform where you can
                            buy courses online.
                        </p>
                        <div className="my-3 flex flex-wrap items-center gap-5">
                            <Link
                                to={{
                                    pathname:
                                        "///awesome-course-8893a.web.app/",
                                }}
                                className="btn-primary btn-sm btn rounded border-none bg-accent/50  py-2 px-5 font-bold normal-case text-primary hover:scale-105  hover:text-white "
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
                                className="btn-primary btn-sm btn rounded border-none bg-accent/50  py-2 px-5 font-bold normal-case text-primary hover:scale-105  hover:text-white "
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
                                className="btn-primary  btn-sm btn rounded border-none bg-accent/50  py-2 px-5 font-bold normal-case text-primary hover:scale-105  hover:text-white "
                                target="_blank"
                                rel="noreferrer"
                            >
                                Server GitHub
                            </Link>
                        </div>
                        <h2 className="font-bold uppercase  text-white">
                            📑Features
                        </h2>
                        <ul className="my-3 flex flex-col gap-3 text-white">
                            <li className="flex items-center">
                                <TiTick className="text-2xl text-primary"></TiTick>{" "}
                                <span>Single pase web app.</span>
                            </li>
                            <li className="flex items-center">
                                <TiTick className="text-2xl text-primary"></TiTick>{" "}
                                <span>Firebase Login System.</span>
                            </li>
                            <li className="flex items-center">
                                <TiTick className="text-2xl text-primary"></TiTick>{" "}
                                <span>Can see courses details.</span>
                            </li>
                            <li className="flex items-center">
                                <TiTick className="text-2xl text-primary"></TiTick>{" "}
                                <span>Private Checkout page.</span>
                            </li>
                            <li className="flex items-center">
                                <TiTick className="text-2xl text-primary"></TiTick>{" "}
                                <span>Responsive Design.</span>
                            </li>
                        </ul>
                        <h2 className="font-bold uppercase  text-primary/90">
                            🚀 Technology
                        </h2>
                        <div className="my-3 flex flex-wrap items-center gap-3">
                            <p className="rounded bg-accent/50 py-2 px-5 text-sm  text-slate-300 shadow ">
                                React.js
                            </p>
                            <p className="rounded bg-accent/50 py-2 px-5 text-sm  text-slate-300 shadow ">
                                React Router Dom
                            </p>
                            <p className="rounded bg-accent/50 py-2 px-5 text-sm  text-slate-300 shadow ">
                                Bootstrap CSS
                            </p>
                            <p className="rounded bg-accent/50 py-2 px-5 text-sm  text-slate-300 shadow ">
                                Firebase
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AwesomeCourse;
