import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import "./GoToTop.css";

const GoToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const goToBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    const listenToScroll = () => {
        let heightToHidden = 500;
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll > heightToHidden) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    }, []);

    return (
        <div className="goto-top transition-all duration-300">
            {isVisible && (
                <>
                    {" "}
                    <div className="top-btn peer">
                        <div className="top-btn hover:bg-accent hover:backdrop-blur-sm hover:text-primary font-bold ">
                            <IoIosArrowUp
                                className="top-btn-icon text-4xl"
                                onClick={goToBtn}
                            />
                        </div>
                    </div>
                    <span className="top-btn2 rounded-full peer-hover:text-primary peer-hover:animate-ping  block"></span>
                </>
            )}
        </div>
    );
};

// const Wrapper = styled.section`

// `;

export default GoToTop;
