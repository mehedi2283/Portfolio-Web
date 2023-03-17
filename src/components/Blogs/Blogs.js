import React from "react";

const Blogs = () => {
    return (
        <section id="blogs" className=" mb-72 cursor-default pt-20">
            <h1
                className="divider mb-20 text-center text-4xl  font-bold uppercase "
                data-aos="fade-down"
            >
                <span className=" -translate-y-4 ">my</span>{" "}
                <span className="-translate-y-5 text-primary underline underline-offset-4">
                    blogs
                </span>
            </h1>
            <div className=" mt-20 flex justify-center" data-aos="fade-down ">
                <h1 className="flex items-center justify-center text-center text-xl font-bold uppercase text-white sm:text-3xl">
                    Comming
                    <span className="mx-1 ml-4 flex h-6 w-6 items-center justify-end">
                        {" "}
                        s
                    </span>
                    <span className="mx-1 block h-6 w-6 animate-spin rounded-full border-4 border-dashed border-red-600"></span>
                    <span className="mx-1 block h-6 w-6 animate-spin rounded-full border-4 border-dashed border-red-600"></span>
                    <span className="mx-1 flex h-6 w-6 items-center">
                        {" "}
                        n...
                    </span>
                </h1>
            </div>
        </section>
    );
};

export default Blogs;
