import css from './Header.module.css'
import {useChapter} from "../../hooks/useChapter";

const Header = () => {
    const {name} = useChapter()
    return (
        <div className={css.Header}>
            {
                name ?
                    <h1>{name}</h1>
                    :
                    <h1>Header</h1>
            }
        </div>
    );
};

export {Header};