import React, {useEffect} from 'react';

const Simpson = ({value}) => {
    const {name, age, photo, surname} = value;
    return (
        <div className={'simpsonItem'}>
            <div><p>Name: {name}</p></div>
            <div><p>Surname: {surname}</p></div>
            <div><p>Age: {age}</p></div>
            <img src={photo} alt={name}/>
        </div>
    );
};

export {Simpson};
