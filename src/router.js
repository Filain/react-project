import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {PostPage} from "./pages/PostPage";
import {UserPage} from "./pages/UserPage";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'user'}/>},
            {
                path: 'user', element: <UserPage/>, children: [
                    {path: ':userId', element: <PostPage/>}
                ]
            }
        ]
    }
])
export {router}