import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {characterService} from "../../servises/characterService";

const initialState={
    characters:[],
    // prevPage: null,
    // nextPage: null
}
const getCharacters=createAsyncThunk(
    'characterSlice/getCharacters',
    async ({ids})=>{
        const {data}= await characterService.get(ids)
        return data
    }
)

const characterSlice=createSlice({
    name:'characterSlice',
    initialState,
    reducers:{},
    extraReducers:builder =>
        builder
            .addCase(getCharacters.fulfilled,(state, action) =>{
                state.characters = action.payload
            })
})

const {reducer:characterReducer, actions} = characterSlice;

const characterActions ={...actions, getCharacters}

export {characterReducer, characterActions}

