import {axiosServise} from "./axiosServise";
import {urls} from "../constans/urls";

const episodeServises={
    getAll:(page='1')=>axiosServise.get(urls.episode, {params:{page}})
}
export {
    episodeServises
}