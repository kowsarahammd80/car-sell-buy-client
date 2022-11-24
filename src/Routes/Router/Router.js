import { createBrowserRouter } from "react-router-dom";
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
       }
    ]
   }
])

export default routers;