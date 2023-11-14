import {configureStore} from "@reduxjs/toolkit";
import {carsReducer} from "./slice/carSlise";


const store = configureStore({
    reducer:{
        cars:carsReducer,
    }
});

export {
    store
}