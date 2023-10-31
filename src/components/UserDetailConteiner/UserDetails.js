import {UserDetail} from "./UserDetail";


const UserDetails = ({user}) => {






    return (
        <div>
            UserDetails
            {<UserDetail userDetail={user}/>}
        </div>
    );
};

export {UserDetails};