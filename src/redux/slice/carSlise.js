import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cars: [],
    oneCar:null,
    triger: true

}

const carsSlice = createSlice({
    name: 'carsSlice',
    initialState,
    reducers: {
        setResponse: (state, action) => {
            state.cars = action.payload;
        },
        setOneCar:(state,actions)=>{
          state.oneCar=actions.payload
        },
        setTriger:(state,actions)=>{
            state.triger=actions.payload
        }
    }
})

const {reducer: carsReducer, actions} = carsSlice;

const carsActions = {
    ...actions
}

export {
    carsReducer,
    carsActions
}


