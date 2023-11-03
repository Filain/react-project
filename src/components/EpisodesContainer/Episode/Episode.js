import css from './Episode.module.css'
import {useNavigate} from "react-router-dom";
import {useChapter} from "../../../hooks/useChapter";

const Episode = ({episode}) => {
    const {id, name, episode: chapter, characters} = episode;
    const navigate = useNavigate();

    const {setName} = useChapter();

    const toCaracters = () => {
        const ids = characters.map(character => character.split('/').splice(-1)[0])
        setName(name)
        navigate(`/characters/${ids}`)
    }
    return (
        <div className={css.Episode} onClick={toCaracters}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>chapter: {chapter}</div>
        </div>
    );
};

export {Episode};