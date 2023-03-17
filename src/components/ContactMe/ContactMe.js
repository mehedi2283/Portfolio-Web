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
        <div id="contacts" className="pt-20 ">
            <h1
                className="divider cursor-default text-center text-3xl font-bold  uppercase sm:text-4xl"
                data-aos="fade-down"
            >
                <span className=" -translate-y-4 ">Contact</span>{" "}
                <span className="-translate-y-5 text-primary underline underline-offset-4">
                    Me
                </span>
            </h1>
            <form
                ref={form}
                onSubmit={sendEmail}
                className="mx-auto flex w-full flex-col xl:w-2/3"
            >
                <div
                    className="relative mt-9 flex flex-col"
                    data-aos="fade-down"
                >
                    <input
                        type="text"
                        name="from_name"
                        required
                        className="peer  input mt-1 h-14 border border-primary/30 bg-accent/20 text-primary focus:border-primary/70 focus:outline-none focus:backdrop-blur-sm"
                    />
                    <label
                        className={`absolute -top-7
                        z-10 mt-4 w-24 translate-x-5 rounded-lg border border-primary/30 bg-accent/40 text-center    text-lg font-bold text-primary  backdrop-blur-sm transition-all peer-hover:bg-primary/50 peer-hover:text-slate-300 peer-hover:shadow-lg peer-hover:shadow-primary/70  peer-focus:-top-12 peer-focus:bg-primary/50 peer-focus:text-slate-300 peer-focus:shadow-lg peer-focus:shadow-primary/70 `}
                    >
                        Name
                    </label>
                </div>
                <div
                    className="relative mt-9 flex flex-col"
                    data-aos="fade-down"
                >
                    <input
                        type="email"
                        name="from_email"
                        required
                        className="peer input mt-1 h-14 border border-primary/30 bg-accent/20 p-5 text-primary focus:border-primary/70 focus:outline-none focus:backdrop-blur-sm"
                    />
                    <label
                        className={`absolute -top-7 
                        z-10 mt-4 w-24 translate-x-5 rounded-lg border border-primary/30 bg-accent/40 text-center text-lg font-bold text-primary  backdrop-blur-sm transition-all peer-hover:bg-primary/50 peer-hover:text-slate-300 peer-hover:shadow-lg peer-hover:shadow-primary/70  peer-focus:-top-12 peer-focus:bg-primary/50 peer-focus:text-slate-300 peer-focus:shadow-lg peer-focus:shadow-primary/70 `}
                    >
                        Email
                    </label>
                </div>
                <div data-aos="fade-down">
                    <div className="relative mt-9 flex flex-col transition-all duration-200">
                        <textarea
                            name="message"
                            required
                            className="peer textarea mt-1 h-52 border border-primary/30 bg-accent/20 p-5 text-primary focus:border-primary/70  focus:outline-none focus:backdrop-blur-sm"
                        />
                        <label
                            className="absolute -top-7 
                        z-10 mt-4 w-24 translate-x-5 rounded-lg border border-primary/30 bg-accent/40 text-center    text-lg font-bold text-primary  backdrop-blur-sm transition-all duration-200 peer-hover:bg-primary/50 peer-hover:text-slate-300 peer-hover:shadow-lg  peer-hover:shadow-primary/70 peer-focus:-top-12 peer-focus:bg-primary/50 peer-focus:text-slate-300 peer-focus:shadow-lg peer-focus:shadow-primary/70"
                        >
                            Message
                        </label>
                    </div>
                </div>

                <div data-aos="fade-down" className="mx-auto w-11/12">
                    <input
                        type="submit"
                        value="Send"
                        className="btn-primary
                btn mx-auto  mt-4 w-full border border-primary/40 bg-accent/30 font-bold text-primary backdrop-blur-sm duration-500 hover:text-slate-300"
                    />
                </div>

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
