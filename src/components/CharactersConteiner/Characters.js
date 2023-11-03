import {useParams} from "react-router-dom";
import {charactersServise} from "../../services";
import {Character} from "./Character";
import {useEffect, useState} from "react";

const Characters = () => {
    const {ids}=useParams();
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        charactersServise.getByIds(ids).then(({data})=>setCharacters(data))
    }, [ids]);

    return (
        <div>
            {characters.map(character=><Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};