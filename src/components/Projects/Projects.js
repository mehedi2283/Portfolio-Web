import React from "react";
import project1IMG from "../.././assets/awsCrs/FireShot Capture 005 - Awesome Course - awesome-course-8893a.web.app.png";
import project2IMG from "../.././assets/sellphone/FireShot Capture 012 - Home - SellPhone - localhost.png";
import project3IMG from "../.././assets/tourDe/FireShot Capture 021 - Home - tourDE - tourde-1a814.web.app.png";
import { NavLink } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
// import AOS from "aos";
// import "aos/dist/aos.css";
import "./Projects.css";
// AOS.init();

const Projects = () => {
    return (
        <div id="projects" className="cursor-default pt-20">
            <h1
                className="divider text-center text-2xl font-bold uppercase  sm:text-4xl "
                data-aos="fade-down"
            >
                <span className=" -translate-y-4 ">MY</span>{" "}
                <span className="-translate-y-5 text-primary underline underline-offset-4">
                    Projects
                </span>
            </h1>

            <p className="text-center" data-aos="fade-down">
                <span className="font-bold text-primary sm:text-2xl">
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
            <div className="mt-5 grid justify-items-center md:grid-cols-2 lg:grid-cols-3">
                <div
                    className="card w-52 rounded-t-sm md:w-[260px]  lg:w-[235px] xl:w-80"
                    data-aos="fade-down"
                >
                    <figure>
                        <img src={project1IMG} alt="Project" />
                    </figure>
                    <div className="card-body rounded-b-sm bg-accent/20 backdrop-blur-sm">
                        <section className="flex items-baseline justify-between">
                            <h2 className="card-title text-lg">
                                Awesome Course
                            </h2>
                            <h2 className="text-accent">Online Course</h2>
                        </section>
                        <p className="mt-8 text-accent">
                            Awesome Course is an online platform where you can
                            buy courses online.
                        </p>
                        <div className=" mt-5 flex justify-center gap-8">
                            <NavLink
                                to={{
                                    pathname: "//awesome-course-8893a.web.app/",
                                }}
                                target="_blank"
                                className="btn-primary btn-sm btn rounded-sm  border-none bg-accent/50 px-7 font-black text-primary hover:scale-105 hover:text-white "
                            >
                                Live
                            </NavLink>
                            <NavLink
                                to="/details/awesome-course-details"
                                className="btn-primary btn-sm btn rounded-sm  border-none bg-accent/50 font-black text-primary hover:scale-105 hover:text-white"
                            >
                                Details
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div
                    className="card w-52 rounded-t-sm md:w-[260px]  lg:w-[235px] xl:w-80"
                    data-aos="fade-down"
                >
                    <figure>
                        <img src={project2IMG} alt="Project" />
                    </figure>
                    <div className="card-body rounded-b-sm bg-accent/20 backdrop-blur-sm">
                        <section className="flex items-baseline justify-between">
                            <h2 className="card-title text-lg">SellPhone</h2>
                            <h2 className="text-accent">E-comm.</h2>
                        </section>
                        <p className="mt-8 text-accent">
                            SellPhone is an online resale store where you can
                            buy products from online and also can sell them.
                        </p>
                        <div className=" mt-5  flex justify-center gap-8">
                            <NavLink
                                to={{
                                    pathname: "//sellphone-69598.web.app/",
                                }}
                                target="_blank"
                                className="btn-primary btn-sm btn rounded-sm  border-none bg-accent/50 px-7 font-black text-primary hover:scale-105 hover:text-white "
                            >
                                Live
                            </NavLink>
                            <NavLink
                                to="/details/sellPhone-details"
                                className="btn-primary btn-sm btn rounded-sm  border-none bg-accent/50 font-black text-primary hover:scale-105 hover:text-white"
                            >
                                Details
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div
                    className="card w-52 rounded-t-sm md:w-[260px]  lg:w-[235px] xl:w-80"
                    data-aos="fade-down"
                >
                    <figure>
                        <img src={project3IMG} alt="Project" />
                    </figure>
                    <div className="card-body rounded-b-sm bg-accent/20 backdrop-blur-sm">
                        <section className="flex items-baseline justify-between">
                            <h2 className="card-title text-lg">tourDe</h2>
                            <h2 className="text-accent">Services</h2>
                        </section>
                        <p className="mt-8 text-accent">
                            Tour De is an online touring service provider site.
                        </p>
                        <div className=" mt-5 flex justify-center gap-8">
                            <NavLink
                                to={{
                                    pathname: "//tourde-1a814.web.app/",
                                }}
                                target="_blank"
                                className="btn-primary btn-sm btn rounded-sm  border-none bg-accent/50 px-7 font-black text-primary hover:scale-105 hover:text-white "
                            >
                                Live
                            </NavLink>
                            <NavLink
                                to="/details/tourDe-details"
                                className="btn-primary btn-sm btn rounded-sm  border-none bg-accent/50 font-black text-primary hover:scale-105 hover:text-white"
                            >
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
