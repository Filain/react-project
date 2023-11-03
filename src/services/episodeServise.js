import {axiosServise} from "./axiosServise";
import {urls} from "../constans";

const episodeServise={
    getAll:(page)=>axiosServise.get(urls.episodes,{params:{page}})
}

export {
    episodeServise
}