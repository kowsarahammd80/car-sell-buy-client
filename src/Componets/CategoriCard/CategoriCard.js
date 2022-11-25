import React from 'react';

const CategoriCard = ({category}) => {
   
  const {CategoryName, CategoryImg} = category

  return (
    <div class="col">

    <div class="card">
      <img src={CategoryImg} class="card-img-top height" alt="..." />
      <div class="card-body text-center">
        <h5 class="card-title">Mercedes-Benz</h5>
        <div className=''>
          <button className='btn bg-success text-white fw-bold'> <i class="fa-solid fa-car"></i> See Car</button>
        </div>
      </div>
    </div>

  </div>
  );
};

export default CategoriCard;