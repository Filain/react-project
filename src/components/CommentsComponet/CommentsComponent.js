const CommentsComponent = ({comment}) => {
    const {name,body,postId,id}=comment;
    return (
        <div>
            <div>id : {id}</div>
            <div>postId : {postId}</div>
            <div>name : {name}</div>
            <div>body : {body}</div>



            <br/>
        </div>
    );
};

export {CommentsComponent};