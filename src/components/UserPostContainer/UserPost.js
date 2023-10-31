import {useNavigate} from "react-router-dom";

const UserPost = ({post}) => {
    const{userId,id,title,body}=post;
    const navigate=useNavigate();
    return (
        <div>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <button onClick={()=>navigate(`/post/${id}`)}>Post-details</button>
            <br/>
        </div>
    );
};

export {UserPost};