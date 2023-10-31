import {axiosServices} from "./axiosServices";
import {urls} from "../constants/urls";

const postService={
     getPostById:(id)=>axiosServices.get(urls.postById.byId(id))
}
export {postService}