import {Car} from "../Car";
import {useEffect} from "react";
import {carServise} from "../../servises";
import {useDispatch, useSelector} from "react-redux";
import {carsActions} from "../../redux/slice/carSlise";

const Cars = () => {
    const dispatch = useDispatch();
    const {cars,triger} = useSelector(state => state.cars);



    console.log(triger)


    useEffect(() => {
        carServise.getAll().then(({data})=>dispatch(carsActions.setResponse(data)))
    }, [triger]);
    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};