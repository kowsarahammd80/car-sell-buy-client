import React from 'react';
import car from '../../assets/caru-img/ferrari.jpg'

const MyProductList = () => {

  return (
    <div className='container mt-3 mb-3 text-font'>

      <h3 className='text-center'>My Products List</h3>

      <div className='container mt-4 mb-3'>

        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-4">

          <div class="col">
            <div class="card">
              <img src={car} class="card-img-top " alt="..." />
              <div class="card-body">
                <h5 class="card-title text-center"> Care name  </h5>
                <p class="card-text"><i class="fa-regular fa-circle-check text-success"></i> Seller Name</p>
                <p class="card-text"> Post Time: 12-11-2022</p>
                <p class="card-text"> location: USA</p>
                <p class="card-text"> Old Price: $ 1,00000</p>
                <p class="card-text"> Used Time: </p>
                <p className='card-text'>Current Price: </p>

                <div className='d-flex justify-content-between'>
                  
                  <button className='btn btn-danger'><i class="fa-solid fa-rocket"></i> Boost Product </button>

                  <button className='btn btn-warning'><i class="fa-solid fa-trash-can"></i> Delete Item</button>

                </div>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card">
              <img src={car} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title text-center">Care name </h5>
                <p class="card-text"> <i class="fa-regular fa-circle-check text-success"></i>  Seller Name</p>
                <p class="card-text"> Post Time: 12-11-2022</p>
                <p class="card-text"> location: USA</p>
                <p class="card-text"> Old Price: $ 1,00000</p>
                <p class="card-text"> Used Time: </p>
                <p className='card-text'>Current Price: </p>

                <div className='d-flex justify-content-between'>
                 
                  <button className='btn btn-danger'><i class="fa-solid fa-rocket"></i> Boost Product </button>


                  <button className='btn btn-warning'><i class="fa-solid fa-trash-can"></i> Delete Item</button>

                </div>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card">
              <img src={car} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title text-center">Care name </h5>
                <p class="card-text"> <i class="fa-regular fa-circle-check text-success"></i> Seller Name</p>
                <p class="card-text"> Post Time: 12-11-2022</p>
                <p class="card-text"> location: USA</p>
                <p class="card-text"> Old Price: $ 1,00000</p>
                <p class="card-text"> Used Time: </p>
                <p className='card-text'>Current Price: </p>

                <div className='d-flex justify-content-between'>
                  
                  <button className='btn btn-danger'><i class="fa-solid fa-rocket"></i> Boost Product </button>

                  <button className='btn btn-warning'><i class="fa-solid fa-trash-can"></i> Delete Items</button>

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
     
    
  );
};

export default MyProductList;