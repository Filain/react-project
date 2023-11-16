import {apiServices} from "./apiServices";
import {urls} from "../constans/urls";

const characterService={
    get:(ids)=>apiServices.get(urls.characters.byIds(ids))
}
export {characterService}