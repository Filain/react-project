import {useEffect, useState} from "react";

import {commentsServise} from "../../services/commentsServise";
import {Post} from "./Post";

const Posts = ({state}) => {
    const [posts, setPosts] = useState(null);
    console.log("state", state)
    console.log(posts)

    useEffect(() => {
        commentsServise.getByPostId(state).then(({data}) => setPosts(data))
    }, [state]);


    return (
        <div>
            {posts && <Post posts={posts}/>}
        </div>
    );
};

export {Posts};