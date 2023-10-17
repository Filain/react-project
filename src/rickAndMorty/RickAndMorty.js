import React, {useState} from 'react';
import {useEffect} from "react";
import {MortyAndRick} from "./MortyAndRick";
import "./rickAndMorty.css"

const RickAndMorty = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character/[1, 2, 3, 4, 5, 6, 7]").then(value => value.json()).then(items => setUsers(items))
        console.log(users)
    }, []);

    return (
        <div className={'rickmorty_wrap'}>
            {users.map(user => <MortyAndRick key={user.id} user={user}/>)}

        </div>
    );
};

export {RickAndMorty};