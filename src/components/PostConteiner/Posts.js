import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postServise} from "../../services/postServise";
import {Post} from "./Post";

const Posts = () => {
    const {userId} = useParams()
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        postServise.getById(userId).then(({data})=>setPosts(data))
    }, []);

    return (
        <div>
            {posts.map(post=><Post key={posts.id} post={post} />)}
        </div>
    );
};

export {Posts};