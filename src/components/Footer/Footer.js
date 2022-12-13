import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer
                data-aos="fade-down"
                className="footer cursor-default footer-center p-10 bg-accent/20 backdrop-blur-sm text-base-content rounded w-full"
            >
                <div>
                    <div className="grid grid-flow-col gap-4">
                        <Link
                            to={{
                                pathname: "//www.linkedin.com/in/mehedi-hasan2283/",
                            }}
                            className="md:text-2xl lg:text-5xl tooltip tooltip-accent"
                            data-tip="LinkedIn"
                        >
                            <FaLinkedin></FaLinkedin>
                        </Link>
                        <Link
                            to={{
                                pathname: "//github.com/mehedi2283",
                            }}
                            className="md:text-2xl lg:text-5xl tooltip tooltip-accent"
                            data-tip="GitHub"
                        >
                            <FaGithubSquare></FaGithubSquare>
                        </Link>
                        <Link
                            to={{
                                pathname: "//www.facebook.com/MH.2283/",
                            }}
                            className="md:text-2xl lg:text-5xl tooltip tooltip-accent"
                            data-tip="FaceBook"
                        >
                            <FaFacebookSquare></FaFacebookSquare>
                        </Link>
                        
                    </div>
                </div>
                <div>
                    <p>
                        Copyright © 2022 - All right reserved by{" "}
                        <span className="text-red-500">Mehedi Hasan</span>
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
