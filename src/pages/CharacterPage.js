import {Characters} from "../components/CharactersConteiner/Characters";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {episodeActions} from "../redux/slises/episodeSlice";

const CharacterPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const back = () => {
        navigate(-1)
        dispatch(episodeActions.setOneEpisode(null))

    }
    return (
        <div>
            <button onClick={back}>back</button>
            <Characters/>

        </div>
    );
};


export {CharacterPage};