import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        
            <footer
                className="footer footer-center p-10 bg-accent/20 text-base-content rounded w-full cursor-default"
            >
                <div>
                    <div className="grid grid-flow-col gap-4">
                        <Link
                            to={{
                                pathname: "//www.linkedin.com/in/mehedi-hasan2283/",
                            }}
                            target="_blank"
                            className="text-3xl lg:text-5xl tooltip tooltip-accent "
                            data-tip="LinkedIn"
                        >
                            <FaLinkedin className="hover:text-primary/80 duration-200 hover:scale-105"></FaLinkedin>
                        </Link>
                        <Link
                            to={{
                                pathname: "//github.com/mehedi2283",
                            }}
                            target="_blank"
                            className="text-3xl lg:text-5xl tooltip tooltip-accent "
                            data-tip="GitHub"
                        >
                            <FaGithubSquare className="hover:text-primary/80 duration-200 hover:scale-105"></FaGithubSquare>
                        </Link>
                        <Link
                            to={{
                                pathname: "//www.facebook.com/MH.2283/",
                            }}
                            target="_blank"
                            className="text-3xl lg:text-5xl tooltip tooltip-accent "
                            data-tip="FaceBook"
                        >
                            <FaFacebookSquare className="hover:text-primary/80 duration-200 hover:scale-105"></FaFacebookSquare>
                        </Link>
                        
                    </div>
                </div>
                <div>
                    <p>
                        Copyright © 2022 - All right reserved by{" "}
                        <span className="text-primary font-bold">Mehedi Hasan</span>
                    </p>
                </div>
            </footer>
        
    );
};

export default Footer;
