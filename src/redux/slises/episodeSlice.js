import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {episodeServise} from "../../servises/episodeServise";

const initialState = {
    episodes: [],
    prevPage: null,
    nextPage: null,
    oneEpisode: null
}

const getAllEpisodes = createAsyncThunk(
    'episodeSlice/getAllEpisodes',
    async ({page}) => {
        const {data} = await episodeServise.getAll(page)
        return data
    }
)

const episodeSlice = createSlice({
    name: 'episodeSlice',
    initialState,
    reducers: {
        setOneEpisode:(state, action) => {
            state.oneEpisode=action.payload
        }

        // setEpisodes:(state, action) => {
        //     state.episodes=action.payload
        // }
    },
    // extraReducers:{
    //     [getAllEpisodes.fulfilled]:(state, action)=>{
    //         const {info:{next, prev},results}=action.payload;
    //         state.episodes=results
    //         state.nextPage= next
    //         state.prevPage=prev
    //     }
    // }
    extraReducers: builder =>
        builder
            .addCase(getAllEpisodes.fulfilled, (state, action) => {
                const {info: {next, prev}, results} = action.payload
                state.episodes = results
                state.nextPage = next
                state.prevPage = prev
            })
})

const {reducer: episodeReducer, actions} = episodeSlice;
const episodeActions = {...actions, getAllEpisodes}

export {episodeReducer, episodeActions}