import {useEffect, useState} from "react";
import {episodeServise} from "../../../services";
import {Episode} from "../Episode/Episode";
import css from './Episodes.module.css'
import {useSearchParams} from "react-router-dom";


const Episodes = () => {
    const [episodeRes, setEpisodeRes] = useState({prev: null, next: null, results: []});
    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page')


    useEffect(() => {
        episodeServise.getAll(page)
            .then(({data: {info: {prev, next}, results}}) => setEpisodeRes({prev, next, results}))
    }, [page]);

    const prevHandler = () => {
        setQuery(prev => {
            prev.set('page', `${+page - 1}`)
            return prev
        })
    };

    const nextHandler = () => {
        setQuery(prev => {
            prev.set('page', `${+page + 1}`)
            return prev
        })
    };

    return (


        <div>
            <div className={css.Episodes}> {episodeRes.results.map(episode => <Episode key={episode.id} episode={episode}/>)}</div>
            <div className={css.buttons}>
                <button disabled={!episodeRes.prev} onClick={prevHandler}>prev</button>
                <button disabled={!episodeRes.next} onClick={nextHandler}>next</button>
            </div>
        </div>
    );
};

export {Episodes};