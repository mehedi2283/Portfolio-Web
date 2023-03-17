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
                                tourDe
                            </h1>
                            <p className="text-xs text-white md:text-sm">
                                (Nov 08 - Nov -10)/2022
                            </p>
                        </div>
                        <p className="my-3 text-white">
                            Tour De is an online touring service provider site.
                        </p>
                        <div className="my-3 flex flex-wrap items-center gap-5">
                            <Link
                                to={{
                                    pathname: "//tourde-1a814.web.app/",
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
                                        "//github.com/mehedi2283/tour_de-client",
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
                                        "//github.com/mehedi2283/tour_de-server",
                                }}
                                className="btn-primary btn-sm  btn rounded border-none bg-accent/50  py-2 px-5 font-bold normal-case text-primary hover:scale-105  hover:text-white "
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
                                <span>User login system.</span>
                            </li>
                            <li className="flex items-center">
                                <TiTick className="text-2xl text-primary"></TiTick>{" "}
                                <span>CRUD Operation</span>
                            </li>
                            <li className="flex items-center">
                                <TiTick className="text-2xl text-primary"></TiTick>{" "}
                                <span>Responsive design</span>
                            </li>
                            <li className="flex items-center">
                                <TiTick className="text-2xl text-primary"></TiTick>{" "}
                                <span>NodeJS authentication with JWT</span>
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
                                Tailwind CSS
                            </p>
                            <p className="rounded bg-accent/50 py-2 px-5 text-sm  text-slate-300 shadow ">
                                Node.js
                            </p>
                            <p className="rounded bg-accent/50 py-2 px-5 text-sm  text-slate-300 shadow ">
                                Express.js
                            </p>
                            <p className="rounded bg-accent/50 py-2 px-5 text-sm  text-slate-300 shadow ">
                                Mongo DB
                            </p>
                            <p className="rounded bg-accent/50 py-2 px-5 text-sm  text-slate-300 shadow ">
                                JSON Web Token
                            </p>
                            <p className="rounded bg-accent/50 py-2 px-5 text-sm  text-slate-300 shadow ">
                                React Hot Toast
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

export default TourDe;
