import {Users} from "../components/UserConteinr/Users";
import {Outlet} from "react-router-dom";

const UserPage = () => {
    return (
        <div>
            <Users/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {UserPage};