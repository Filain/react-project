
import {axiosServices} from "./axiosServices";
import {urls} from "../constants/urls";

const userService ={
    getAll:()=>axiosServices.get(urls.users),
    getById:(id)=>axiosServices.get(urls.userById.byId(id)),
    getPostsByUserId:(id)=>axiosServices.get(urls.userPostByUserId.byId(id))
}

export {
    userService
}