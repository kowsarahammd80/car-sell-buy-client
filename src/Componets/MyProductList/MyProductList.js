import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Auth/AuthProvider';
import MyProductListCard from './MyProductListCard';

const MyProductList = () => {

  const {user} = useContext(AuthContext)

  const [myProducts, setMyPoroduts] = useState([])

  useEffect(() => {
     fetch(`http://localhost:5000/products/${user?.email}`)
     .then(res => res.json())
     .then(data => setMyPoroduts(data))
     .catch(e => console.error(e))
  },[myProducts])

  return (
    <div className='container mt-3 mb-3 text-font'>

      <h3 className='text-center'>My Products List</h3>

      <div className='container mt-4 mb-3'>

        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-4">

           {
             myProducts.map(myProduct => <MyProductListCard
               key={myProduct._id}
               myProduct={myProduct}
              ></MyProductListCard>)
           }

        </div>

      </div>

    </div>
     
    
  );
};

export default MyProductList;