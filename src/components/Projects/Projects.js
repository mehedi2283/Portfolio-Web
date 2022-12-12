import React from "react";
import project1IMG from "../.././assets/awsCrs/FireShot Capture 005 - Awesome Course - awesome-course-8893a.web.app.png";
import project2IMG from "../.././assets/sellphone/FireShot Capture 012 - Home - SellPhone - localhost.png";
import project3IMG from "../.././assets/tourDe/FireShot Capture 021 - Home - tourDE - tourde-1a814.web.app.png";
import { NavLink } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Projects = () => {
    return (
        <div id="projects" className="mt-20 cursor-default">
            <h1 className="text-4xl text-center font-bold divider  uppercase " data-aos="fade-down">
                <span className=" -translate-y-4 ">MY</span>{" "}
                <span className="underline underline-offset-4 text-primary -translate-y-5">
                    Projects
                </span>
            </h1>

            <p className="text-center" data-aos="fade-down">
                <span className="text-primary text-2xl font-bold">
                    <Typewriter
                        words={[`Some of my project collection`]}
                        loop={9999}
                        cursor
                        cursorStyle="_"
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span>
            </p>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-items-center mt-5">
                <div
                    className="card w-96 rounded-t-sm"
                    data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-duration="500"
                >
                    <figure>
                        <img src={project1IMG} alt="Project" />
                    </figure>
                    <div className="card-body bg-accent/20 backdrop-blur-sm rounded-b-sm">
                        <section className="flex items-baseline justify-between">
                            <h2 className="card-title text-2xl">
                                Awesome Course
                            </h2>
                            <h2 className="text-accent">Online Course</h2>
                        </section>
                        <p className="text-accent mt-8">
                            Awesome Course is an online platform where you can
                            buy courses online.
                        </p>
                        <div className=" flex justify-end gap-8 mt-5">
                            <NavLink
                                to={{
                                    pathname: "//awesome-course-8893a.web.app/",
                                }}
                                target="_blank"
                                className="rounded-sm btn btn-sm btn-primary  text-primary hover:text-white hover:scale-105 bg-accent/50 border-none font-black px-7 "
                            >
                                Live
                            </NavLink>
                            <NavLink to='/details/awesome-course-details' className="rounded-sm btn btn-sm btn-primary  text-primary hover:text-white hover:scale-105 bg-accent/50 border-none font-black">
                                Details
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div
                    className="card w-96 rounded-t-sm"
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="500"
                >
                    <figure>
                        <img src={project2IMG} alt="Project" />
                    </figure>
                    <div className="card-body bg-accent/20 backdrop-blur-sm rounded-b-sm">
                        <section className="flex items-baseline justify-between">
                            <h2 className="card-title text-2xl">
                                Awesome Course
                            </h2>
                            <h2 className="text-accent">E-commerse</h2>
                        </section>
                        <p className="text-accent mt-8">
                            SellPhone  is an online resale store where you can
                            buy products from online and also can sell them.
                        </p>
                        <div className=" flex  justify-end gap-8 mt-5">
                            <NavLink
                                to={{
                                    pathname: "//sellphone-69598.web.app/",
                                }}
                                target="_blank"
                                className="rounded-sm btn-sm btn btn-primary  text-primary hover:text-white hover:scale-105 bg-accent/50 border-none font-black px-7 "
                            >
                                Live
                            </NavLink>
                            <NavLink to='/details/sellPhone-details' className="rounded-sm btn-sm btn btn-primary  text-primary hover:text-white hover:scale-105 bg-accent/50 border-none font-black">
                                Details
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div
                    className="card w-96 rounded-t-sm"
                    data-aos="fade-left"
                    data-aos-duration="500"
                >
                    <figure>
                        <img src={project3IMG} alt="Project" />
                    </figure>
                    <div className="card-body bg-accent/20 backdrop-blur-sm rounded-b-sm">
                        <section className="flex items-baseline justify-between">
                            <h2 className="card-title text-2xl">Tour De</h2>
                            <h2 className="text-accent">Touring services</h2>
                        </section>
                        <p className="text-accent mt-8">
                            Tour De is an online touring service provider site.
                        </p>
                        <div className=" flex justify-end gap-8 mt-5">
                            <NavLink
                                to={{
                                    pathname: "//tourde-1a814.web.app/",
                                }}
                                target="_blank"
                                className="rounded-sm btn-sm btn btn-primary  text-primary hover:text-white hover:scale-105 bg-accent/50 border-none font-black px-7 "
                            >
                                Live
                            </NavLink>
                            <NavLink to='/details/tourDe-details' className="rounded-sm btn btn-sm btn-primary  text-primary hover:text-white hover:scale-105 bg-accent/50 border-none font-black">
                                Details
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
