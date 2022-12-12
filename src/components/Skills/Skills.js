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

const Skills = () => {
    return (
        <div id="skills" className="">
            <h1 className="text-4xl text-center font-bold divider uppercase mt-20" data-aos="fade-down">
                <span className=" -translate-y-4 ">My</span>{" "}
                <span className="underline underline-offset-4 text-primary -translate-y-5">
                    Skills
                </span>
            </h1>
            <div
                id=""
                data-aos="fade-down"
                className=" my-carousel flex"
                data-carousel='{"speed": 15, "autoplay": true, "smartSpeed": true, "slideSelector": ".my-slide"}'
            >
                <div
                    className="my-slide z-50 tooltip tooltip-accent bg-accent/20 backdrop-blur-sm  p-10 hover:text-primary/80 duration-200 ml-10 text-base hover:scale-105 cursor-default"
                    data-tip="primary"
                >
                    <FaHtml5 className="text-6xl"></FaHtml5>HTML
                </div>
                <div
                    className="my-slide z-50 tooltip tooltip-accent bg-accent/20 backdrop-blur-sm  p-10 hover:text-primary/80 duration-200 ml-10 text-base hover:scale-105 cursor-default"
                    data-tip="primary"
                >
                    <FaCss3Alt className="text-6xl"></FaCss3Alt>CSS
                </div>
                <div
                    className="my-slide z-50 tooltip tooltip-accent bg-accent/20 backdrop-blur-sm  p-10 hover:text-primary/80 duration-200 ml-10 text-base hover:scale-105 cursor-default"
                    data-tip="primary"
                >
                    <TbBrandTailwind className="text-6xl"></TbBrandTailwind>
                    Tailwind
                </div>
                <div
                    className="my-slide z-50 tooltip tooltip-accent bg-accent/20 backdrop-blur-sm  p-10 hover:text-primary/80 duration-200 ml-10 text-base hover:scale-105 cursor-default"
                    data-tip="primary"
                >
                    <FaBootstrap className="text-6xl"></FaBootstrap>Bootstrap
                </div>
                <div
                    className="my-slide z-50 tooltip tooltip-accent bg-accent/20 backdrop-blur-sm  p-10 hover:text-primary/80 duration-200 ml-10 text-base hover:scale-105 cursor-default"
                    data-tip="primary"
                >
                    <TbBrandJavascript className="text-6xl"></TbBrandJavascript>
                    JS
                </div>
                <div
                    className="my-slide z-50 tooltip tooltip-accent bg-accent/20 backdrop-blur-sm  p-10 hover:text-primary/80 duration-200 ml-10 text-base hover:scale-105 cursor-default"
                    data-tip="primary"
                >
                    <FaReact className="text-6xl"></FaReact>React.js
                </div>
                <div
                    className="my-slide z-50 tooltip tooltip-accent bg-accent/20 backdrop-blur-sm  p-10 hover:text-primary/80 duration-200 ml-10 text-base hover:scale-105 cursor-default"
                    data-tip="primary"
                >
                    <SiFirebase className="text-6xl"></SiFirebase>Firebase
                </div>
                <div
                    className="my-slide z-50 tooltip tooltip-accent bg-accent/20 backdrop-blur-sm  p-10 hover:text-primary/80 duration-200 ml-10 text-base hover:scale-105 cursor-default"
                    data-tip="primary"
                >
                    <FaNodeJs className="text-6xl"></FaNodeJs>Node.js
                </div>
                <div
                    className="my-slide z-50 tooltip tooltip-accent bg-accent/20 backdrop-blur-sm  p-10 ml-10 text-base hover:scale-105 hover:text-primary/80 duration-200 cursor-default"
                    data-tip="primary "
                >
                    <FaGithub className="text-6xl"></FaGithub>GitHub
                </div>
            </div>
        </div>
    );
};

export default Skills;
