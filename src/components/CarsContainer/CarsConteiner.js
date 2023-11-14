import {useEffect, useState} from "react";
import {carServise} from "../../servises";
import {CarForm} from "../CarForm";
import {Cars} from "../Cars";

const CarsConteiner = () => {

    return (
        <div>
            <CarForm/>
            <hr/>
            <Cars/>
        </div>
    );
};

export {CarsConteiner};