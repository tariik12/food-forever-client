import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import RecipesLayout from "../Layout/RecipesLayout/RecipesLayout";
import ViewDetails from "../pages/Home/ViewDetails/ViewDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

import PrivateRoute from "./PrivateRoute";
import TermsAndCondition from "../pages/Home/Shared/TermsAndCondition/TermsAndCondition";
import Categories from "../pages/Home/Categories/Categories";
import Error from "../Error/Error";
import Blog from "../pages/Home/Home/Blog/Blog";


const router = createBrowserRouter ([
    {
        path:'/',   
        element:<Main></Main>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:() => fetch('https://food-forever-server-tariik12.vercel.app/chefs/')
            },
         
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/terms',
                element:<TermsAndCondition></TermsAndCondition>

            },
            {
                path:'/categories',
                element:<Categories></Categories>,
                

            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
        ]
    },
    {
        path:'/recipes',
        element:<RecipesLayout></RecipesLayout>,
        children:[
            {
                path:':id',
                element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
                loader:({params}) =>fetch(`https://food-forever-server-tariik12.vercel.app/chefs/${params.id}`)
            }
        ]
    }
])

export default router;