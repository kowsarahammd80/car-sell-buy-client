import React from 'react';

const MyProductListCard = ({myProduct}) => {
   
  const {seller, model, image,carType,price,oldPrice,location,UsedTime,
    postTime,} = myProduct 

  return (
    <div class="col">
      <div class="card">
        <img src={image} class="card-img-top img-height1" alt="..." />
        <div class="card-body">
          <h5 class="card-title text-center"> Care name {model} </h5>
          <p class="card-text"><i class="fa-regular fa-circle-check text-success"></i> Seller Name : {seller}</p>
          <p class="card-text"> Car Type: {carType}</p>
          <p class="card-text"> Post Time: {postTime}</p>
          <p class="card-text"> location: {location}</p>
          <p class="card-text"> Old Price: $ {oldPrice}</p>
          <p class="card-text"> Used Time: {UsedTime}</p>
          <p className='card-text'>Current Price: {price}</p>

          <div className='d-flex justify-content-between'>

            <button className='btn btn-danger'><i class="fa-solid fa-rocket"></i> Boost Product </button>

            <button className='btn btn-warning'><i class="fa-solid fa-trash-can"></i> Delete Item</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProductListCard;