import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Particle from "./assets/Particles/Particles";




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    
    <React.StrictMode>
        <Particle></Particle>
        
        <App />
        {/* <div className="">
            <Link smooth to="home" className="bottom-10 right-10 fixed btn btn-primary  text-slate-200 hover:bg-accent border-none hover:text-primary btn-circle h-20 w-20">
                <IoIosArrowUp className="text-5xl font-bold"></IoIosArrowUp>
            </Link>
            
        </div> */}
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
