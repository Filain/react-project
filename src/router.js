import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {EpisodePage} from "./pages/EpisodePage";
import {CharacterPage} from "./pages/CharacterPage";

const router=createBrowserRouter([
    {path:'', element:<MainLayout/>, children:[
            {index:true, element:<Navigate to={'episodes'}/>},
            {path:'episodes', element:<EpisodePage/>},
            {path:'characters/:ids', element:<CharacterPage/>}
        ]}
])

export {router}