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
        <div className="goto-top ">
            {isVisible && (
                <>
                    {/* <div
                        className="top-btn hover:bg-accent duration-300 hover:text-primary font-bold"
                        
                    ></div> */}
                    <IoIosArrowUp className="top-btn-icon animate-bounce top-btn"  onClick={goToBtn}/>
                </>
            )}
        </div>
    );
};

// const Wrapper = styled.section`

// `;

export default GoToTop;
