import React from "react";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { TbBrandTailwind } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaLinux } from "react-icons/fa";
const Skills = () => {
    return (
        <div id="skills" className="pt-20">
            <h1
                className="divider text-center text-4xl font-bold uppercase"
                data-aos="fade-down"
            >
                <span className=" -translate-y-4 ">My</span>{" "}
                <span className="-translate-y-5 text-primary underline underline-offset-4">
                    Skills
                </span>
            </h1>
            <div
                id=""
                data-aos="fade-down"
                className=" my-carousel flex"
                data-carousel='{"speed": 15, "autoplay": true, "smartSpeed": true,}'
            >
                <div
                    className="my-slide tooltip tooltip-accent lg:ml-7 md:ml-5 btn z-50 grid h-full cursor-default justify-items-center border-none border-primary bg-accent/20  text-xs md:text-base font-semibold normal-case text-slate-300  duration-200   hover:text-primary/80 p-3 md:p-5 xl:p-10"
                    data-tip="primary"
                >
                    <FaHtml5 className="text-2xl md:text-4xl xl:text-6xl"></FaHtml5>HTML
                </div>{" "}
                <div
                    className="my-slide tooltip tooltip-accent lg:ml-7 md:ml-5 btn z-50 grid h-full cursor-default justify-items-center border-none border-primary bg-accent/20  text-xs md:text-base font-semibold normal-case text-slate-300  duration-200   hover:text-primary/80 p-3 md:p-5 xl:p-10"
                    data-tip="primary"
                >
                    <FaCss3Alt className="text-2xl md:text-4xl xl:text-6xl"></FaCss3Alt>
                    CSS
                </div>{" "}
                <div
                    className="my-slide tooltip tooltip-accent lg:ml-7 md:ml-5 btn z-50 grid h-full cursor-default justify-items-center border-none border-primary bg-accent/20  text-xs md:text-base font-semibold normal-case text-slate-300  duration-200   hover:text-primary/80 p-3 md:p-5 xl:p-10"
                    data-tip="primary"
                >
                    <TbBrandTailwind className="text-2xl md:text-4xl xl:text-6xl"></TbBrandTailwind>
                    Tailwind
                </div>{" "}
                <div
                    className="my-slide tooltip tooltip-accent lg:ml-7 md:ml-5 btn z-50 grid h-full cursor-default justify-items-center border-none border-primary bg-accent/20  text-xs md:text-base font-semibold normal-case text-slate-300  duration-200   hover:text-primary/80 p-3 md:p-5 xl:p-10"
                    data-tip="primary"
                >
                    <FaBootstrap className=" text-2xl md:text-4xl xl:text-6xl "></FaBootstrap>
                    Bootstrap
                </div>
                <div
                    className="my-slide tooltip tooltip-accent lg:ml-7 md:ml-5 btn z-50 grid h-full cursor-default justify-items-center border-none border-primary bg-accent/20  text-xs md:text-base font-semibold normal-case text-slate-300  duration-200   hover:text-primary/80 p-3 md:p-5 xl:p-10"
                    data-tip="primary"
                >
                    <TbBrandJavascript className="text-2xl md:text-4xl xl:text-6xl"></TbBrandJavascript>
                    JavaScript
                </div>
                <div
                    className="my-slide tooltip tooltip-accent lg:ml-7 md:ml-5 btn z-50 grid h-full cursor-default justify-items-center border-none border-primary bg-accent/20  text-xs md:text-base font-semibold normal-case text-slate-300  duration-200   hover:text-primary/80 p-3 md:p-5 xl:p-10"
                    data-tip="primary"
                >
                    <FaReact className="text-2xl md:text-4xl xl:text-6xl"></FaReact>
                    ReactJS
                </div>
                <div
                    className="my-slide tooltip tooltip-accent lg:ml-7 md:ml-5 btn z-50 grid h-full cursor-default justify-items-center border-none border-primary bg-accent/20  text-xs md:text-base font-semibold normal-case text-slate-300  duration-200   hover:text-primary/80 p-3 md:p-5 xl:p-10"
                    data-tip="primary"
                >
                    <SiFirebase className="text-2xl md:text-4xl xl:text-6xl"></SiFirebase>
                    Firebase
                </div>
                <div
                    className="my-slide tooltip tooltip-accent lg:ml-7 md:ml-5 btn z-50 grid h-full cursor-default justify-items-center border-none border-primary bg-accent/20  text-xs md:text-base font-semibold normal-case text-slate-300  duration-200   hover:text-primary/80 p-3 md:p-5 xl:p-10"
                    data-tip="primary"
                >
                    <FaNodeJs className="text-2xl md:text-4xl xl:text-6xl"></FaNodeJs>
                    NodeJS
                </div>{" "}
                <div
                    className="my-slide tooltip tooltip-accent lg:ml-7 md:ml-5 btn z-50 grid h-full cursor-default justify-items-center border-none border-primary bg-accent/20  text-xs md:text-base font-semibold  normal-case   text-slate-300 duration-200 hover:text-primary/80 p-3 md:p-5 xl:p-10"
                    data-tip="primary "
                >
                    <FaGithub className="text-2xl md:text-4xl xl:text-6xl"></FaGithub>
                    GitHub
                </div>{" "}
                <div
                    className="my-slide tooltip tooltip-accent lg:ml-7 md:ml-5 btn z-50 grid h-full cursor-default justify-items-center border-none border-primary bg-accent/20  text-xs md:text-base font-semibold  normal-case   text-slate-300 duration-200 hover:text-primary/80 p-3 md:p-5 xl:p-10"
                    data-tip="primary "
                >
                    <TbBrandNextjs className="text-2xl md:text-4xl xl:text-6xl"></TbBrandNextjs>
                    NextJS
                </div>{" "}
                <div
                    className="my-slide tooltip tooltip-accent lg:ml-7 md:ml-5 btn z-50 grid h-full cursor-default justify-items-center border-none border-primary bg-accent/20  text-xs md:text-base font-semibold  normal-case   text-slate-300 duration-200 hover:text-primary/80 p-3 md:p-5 xl:p-10"
                    data-tip="primary "
                >
                    <FaLinux className="text-2xl md:text-4xl xl:text-6xl"></FaLinux>
                    Linux
                </div>
            </div>
        </div>
    );
};

export default Skills;
