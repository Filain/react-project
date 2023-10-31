import {axiosServices} from "./axiosServices";
import {urls} from "../constants/urls";

const commentServise={
    getById:(id)=>axiosServices.get(urls.postComments.byId(id))
}

export {
    commentServise
}