import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../.././assets/sellphone/FireShot Capture 012 - Home - SellPhone - localhost.png";
import img2 from "../../.././assets/sellphone/FireShot Capture 020 - All Products - SellPhone - localhost.png";
import img3 from "../../.././assets/sellphone/FireShot Capture 017 - Add Product - SellPhone - localhost.png";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";

const SellPhone = () => {
    // const [loading] = useState(true);

    //  if(loading) {
    //     return (
    //         <div>
    //             loading...
    //         </div>
    //     )
    //  }
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
                        <div className="flex cursor-default items-center justify-between">
                            <h1 className="text-3xl font-bold text-primary/90">
                                SellPhone
                            </h1>
                            <p className="text-xs text-white md:text-sm">
                                (Nov 24 - Nov -28)/2022
                            </p>
                        </div>
                        <p className="my-3 cursor-default text-white">
                            SellPhone is an online resale store where you can
                            buy products from online and also can sell them.
                        </p>
                        <div className="my-3 flex flex-wrap items-center gap-5">
                            <Link
                                to={{
                                    pathname: "//sellphone-69598.web.app/",
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
                                        "//github.com/mehedi2283/sellphone-client",
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
                                        "//github.com/mehedi2283/sellphone-server",
                                }}
                                className="btn-primary btn-sm btn rounded border-none bg-accent/50  py-2 px-5 font-bold normal-case text-primary hover:scale-105  hover:text-white "
                                target="_blank"
                                rel="noreferrer"
                            >
                                Server GitHub
                            </Link>
                        </div>
                        <h2 className="cursor-default font-bold  uppercase text-white">
                            📑Features
                        </h2>
                        <ul className="my-3 flex cursor-default flex-col gap-3 text-white">
                            <li className="flex items-center">
                                <TiTick className="text-2xl text-primary"></TiTick>{" "}
                                <span>Single pase web app.</span>
                            </li>
                            <li className="flex items-center">
                                <TiTick className="text-2xl text-primary"></TiTick>{" "}
                                <span>Admin Dashboard.</span>
                            </li>
                            <li className="flex items-center">
                                <TiTick className="text-2xl text-primary"></TiTick>{" "}
                                <span>CRUD Operation</span>
                            </li>
                            <li className="flex items-center">
                                <TiTick className="text-2xl text-primary"></TiTick>{" "}
                                <span>Search and Filter functionality</span>
                            </li>
                            <li className="flex items-center">
                                <TiTick className="text-2xl text-primary"></TiTick>{" "}
                                <span>NodeJS authentication with JWT</span>
                            </li>
                        </ul>
                        <h2 className="cursor-default font-bold  uppercase text-primary/90">
                            🚀 Technology
                        </h2>
                        <div className="my-3 flex flex-wrap items-center gap-3 ">
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
                                Firebase
                            </p>
                            <p className="rounded bg-accent/50 py-2 px-5 text-sm  text-slate-300 shadow ">
                                React Hot Toast
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SellPhone;
