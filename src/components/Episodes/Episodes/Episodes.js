import css from './Episodes.module.css'
import {useDispatch, useSelector} from "react-redux";
import {Episode} from "../Episode/Episode";
import {useEffect} from "react";
import {episodeActions} from "../../../redux/slises/episodeSlice";
import {useSearchParams} from "react-router-dom";

const Episodes = () => {
    const [query, setQuery] = useSearchParams({page: '1'});
    const page=query.get('page')

    const {episodes} = useSelector(state => state.episodes);
    const dispatch = useDispatch();


    // useEffect(() => {
    //     episodeServise.getAll(1).then(({data})=>dispatch(episodeActions.setEpisodes(data.results)))
    // }, []);



    useEffect(() => {
        dispatch(episodeActions.getAllEpisodes({page}))

    }, [page,dispatch]);


    return (
        <div className={css.Episodes}>
            {episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}
        </div>
    );
};

export {Episodes};