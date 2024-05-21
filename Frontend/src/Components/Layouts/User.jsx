import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

export default function UserLayout(){
    return <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
} 