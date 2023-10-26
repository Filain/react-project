import axios from "axios";
import {baseURL} from "../components/constans/urls";


const axiosServise=axios.create({baseURL})

export {axiosServise}