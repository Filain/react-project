import css from './Header.module.css'
import {useAppContext} from "../../hooks/useAppContext";

const Header = () => {
const {isEpisod}=useAppContext()

    return (


                <div className={css.Header}>
                     <div>{ isEpisod ? `${isEpisod}` : 'Head'}</div>
                </div>


    );
};

export {Header};