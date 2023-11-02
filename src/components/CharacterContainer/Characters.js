import {useLocation, useNavigate} from "react-router-dom";
import {Character} from "./Character";
import {useAppContext} from "../../hooks/useAppContext";

const Characters = () => {
    const {state} = useLocation();
    // console.log(state)
    const navigate = useNavigate()
    const {seIsEpisod} = useAppContext()

    const prev = () => {
        navigate('/episodes', {state: ''})
        seIsEpisod(null)


    }


    return (
        <div>
            <button onClick={prev}>back</button>
            {state.map((item, index) => <Character key={index} item={item}/>)}
        </div>
    );
};

export {Characters};