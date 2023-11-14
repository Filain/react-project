import axios from "axios";
import {baseURL} from "../constans";

const axiosServise=axios.create({baseURL});

export {
    axiosServise
}