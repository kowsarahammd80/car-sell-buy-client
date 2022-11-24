import React from 'react';
import { Link } from 'react-router-dom';

const MyOrderList = () => {
  return (
    <div className='container mt-3 mb-3'>

      <div>
           
           <h2>My Order List</h2>
           <p>Our all list. Click on </p>

      </div>

      <table class="table">

        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Seller Name</th>
            <th scope="col">Current Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row">tesla</th>
            <td>100</td>
            <td>500</td>
            <td>
              <Link to='/stripe'> <button className='btn btn-success '> Pay </button> </Link>
            </td>
          </tr>
        </tbody>

      </table>

    </div>
  );
};

export default MyOrderList;