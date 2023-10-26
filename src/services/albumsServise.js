import {urls} from "../components/constans/urls";
import {axiosServise} from "./axiosServise";

const albumsServise = {
    getAll:()=>axiosServise.get(urls.albums)
}

export {
    albumsServise
}