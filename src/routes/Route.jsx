import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import RecipesLayout from "../Layout/RecipesLayout/RecipesLayout";
import ViewDetails from "../pages/Home/ViewDetails/ViewDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Blog from "../pages/Home/Home/Blog/Blog";


const router = createBrowserRouter ([
    {
        path:'/',   
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:() => fetch('http://localhost:5000/chefs/')
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    },
    {
        path:'/recipes',
        element:<RecipesLayout></RecipesLayout>,
        children:[
            {
                path:':id',
                element:<ViewDetails></ViewDetails>,
                loader:({params}) =>fetch(`http://localhost:5000/chefs/${params.id}`)
            }
        ]
    }
])

export default router;