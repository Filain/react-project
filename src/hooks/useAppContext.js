import {useContext} from "react";
import {Context} from "../hok/ContextProvider";

const useAppContext = () => {
    const [state, setState] = useContext(Context)
    return {
        isEpisod: state,
        seIsEpisod: (value) => setState(value)
    }
}
export {
    useAppContext
}