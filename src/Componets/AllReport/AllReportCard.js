import React from 'react';

const AllReportCard = ({allReportData}) => {
  
  const {_id, model, id} = allReportData

  return (
    <div class="col">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">ID : {_id}</h5>
          <p class="card-text">Name: {model}</p>
          <p class="card-text">Account: {id}</p>

          <div className='d-flex justify-content-around'>
            <button className='btn btn-success'>Verified</button>

            <button onClick='' className='btn btn-danger'>Delete</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AllReportCard;