import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Home from './components/Home/Home';
import ScrollCarousel from "scroll-carousel";
import DetailsLayout from './layout/DetailsLayout';
// import ProjectDetails from './ProjectDetails/ProjectDetails';
import SellPhone from "./components/Projects/SellPhone/SellPhone";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import TourDe from './components/Projects/TourDe/TourDe';
import AwesomeCourse from './components/Projects/AwesomeCourse/AwesomeCourse';



function App() {



    // useEffect(() => {
    //     AOS.init()
    //     AOS.refresh();
    //     AOS.refreshHard();
    // },[])
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main></Main>,
            children: [
                {
                    path: "/",
                    element: <Home></Home>,
                }, 
                // {
                //     path: "/home",
                //     element: <Home></Home>,
                // }, 
            ],
        },
        {
            path: "/details",
            element: <DetailsLayout></DetailsLayout>,
            children: [
                {
                    path: "/details/sellPhone-details",
                    element:<SellPhone></SellPhone>,
                }, 
                {
                    path: "/details/tourDe-details",
                    element:<TourDe></TourDe>,
                }, 
                {
                    path: "/details/awesome-course-details",
                    element:<AwesomeCourse></AwesomeCourse>,
                }, 
            ],
        },
    ]);

    const handleScroll = () => {
      new ScrollCarousel(".my-carousel", {
          autoplay: true,
      });
  };

    return (
      
        <>
            <div className=" lg:px-32 px-12  " onMouseMove={handleScroll}>

                <RouterProvider router={router} />
            </div>
        </>
    );
}

export default App;
