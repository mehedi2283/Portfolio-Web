import React from "react";

const Blogs = () => {
    return (
        <section id="blogs" className=" pt-20 mb-72 cursor-default">
            <h1 className="text-4xl text-center font-bold divider  uppercase mb-20 " data-aos="fade-down">
                <span className=" -translate-y-4 ">my</span>{" "}
                <span className="underline underline-offset-4 text-primary -translate-y-5">
                    blogs
                </span>
            </h1>
            <div className=" flex justify-center mt-20" data-aos="fade-down ">
                <h1 className="text-center font-bold sm:text-3xl text-xl uppercase text-white flex items-center justify-center">
                    Comming 
                    <span className="h-6 w-6 mx-1 items-center justify-end ml-4 flex"> s</span>
                    <span className="h-6 w-6 mx-1 animate-spin rounded-full border-4 border-dashed border-red-600 block"></span>
                    <span className="h-6 w-6 mx-1 animate-spin rounded-full border-4 border-dashed border-red-600 block"></span>
                    <span className="h-6 w-6 mx-1 items-center flex"> n...</span>
                   
                </h1>
            </div>
        </section>
    );
};

export default Blogs;
