import { Outlet } from "react-router-dom";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import { AuthContext } from "./AuthProvidar/AuthProvider";
import { useContext } from "react";

const Root = () => {
    const { darkMode } = useContext(AuthContext);
    return (
        <div className={`${darkMode ? 'bg-gray-300' : ''} ${darkMode ? 'text-gray-500' : 'text-black'} -z-30`}>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;