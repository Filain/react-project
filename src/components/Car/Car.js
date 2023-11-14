import {useDispatch, useSelector} from "react-redux";
import {carsActions} from "../../redux/slice/carSlise";
import {carServise} from "../../servises";

const Car = ({car}) => {
    const {id, brand, price, year}=car
    const dispatch = useDispatch();
    const {triger} = useSelector(state => state.cars);
    const del= async () =>{
        await carServise.delete(id)
        dispatch(carsActions.setTriger(!triger))
    }

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>yer: {year}</div>
            <button onClick={()=>dispatch(carsActions.setOneCar(car))}>Update</button>
            <button onClick={del}>Delete</button>
        </div>
    );
};

export {Car};