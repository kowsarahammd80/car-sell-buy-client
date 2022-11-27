
import { createBrowserRouter } from "react-router-dom";
import AllUsers from "../../Componets/AllUsers/AllUsers";
import Blogs from "../../Componets/Blogs/Blogs";
import CarCategoris from "../../Componets/CarCategoris/CarCategoris";
import CarCategoryShowCard from "../../Componets/CarCategoryShow/CarCategoryShowCard";
import Category from "../../Componets/Category/Category";
import DeshBoard from "../../Componets/DeshBoard/DeshBoard";
import Login from "../../Componets/Login/Login";
import SignUp from "../../Componets/SinUp/SignUp";
import Stripe from "../../Componets/Stripe/Stripe";
import Main from "../../Layout/Main/Main";
import AddProductPage from "../../Pages/AddProductPage/AddProductPage";
import HomePage from "../../Pages/HomePage/HomePage";
import MyOrderListPage from "../../Pages/MyOrderListPage/MyOrderListPage";
import ProductMyList from "../../Pages/ProductMyList/ProductMyList";
import DeshBoardNave from "../../Sheard/DeshBoardNave/DeshBoardNave";
import PrivateRoute from "../PrivateRoute/PrivateRoute";



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
         path: '/Carcategory',
         element: <PrivateRoute><CarCategoris></CarCategoris></PrivateRoute>
       },
       {
         path: '/addproduct',
         element: <AddProductPage></AddProductPage>
       },
       {
        path: '/myorder',
        element:  <MyOrderListPage></MyOrderListPage> 
       },
       {
        path: '/stripe',
        element: <Stripe/>
       },
       {
        path: '/myProductList',
        element: <ProductMyList></ProductMyList>
       },
       {
        path: '/categoris',
        element: <PrivateRoute> <Category></Category> </PrivateRoute>
       },
       {
         path: '/carCategoryShowCard/:model',
         element: <PrivateRoute> <CarCategoryShowCard></CarCategoryShowCard> </PrivateRoute>

       },
      

    ]
   },
   {
    path: '/deshboard',
     element: <DeshBoardNave></DeshBoardNave>,
     children:[
      {
        path: '/deshboard/alluser',
        element: <AllUsers></AllUsers>
      }
     ]
   }
   
])

export default routers;