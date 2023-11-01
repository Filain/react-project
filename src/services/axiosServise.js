import axios from "axios";
import {baseURL} from "../constans/urls";

const axiosServise = axios.create({baseURL})

export {
    axiosServise
}