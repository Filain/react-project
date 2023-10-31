import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layout/MainLayout";
import {UserPages} from "./pages/UserPages";
import {UserDetailPage} from "./pages/UserDetailPage";
import {UserPostPage} from "./pages/UserPostPage";

import {PostDetailPage} from "./pages/PostDetailPage";
import {postService} from "./servises/postService";
import {userService} from "./servises/userService";


const router = createBrowserRouter([
    {path:'/',element:<MainLayout/>, children:[
            {index:true, element:<Navigate to={'users'}/>},
            {path:'users',element: <UserPages/>},
            {path:'details/:id',element: <UserDetailPage/>, loader:({params:{id}})=>userService.getById(id), children:[
                    {path:'posts',element:<UserPostPage/>, loader:({params:{id}})=>userService.getPostsByUserId(id)}
                ]},
            {path:'post/:id',element: <PostDetailPage/>,loader:({params:{id}})=>postService.getPostById(id)}




        ]}
])

export {router}