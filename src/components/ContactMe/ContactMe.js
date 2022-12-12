import React, { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
// import icon from "../.././assets/logo.png";
import "react-toastify/dist/ReactToastify.css";

const ContactMe = () => {
    const [bgPrimary1, setBgPrimary1] = useState(false);
    const [bgPrimary2, setBgPrimary2] = useState(false);
    const [bgPrimary3, setBgPrimary3] = useState(false);
    const [bgPrimary4, setBgPrimary4] = useState(false);
    const [bgPrimary5, setBgPrimary5] = useState(false);
    const [bgPrimary6, setBgPrimary6] = useState(false);


    const handleNameLabel = () => {
        setBgPrimary1(!bgPrimary1);
    };
    const handleNameLabelFalse = () => {
        setBgPrimary1(false);
    };


    const handleEmailLabel = () => {
        setBgPrimary2(!bgPrimary1);
    };
    const handleEmailLabelFalse = () => {
        setBgPrimary2(false);
    };


    const handleMgsLabel = () => {
        setBgPrimary3(!bgPrimary3);
    };
    const handleMgsLabelFalse = () => {
        setBgPrimary3(false);
    };












    const handleNameLabelHover = () => {
        setBgPrimary4(!bgPrimary4);
    };
    const handleNameLabelFalseHover = () => {
        setBgPrimary4(false);
    };
    const handleEmailLabelHover = () => {
        setBgPrimary5(!bgPrimary5);
    };
    const handleEmailLabelFalseHover = () => {
        setBgPrimary5(false);
    };
    const handleMgsLabelHover = () => {
        setBgPrimary6(!bgPrimary6);
    };
    const handleMgsLabelFalseHover = () => {
        setBgPrimary6(false);
    };






    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        // console.log()

        emailjs
            .sendForm(
                process.env.REACT_APP_YOUR_SERVICE_ID,
                process.env.REACT_APP_YOUR_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_YOUR_PUBLIC_KEY
            )
            .then(
                (result) => {
                    // console.log(result.text);
                    e.target.reset();
                    toast.success("Mail sent to Mehedi", {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                },
                (error) => {
                    // console.log(error.text);
                }
            );
    };

    return (
        <div id="contacts" className="mt-20">
            <h1
                className="text-4xl text-center font-bold divider  uppercase "
                data-aos="fade-down"
            >
                <span className=" -translate-y-4 ">Contact</span>{" "}
                <span className="underline underline-offset-4 text-primary -translate-y-5">
                    Me
                </span>
            </h1>
            <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col w-1/2 mx-auto"
            >
                <div className="flex flex-col" data-aos="fade-down">
                    <label
                        className={`mt-4 text-lg translate-y-4 bg-accent/40 backdrop-blur-sm text-primary border-primary/30 border w-24  text-center rounded-lg translate-x-5 z-10 font-bold ${
                            bgPrimary1 || bgPrimary4 === true
                                ? "bg-primary/50 duration-200 text-slate-300 shadow-primary/70 shadow-lg"
                                : " duration-200"
                        }`}
                    >
                        Name
                    </label>
                    <input
                        onFocus={handleNameLabel}
                        onBlur={handleNameLabelFalse}
                        onMouseEnter={handleNameLabelHover}
                        onMouseLeave={handleNameLabelFalseHover}
                        type="text"
                        name="from_name"
                        required
                        className="input bg-accent/20 text-primary backdrop-blur-sm mt-1 border border-primary/30 focus:outline-none focus:border-primary/70 p-5 h-14"
                    />
                </div>
                <div className="flex flex-col" data-aos="fade-down">
                    <label
                        className={`mt-4 text-lg translate-y-4 bg-accent/40 backdrop-blur-sm text-primary border-primary/30 border w-24  text-center rounded-lg translate-x-5 z-10 font-bold ${
                            bgPrimary2 || bgPrimary5 === true
                                ? "bg-primary/50 duration-200 text-slate-300 shadow-primary/70 shadow-lg"
                                : " duration-200"
                        }`}
                    >
                        Email
                    </label>
                    <input
                        onFocus={handleEmailLabel}
                        onBlur={handleEmailLabelFalse}
                        onMouseEnter={handleEmailLabelHover}
                        onMouseLeave={handleEmailLabelFalseHover}
                        type="email"
                        name="from_email"
                        required
                        className="input bg-accent/20 text-primary backdrop-blur-sm mt-1 border border-primary/30 focus:outline-none focus:border-primary/70 p-5 h-14"
                    />
                </div>
                <div className="flex flex-col" data-aos="fade-down">
                    <label
                        className={`mt-4 text-lg translate-y-4 bg-accent/40 backdrop-blur-sm text-primary border-primary/30 border w-24  text-center rounded-lg translate-x-5 z-10 font-bold ${
                            bgPrimary3 || bgPrimary6 === true
                                ? "bg-primary/50 duration-200 text-slate-300 shadow-primary/70 shadow-lg"
                                : " duration-200"
                        }`}
                    >
                        Message
                    </label>
                    <textarea
                        onFocus={handleMgsLabel}
                        onBlur={handleMgsLabelFalse}
                        onMouseEnter={handleMgsLabelHover}
                        onMouseLeave={handleMgsLabelFalseHover}
                        name="message"
                        required
                        className="textarea bg-accent/20 backdrop-blur-sm h-52 mt-1 border border-primary/30 p-5 text-primary focus:outline-none focus:border-primary/70"
                    />
                </div>
                <input
                    data-aos="fade-down"
                    type="submit"
                    value="Send"
                    className="btn
                btn-primary mt-4  text-primary font-bold hover:text-slate-300 border-primary/40 duration-500 w-11/12 mx-auto backdrop-blur-sm bg-accent/30 border"
                />
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </form>
        </div>
    );
};

export default ContactMe;
