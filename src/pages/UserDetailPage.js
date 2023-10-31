import {Outlet, useLoaderData} from "react-router-dom";
import {UserDetails} from "../components/UserDetailConteiner/UserDetails";

const UserDetailPage = () => {
    const {data:user}=useLoaderData()
    // const {state} = useLocation();
    return (
        <div>
            <UserDetails user={user}/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {UserDetailPage};