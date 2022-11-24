import { createBrowserRouter } from "react-router-dom";
import Blogs from "../../Componets/Blogs/Blogs";
import CarCategoris from "../../Componets/CarCategoris/CarCategoris";
import Category from "../../Componets/Category/Category";
import Login from "../../Componets/Login/Login";
import SignUp from "../../Componets/SinUp/SignUp";
import Main from "../../Layout/Main/Main";
import HomePage from "../../Pages/HomePage/HomePage";

const routers = createBrowserRouter([ 
   {
    path: '/',
    element: <Main></Main>,
    children: [
       {
         path:'/',
         element: <HomePage></HomePage>
       },
       {
         path: '/login',
         element: <Login></Login>
       },
       {
         path: '/signup',
         element: <SignUp></SignUp>
       },
       {
         path: '/blog',
         element: <Blogs></Blogs>
       },
       {
         path: '/category',
         element: <CarCategoris></CarCategoris>
       }
    ]
   }
])

export default routers;