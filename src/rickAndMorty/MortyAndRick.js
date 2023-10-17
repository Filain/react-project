import React from 'react';


const MortyAndRick = ({user}) => {
const {id,name,status,species,gender,image} = user;
    return (
        <div className={'rickmortyItem'}>
            <div><p>id:{id}</p></div>
            <div><p>name:{name}</p></div>
            <div><p>status:{status}</p></div>
            <div><p>species:{species}</p></div>
            <div><p>gender:{gender}</p></div>
            <img src={image} alt={name}/>
        </div>
    );
};

export {MortyAndRick};