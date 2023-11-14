import {axiosServise} from "./axiosServise";
import {urls} from "../constans";

const carServise={
    getAll: ()=> axiosServise.get(urls.cars.base),
    create: (data)=> axiosServise.post(urls.cars.base, data),
    updateById: (id, data) => axiosServise.put(urls.cars.byId(id), data),
    delete: (id) => axiosServise.delete(urls.cars.byId(id))
}

export {carServise}