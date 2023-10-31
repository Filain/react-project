import {useNavigate} from "react-router-dom";

const UserDetail = ({userDetail}) => {
const {id,name,username,email,website}=userDetail;
const navigate = useNavigate()
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>website: {website}</div>
            <button onClick={()=>navigate(`posts`)}>Post of current user</button>
        </div>
    );
};

export {UserDetail};