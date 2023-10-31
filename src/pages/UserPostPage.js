
import {UserPosts} from "../components/UserPostContainer/UserPosts";
import {useLoaderData} from "react-router-dom";

const UserPostPage = () => {

    const {data}=useLoaderData()



    return (
        <div>
            <UserPosts posts={data}/>

        </div>
    );
};

export {UserPostPage};