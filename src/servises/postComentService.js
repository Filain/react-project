import {axiosService} from "./axiosService";
import {urls} from "../constans/urls";

const postComentService={
    getAllPost:()=>axiosService.get(urls.base.posts),
    getAllComments:()=>axiosService.get(urls.base.comments)
}

export {
    postComentService
}