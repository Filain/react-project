import {axiosServise} from "./axiosServise";
import {urls} from "../constans/urls";

const userService={
    getAll:()=>axiosServise.get(urls.user)
}
export {
    userService
}

