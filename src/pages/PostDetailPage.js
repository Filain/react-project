import {useLoaderData} from "react-router-dom";
import {PostDetail} from "../components/PostDetailConteiner/PostDetail";
import {useEffect, useState} from "react";
import {commentServise} from "../servises/commentServise";
import {CommentsComponent} from "../components/CommentsComponet/CommentsComponent";

const PostDetailPage = () => {
    const {data: post}=useLoaderData()
    const [comments, setComments] = useState([]);
    useEffect(() => {
        commentServise.getById(post.id).then(({data})=>setComments(data))

    }, [post]);

    // console.log(post)
    return (
        <div>
            <PostDetail post={post}/>
            <hr/>
            {comments.map(comment=><CommentsComponent key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {PostDetailPage};