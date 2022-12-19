import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../.././assets/tourDe/FireShot Capture 010 - Home - tourDE - tourde-1a814.web.app.png";
import img2 from "../../.././assets/tourDe/FireShot Capture 021 - Home - tourDE - tourde-1a814.web.app.png";
import img3 from "../../.././assets/tourDe/FireShot Capture 008 - Details - tourDE - tourde-1a814.web.app.png";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";

const TourDe = () => {
    return (
        <section className="cursor-default">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-5">
                    <div
                        className="lg:col-span-1 w-full"
                        data-aos="fade-down"
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
                        data-aos="fade-up"
                    >
                        <div className="flex items-center justify-between">
                            <h1 className="text-3xl font-bold text-primary/90">
                                tourDe
                            </h1>
                            <p className="text-white md:text-sm text-xs">
                                (Nov 08 - Nov -10)/2022
                            </p>
                        </div>
                        <p className="text-white my-3">
                            Tour De is an online touring service provider site.
                        </p>
                        <div className="my-3 flex flex-wrap items-center gap-5">
                            <Link
                                to={{
                                    pathname: "//tourde-1a814.web.app/",
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
                                        "//github.com/mehedi2283/tour_de-client",
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
                                        "//github.com/mehedi2283/tour_de-server",
                                }}
                                className="text-primary font-bold  normal-case hover:text-white btn btn-primary  bg-accent/50 border-none btn-sm hover:scale-105 py-2 rounded  px-5 "
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
                                <span>Single pase web app.</span>
                            </li>
                            <li className="flex items-center">
                                <TiTick className="text-primary text-2xl"></TiTick>{" "}
                                <span>User login system.</span>
                            </li>
                            <li className="flex items-center">
                                <TiTick className="text-primary text-2xl"></TiTick>{" "}
                                <span>CRUD Operation</span>
                            </li>
                            <li className="flex items-center">
                                <TiTick className="text-primary text-2xl"></TiTick>{" "}
                                <span>Responsive design</span>
                            </li>
                            <li className="flex items-center">
                                <TiTick className="text-primary text-2xl"></TiTick>{" "}
                                <span>NodeJS authentication with JWT</span>
                            </li>
                        </ul>
                        <h2 className="text-primary/90 font-bold  uppercase">
                            🚀 Technology
                        </h2>
                        <div className="flex items-center flex-wrap gap-3 my-3">
                            <p className="text-slate-300 bg-accent/50 py-2 rounded shadow  text-sm px-5 ">
                                React.js
                            </p>
                            <p className="text-slate-300 bg-accent/50 py-2 rounded shadow  text-sm px-5 ">
                                React Router Dom
                            </p>
                            <p className="text-slate-300 bg-accent/50 py-2 rounded shadow  text-sm px-5 ">
                                Tailwind CSS
                            </p>
                            <p className="text-slate-300 bg-accent/50 py-2 rounded shadow  text-sm px-5 ">
                                Node.js
                            </p>
                            <p className="text-slate-300 bg-accent/50 py-2 rounded shadow  text-sm px-5 ">
                                Express.js
                            </p>
                            <p className="text-slate-300 bg-accent/50 py-2 rounded shadow  text-sm px-5 ">
                                Mongo DB
                            </p>
                            <p className="text-slate-300 bg-accent/50 py-2 rounded shadow  text-sm px-5 ">
                                JSON Web Token
                            </p>
                            <p className="text-slate-300 bg-accent/50 py-2 rounded shadow  text-sm px-5 ">
                                React Hot Toast
                            </p>
                            <p className="text-slate-300 bg-accent/50 py-2 rounded shadow  text-sm px-5 ">
                                Firebase
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TourDe;
