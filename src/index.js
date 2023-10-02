import ReactDOM  from "react-dom/client";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/Home/Home";
import Posts from "./views/Posts/Posts";
import Readposts from "./views/Readposts/Readposts";

const root = ReactDOM.createRoot(document.getElementById('root'));
    
const router = createBrowserRouter([
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/posts',
        element:<Posts/>
    },
    {
         path:'/post/readpost/:id',
    element:<Readposts/>
}
])
root.render(

    <RouterProvider router={router}/>
)

