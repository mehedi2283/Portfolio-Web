import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../.././assets/sellphone/FireShot Capture 012 - Home - SellPhone - localhost.png";
import img2 from "../../.././assets/sellphone/FireShot Capture 020 - All Products - SellPhone - localhost.png";
import img3 from "../../.././assets/sellphone/FireShot Capture 017 - Add Product - SellPhone - localhost.png";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";

const SellPhone = () => {
    return (
        <section>
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-5">
                    <div className="lg:col-span-1 w-full" data-aos="fade-down-right" >
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

                    <div className="lg:col-span-1 w-full" data-aos="fade-down-left">
                        <div className="flex items-center justify-between">
                            <h1 className="text-3xl font-bold text-primary/90">
                                SellPhone
                            </h1>
                            <p className="text-white text-sm">
                                (Nov 24 - Nov -28)/2022
                            </p>
                        </div>
                        <p className="text-white my-3">
                            SellPhone is an online resale store where you can
                            buy products from online and also can sell them.
                        </p>
                        <div className="my-3 flex flex-wrap items-center gap-5">
                            <Link
                                to={{
                                    pathname: "//sellphone-69598.web.app/",
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
                                        "//github.com/mehedi2283/sellphone-client",
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
                                        "//github.com/mehedi2283/sellphone-server",
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
                                <span>Admin Dashboard.</span>
                            </li>
                            <li className="flex items-center">
                                <TiTick className="text-primary text-2xl"></TiTick>{" "}
                                <span>CRUD Operation</span>
                            </li>
                            <li className="flex items-center">
                                <TiTick className="text-primary text-2xl"></TiTick>{" "}
                                <span>Search and Filter functionality</span>
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
                                Node.js
                            </button>
                            <button className="text-slate-300 bg-accent/50 py-2 rounded shadow  text-sm px-5 ">
                                Express.js
                            </button>
                            <button className="text-slate-300 bg-accent/50 py-2 rounded shadow  text-sm px-5 ">
                                Mongo DB
                            </button>
                            <button className="text-slate-300 bg-accent/50 py-2 rounded shadow  text-sm px-5 ">
                                JSON Web Token
                            </button>
                            <button className="text-slate-300 bg-accent/50 py-2 rounded shadow  text-sm px-5 ">
                                Firebase
                            </button>
                            <button className="text-slate-300 bg-accent/50 py-2 rounded shadow  text-sm px-5 ">
                                React Hot Toast
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SellPhone;
