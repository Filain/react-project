const Album = ({album}) => {
    const {userId,title}=album
    return (
        <div>
            <div>UserId: {userId}</div>
            <div>Title: {title}</div>
            <br/>
        </div>
    );
};

export {Album};