import React from 'react';
import css from "./Post.module.css"

const Post = ({post, click}) => {
    const {id, title} = post;

    return (
        <div className={css.Post}>
            <p>ID: {id} </p>
            <p>Title: {title}</p>
            <button onClick={() => click(id)}>Clik</button>

        </div>
    );
};

export {Post};