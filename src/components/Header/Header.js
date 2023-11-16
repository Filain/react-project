import css from './Header.module.css'
import {useSelector} from "react-redux";

const Header = () => {
    const {oneEpisode} = useSelector(state => state.episodes);
    console.log(oneEpisode)
    return (
        <div className={css.Header}>
            { oneEpisode ?
                <h1>{oneEpisode}</h1>
                :
                <h1>Rick & Morty</h1>}
        </div>
    );
};

export {Header};