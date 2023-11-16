import {configureStore} from "@reduxjs/toolkit";
import {episodeReducer} from "./slises/episodeSlice";
import {characterReducer} from "./slises/characterSlice";


const store= configureStore({
    reducer:{
        episodes:episodeReducer,
        characters:characterReducer
    }
})

export {store}