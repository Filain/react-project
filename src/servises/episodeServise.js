import {apiServices} from "./apiServices";
import {urls} from "../constans/urls";

const episodeServise={
    getAll:(page)=>apiServices.get(urls.episodes,{params:{page}})

}

export {episodeServise}