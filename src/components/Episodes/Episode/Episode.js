import css from './Episode.module.css'
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {episodeActions} from "../../../redux/slises/episodeSlice";

const Episode = ({episode}) => {
    const {id, name, episode: chapter, characters} = episode;
    const dispatch = useDispatch();


    const navigate = useNavigate()
    const toCharacters = () => {
        const ids = characters.map(character => character.split('/').slice(-1)[0]).join(',');
        dispatch(episodeActions.setOneEpisode(name))
        navigate(`/characters/${ids}`)
    };
    return (
        <div className={css.Episode} onClick={toCharacters}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>chapter: {chapter}</div>

        </div>
    );
};

export {Episode};