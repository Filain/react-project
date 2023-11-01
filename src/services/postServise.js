import {axiosServise} from "./axiosServise";
import {urls} from "../constans/urls";

const postServise={
    getById:(id)=>axiosServise.get(urls.page.byUserId(id))
}

export {
    postServise
}