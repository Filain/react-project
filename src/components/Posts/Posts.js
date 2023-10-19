import React from 'react';
import {useState, useEffect} from "react";

import {Post} from "../Post/Post";
import css from "./Posts.module.css"
import axios from "axios";
import {axiosServise} from "../../servise/axiosServise";
import {postService} from "../../servise/postServise";
import {PostDetails} from "../PostDetails/PostDetails";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [postDetails, setPostDetails] = useState(null);
    


    const click = async (postId) => {
        const {data}=await postService.getById(postId);
        setPostDetails(data);
        console.log(data);
    }



    useEffect(() => {

        postService.getAll().then(({data}) => setPosts(data))

    }, [])
    return (
<div>
        <div className={css.Posts}>
            {posts.map(post => <Post key={post.id} post={post} click={click}/>)}

        </div>
    {
        postDetails && <PostDetails postDetails={postDetails}/>
    }

</div>
    );
};

export {Posts};