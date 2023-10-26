import {axiosServise} from "./axiosServise";
import {urls} from "../components/constans/urls";

const todosServise = {
    getAll:()=>axiosServise.get(urls.todos)
}

export {
    todosServise
}