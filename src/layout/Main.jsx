import { Outlet } from "react-router-dom";
import Footer from "../pages/home/footer/Footer";
import Navbar from "../pages/home/navbar/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;