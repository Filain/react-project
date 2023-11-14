import {useEffect, useState} from "react";
import {carServise} from "../../servises";
import {CarForm} from "../CarForm";
import {Cars} from "../Cars";

const CarsConteiner = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        carServise.getAll().then(({data})=>setCars(data))
    }, []);
    return (
        <div>
            <CarForm/>
            <hr/>
            <Cars cars={cars}/>
        </div>
    );
};

export {CarsConteiner};