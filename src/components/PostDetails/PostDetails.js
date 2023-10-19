import React from 'react';

const PostDetails = ({postDetails}) => {
 const {userId,id,title,body}=postDetails;
 return (
  <div>
   <p>userId:{userId} </p>
   <p>id:{id} </p>
   <p>Title:{title} </p>
   <p>body:{body} </p>
  </div>
 );
};

export {PostDetails};