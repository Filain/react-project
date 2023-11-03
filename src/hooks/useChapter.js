import {useContext} from "react";
import {Context} from "../hok/ContextProvider";

const useChapter=()=>{
    const [name, setName]= useContext(Context);
    return {
        name,
        setName
    }
}
export {
    useChapter
}