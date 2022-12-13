import React, { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
// import icon from "../.././assets/logo.png";
import "react-toastify/dist/ReactToastify.css";

const ContactMe = () => {
   





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
                className="text-4xl text-center font-bold divider  uppercase cursor-default"
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
                <div className="flex flex-col relative mt-9" data-aos="fade-down">
                    
                    <input
                       
                        type="text"
                        name="from_name"
                        required
                        autocomplete="off"
                        className="input  peer bg-accent/20 text-primary backdrop-blur-sm mt-1 border border-primary/30 focus:outline-none focus:border-primary/70 h-14"
                    />
                    <label
                        className={`peer-focus:bg-primary/50 peer-hover:bg-primary/50
                        peer-hover:text-slate-300 peer-focus:text-slate-300 peer-hover:shadow-primary/70 peer-hover:shadow-lg peer-focus:shadow-lg peer-focus:shadow-primary/70 absolute -top-7 peer-focus:-top-12    transition-all mt-4 text-lg  bg-accent/40 backdrop-blur-sm text-primary border-primary/30 border w-24  text-center rounded-lg translate-x-5 z-10 font-bold `}
                    >
                        Name
                    </label>
                </div>
                <div className="flex flex-col relative mt-9" data-aos="fade-down">
                    
                    <input
                       
                        type="email"
                        name="from_email"
                        required
                        autocomplete="off"
                        className="input peer bg-accent/20 text-primary backdrop-blur-sm mt-1 border border-primary/30 focus:outline-none focus:border-primary/70 p-5 h-14"
                    />
                    <label
                        className={`peer-focus:bg-primary/50 peer-hover:bg-primary/50 
                        peer-hover:text-slate-300 peer-focus:text-slate-300 peer-hover:shadow-primary/70 peer-hover:shadow-lg peer-focus:shadow-lg peer-focus:shadow-primary/70 absolute -top-7 peer-focus:-top-12 transition-all mt-4 text-lg  bg-accent/40 backdrop-blur-sm text-primary border-primary/30 border w-24  text-center rounded-lg translate-x-5 z-10 font-bold `}
                    >
                        Email
                    </label>
                </div>
                <div className="flex flex-col relative mt-9 transition-all duration-200" data-aos="fade-down">
                    
                    <textarea
                       
                        name="message"
                        required
                        autocomplete="off"
                        className="textarea peer bg-accent/20 backdrop-blur-sm h-52 mt-1 border border-primary/30 p-5 text-primary focus:outline-none focus:border-primary/70"
                    />
                    <label
                        className={`peer-focus:bg-primary/50 peer-hover:bg-primary/50 
                        peer-hover:text-slate-300 peer-focus:text-slate-300 peer-hover:shadow-primary/70 peer-hover:shadow-lg peer-focus:shadow-lg peer-focus:shadow-primary/70 absolute -top-7 peer-focus:-top-12    transition-all mt-4 text-lg  bg-accent/40 backdrop-blur-sm text-primary border-primary/30 border w-24  text-center rounded-lg translate-x-5 z-10 font-bold duration-200`}
                    >
                        Message
                    </label>
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
