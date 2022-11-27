import React, { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Auth/AuthProvider';
import useSeller from '../../Hooks/useSeller';
import Loading from '../../Sheard/Loading/Loading';

const SellerRoute = ({children}) => {
   
  const {user, loading} = useState(AuthContext)
  const [isSeller, isSellerLoading] = useSeller(user?.email)

  const location = useLocation()

  if(loading || isSellerLoading){
     return <Loading/>
  }

  if(user && isSeller){
    return children;
  }

  return <Navigate to='/login' state={{from: location}}></Navigate>
};

export default SellerRoute;