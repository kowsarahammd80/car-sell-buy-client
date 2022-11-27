import React from 'react';
import { Link } from 'react-router-dom';

const MyOrderTabel = ({myOrderData}) => {
   
  const {price,productName,location } = myOrderData

  return (
    
       <tr>
            <th scope="row">{productName}</th>
            <td>{location}</td>
            <td>{price}</td>
            <td>
              <Link to='/stripe'> <button className='btn btn-success '> Pay </button> </Link>
            </td>
          </tr>
    
  );
};

export default MyOrderTabel;