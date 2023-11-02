import {useEffect, useState} from "react";
import {episodeServises} from "../../servsces/episodeServises";
import {Episod} from "./Episod";
import {useSearchParams} from "react-router-dom";

const Episodes = () => {
    const [episodes, setEpisodes] = useState([]);
    const [query, setQuery] = useSearchParams({page: '1'})
    const [prevNext, setPrevNext] = useState({prev: null, next: null});

    useEffect(() => {
        episodeServises.getAll(query.get('page')).then(({data}) => {
            setEpisodes(data.results)
            setPrevNext({prev: data.info.prev, next: data.info.next})
            // console.log(data)
        })
    }, [query.get('page')]);


    const prev= ()=>{
        setQuery(prev=>{
            prev.set('page',`${+prev.get('page')-1}`)
        })
    }
    const next= ()=>{
        setQuery(prev=>{
            prev.set('page',`${+prev.get('page')+1}`)
        })
    }

    return (
        <div>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
                {episodes.map(episod => <Episod key={episod.id} episod={episod}/>)}

            </div>
            <div>
                <button disabled={!prevNext.prev} onClick={prev}>prev</button>
                <button disabled={!prevNext.next} onClick={next}>next</button>
            </div>
        </div>
    );
};

export {Episodes};