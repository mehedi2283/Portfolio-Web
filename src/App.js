import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./components/Home/Home";
// import DetailsLayout from "./layout/DetailsLayout";
import SellPhone from "./components/Projects/SellPhone/SellPhone";
import "aos/dist/aos.css"; // You can also use <link> for styles
import TourDe from "./components/Projects/TourDe/TourDe";
import AwesomeCourse from "./components/Projects/AwesomeCourse/AwesomeCourse";
import "aos/dist/aos.css";

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
                {
                    path: "/details/sellPhone-details",
                    element: <SellPhone></SellPhone>,
                },
                {
                    path: "/details/tourDe-details",
                    element: <TourDe></TourDe>,
                },
                {
                    path: "/details/awesome-course-details",
                    element: <AwesomeCourse></AwesomeCourse>,
                },
            ],
        },
        // {
        //     path: "/",
        //     element: <DetailsLayout></DetailsLayout>,
        //     children: [
        //         {
        //             path: "/details/sellPhone-details",
        //             element: <SellPhone></SellPhone>,
        //         },
        //         {
        //             path: "/details/tourDe-details",
        //             element: <TourDe></TourDe>,
        //         },
        //         {
        //             path: "/details/awesome-course-details",
        //             element: <AwesomeCourse></AwesomeCourse>,
        //         },
        //     ],
        // },
    ]);

    return (
        <>
            <div className=" lg:px-32 md:px-8 px-2 app">
                <RouterProvider router={router} />
            </div>
        </>
    );
}

export default App;
