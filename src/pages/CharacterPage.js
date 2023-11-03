import {Characters} from "../components";
import {useNavigate} from "react-router-dom";
import {useChapter} from "../hooks/useChapter";

const CharacterPage = () => {
    const navigate = useNavigate()
    const{setName}=useChapter()
    const back=()=>{
        setName(null)
        navigate(-1)
    }

    return (
        <div>
           <button onClick={back}>Back</button>
            <Characters/>
        </div>
    );
};

export {CharacterPage};