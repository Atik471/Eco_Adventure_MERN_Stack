import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Root = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          easing: "ease-in-out",
        //   delay: 500,
        });
      }, []);

    return (
        <div className="font-lato min-h-screen flex flex-col">
            
            <Navbar />
            <main className="flex-1">
                <Outlet></Outlet>
            </main>
            
            <Footer />
        </div>
    );
};

export default Root;