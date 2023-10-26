import {axiosServise} from "./axiosServise";
import {urls} from "../components/constans/urls";

const commentsServise={
    getAll:()=>axiosServise.get(urls.comments.base),
    getByPostId:(state)=>axiosServise.get(urls.comments.byPostId(state))
}

export {
    commentsServise
}