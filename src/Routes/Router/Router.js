import { createBrowserRouter } from "react-router-dom";
import Blogs from "../../Componets/Blogs/Blogs";
import CarCategoris from "../../Componets/CarCategoris/CarCategoris";
import Login from "../../Componets/Login/Login";
import SignUp from "../../Componets/SinUp/SignUp";
import Main from "../../Layout/Main/Main";
import AddProductPage from "../../Pages/AddProductPage/AddProductPage";
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
       },
       {
         path: '/addproduct',
         element: <AddProductPage></AddProductPage>
       }
    ]
   }
])

export default routers;