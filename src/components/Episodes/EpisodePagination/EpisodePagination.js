import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";

const EpisodePagination = () => {
    const {prevPage, nextPage} = useSelector(state => state.episodes);



    const [, setQuery] = useSearchParams();

    useEffect(() => {
        setQuery({ page:"1"})
    }, []);

    const prev = () => {
        setQuery(prev1 => {
            prev1.set('page', `${+prev1.get("page") - 1}`)
            return prev1
        })
    }

    const next = () => {
        setQuery(prev1 => {
            prev1.set('page', `${+prev1.get("page") + 1}`)
            return prev1
        })
    }


    return (
        <div>
            <button disabled={!prevPage} onClick={prev}>Prev</button>
            <button disabled={!nextPage} onClick={next}>Next</button>
        </div>
    );
};

export {EpisodePagination};