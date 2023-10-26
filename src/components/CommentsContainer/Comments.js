import {useEffect, useState} from "react";

import {commentsServise} from "../../services/commentsServise";
import {Comment} from "./Comment";

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentsServise.getAll().then(({data})=>setComments(data))
    }, []);

    return (
        <div>
            {comments.map(comment =><Comment key={comment.id} comment={comment} /> )}
        </div>
    );
};

export {Comments};