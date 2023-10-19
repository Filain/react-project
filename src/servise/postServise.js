import {axiosServise} from "./axiosServise";
import {urls} from "../components/constans/urls";

const  postService ={
    getAll:()=>axiosServise.get(urls.posts.base),
    getById:(id)=>axiosServise.get(urls.posts.byId(id))
}
export {
    postService
}