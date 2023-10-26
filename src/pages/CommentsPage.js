import {Comments} from "../components/CommentsContainer/Comments";
import {Outlet} from "react-router-dom";

const CommentsPage = () => {
    return (
        <div>
            <Outlet/>
            <hr/>
            <br/>
            <Comments/>

        </div>
    );
};

export {CommentsPage};