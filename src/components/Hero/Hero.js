import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaDownload } from "react-icons/fa";
// import img from "../../assets/hero-img.png";
import hero1 from "../../assets/sellphone/rsz_fireshot_capture_003_-_home_-_sellphone_-_localhost.png";
import hero2 from "../../assets/tourDe/rsz_1fireshot_capture_004_-_home_-_tourde_-_tourde-1a814webapp.png";
import hero3 from "../../assets/awsCrs/rsz_fireshot_capture_006_-_awesome_course_-_awesome-course-8893awebapp.png";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div
            id="home"
            className=" mb-6 cursor-default  flex-col grid grid-cols-12 justify-between  justify-items-center items-center  min-h-screen"
        >
            <div
                className="col-span-12 w-5/6 md:col-span-6 "
                data-aos="fade-right"
            >
                {/* <img
                        alt=""
                        src={img}
                        className="w-full rounded-lg shadow-2xl backdrop-blur-sm bg-accent/10"
                    /> */}

                <div className="order-1 lg:order-2 grid grid-cols-3  lg:px-5 lg:mb-0  ">
                    <div className="col-span-1 translate-y-10 -skew-y-12 animate-pulse">
                        <img
                            src={hero1}
                            alt=""
                            className=" w-full rounded shadow-2xl shadow-slate-700"
                        />
                    </div>
                    <div className="col-span-1 skew-y-12 ">
                        <img
                            src={hero2}
                            alt=""
                            className=" w-full rounded shadow-2xl shadow-slate-700"
                        />
                    </div>
                    <div className="col-span-1 mt-10 skew-x-12 animate-pulse">
                        <img
                            src={hero3}
                            alt=""
                            className=" w-full rounded shadow-2xl shadow-slate-700"
                        />
                    </div>
                </div>
            </div>

            <div
                className="col-span-12 md:col-span-6  bg-accent/10 w-full backdrop-blur-sm rounded-md px-10 py-20"
                data-aos="fade-left"
            >
                <h1 className="text-5xl  font-bold mb-4">Hello!</h1>
                <h1 className="text-5xl  font-bold uppercase">
                    I'm{" "}
                    <span className="text-primary">
                        <Typewriter
                            words={[`Mehedi Hasan `]}
                            loop={9999}
                            cursor
                            cursorStyle="_"
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </h1>
                <h1 className=" text-2xl font-bold uppercase delay-1000">
                    <Typewriter
                        words={[`A Front End DEVELOPER`]}
                        loop={9999}
                        cursor
                        cursorStyle="_"
                        typeSpeed={150}
                        deleteSpeed={50}
                        // delaySpeed={1000}
                    />
                </h1>

                <Link
                    to={{
                        pathname:
                            "//drive.google.com/file/d/1LxZVZ0Ti_icfpQ2FV39kOHWX0x_P9U8v/view",
                    }}
                    target="_blank"
                    className="btn btn-primary mt-32 text-primary normal-case rounded-sm bg-accent/50 items-center border-none font-black hover:text-white hover:scale-105"
                >
                    <FaDownload></FaDownload>{" "}
                    <span className="ml-2">Download Resume</span>
                </Link>
            </div>
        </div>
    );
};

export default Hero;
