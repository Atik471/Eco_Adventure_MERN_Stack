import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Root = () => {
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