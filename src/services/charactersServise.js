import {axiosServise} from "./axiosServise";
import {urls} from "../constans";

const charactersServise ={
    getByIds:(ids)=>axiosServise.get(urls.characters.byIds(ids))
}

export {
    charactersServise
}