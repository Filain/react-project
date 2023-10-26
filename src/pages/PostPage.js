import {useLocation} from "react-router-dom";
import {Posts} from "../components/PostConteiner/Posts";

const PostPage = () => {
   const {state} = useLocation()

    return (
        <div>
            <Posts state={state} />
        </div>
    );
};

export {PostPage};