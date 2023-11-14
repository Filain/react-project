import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators";

import {useDispatch, useSelector} from "react-redux";
import {carServise} from "../../servises";
import {carsActions} from "../../redux/slice/carSlise";
import {useEffect} from "react";


const CarForm = () => {
    const dispatch = useDispatch();
    const {triger, oneCar} = useSelector(state => state.cars)
    const {reset, register, handleSubmit, formState: {errors, isValid}, setValue} = useForm({
        mode: "all",
        resolver: joiResolver(carValidator)
    });

    useEffect(() => {
        if (oneCar) {
            setValue('brand', oneCar.brand, {shouldValidate: true})
            setValue('price', oneCar.price, {shouldValidate: true})
            setValue('year', oneCar.year, {shouldValidate: true})
        }
    }, [oneCar]);

    const save = async (car) => {
        await carServise.create(car)
        dispatch(carsActions.setTriger(!triger))
        reset()
    }
    const update = async (car)=>{
        await carServise.updateById(oneCar.id, car)
        reset()
        dispatch(carsActions.setTriger(!triger))
        dispatch(carsActions.setOneCar(null))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(oneCar?update:save)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                <input type="text" placeholder={'price'} {...register('price')}/>
                <input type="text" placeholder={'year'} {...register('year')}/>
                <button disabled={!isValid}>Save</button>
            </form>
            {errors.brand && <div>{errors.brand.message}</div>}
            {errors.price && <div>{errors.price.message}</div>}
            {errors.year && <div>{errors.year.message}</div>}
        </div>
    );
};

export {CarForm};