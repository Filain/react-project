import {useEffect} from "react";
import {useParams, useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {characterActions} from "../../redux/slises/characterSlice";
import {Character} from "./Character";

const Characters = () => {
    const dispatch = useDispatch();
    const {ids} = useParams();
    const {characters}=useSelector(state => state.characters)

    useEffect(() => {
        dispatch(characterActions.getCharacters({ids}))
    }, [ids]);
    console.log(characters)

    return (
        <div  style={{display:"flex", flexWrap:"wrap"}}>
            {characters.map(character=><Character key={character.id} character={character} />)}
        </div>
    );
};

export {Characters};