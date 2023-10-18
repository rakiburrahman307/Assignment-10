import { Outlet } from "react-router-dom";
import Header from "./pages/Header";

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;