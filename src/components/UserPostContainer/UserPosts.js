import {UserPost} from "./UserPost";

const UserPosts = ({posts}) => {





    return (
        <div>
            {posts.map(post=><UserPost key={post.id} post={post}/>)}
        </div>
    );
};

export {UserPosts};