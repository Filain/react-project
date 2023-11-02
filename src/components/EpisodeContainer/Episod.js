import css from './Episod.module.css'
import {useNavigate} from "react-router-dom";
import {useAppContext} from "../../hooks/useAppContext";
const Episod = ({episod}) => {
    const navigate = useNavigate()
    const {id, episode, name,characters} = episod;
    const {seIsEpisod}=useAppContext()
    return (
        <div className={css.Episod} onClick={()=>{
            navigate('/characters', {state:characters})
            seIsEpisod(name)
        }}>
            <div>id: {id}</div>
            <div>episode: {episode}</div>
            <div>name: {name}</div>
        </div>
    );
};

export {Episod};