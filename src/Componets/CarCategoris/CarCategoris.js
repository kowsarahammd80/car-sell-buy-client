import React from 'react';
import './CsarCategoris.css'
import cover from '../../assets/caru-img/Mercedes-cover.jpg'
import car from '../../assets/caru-img/ferrari.jpg'
import BookModal from '../BookModal/BookModal';
import Category from '../Category/Category';

const CarCategoris = () => {
  return (
    <div>
      <div class="card text-bg-dark ">
        <img src={cover} class="card-img img-fluid igm-height" alt="..." />
        <div class="card-img-overlay d-flex justify-content-center align-items-center">
          <div className='text-center'>
            <div className='text-white'>

              <h1 className='shadow-lg'> <span className=''>WELCOME</span> <span className='text-warning1'> MOTORO <br /> AUTOMOTIVE THEME</span> </h1>

            </div>
          </div>
        </div>
      </div>

      <Category></Category>

      {/* card */}

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
                  {/* modal start */}

                  <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Book Now
                  </button>

                  <BookModal />

                  {/* modal end */}

                  <button className='btn btn-warning'><i class="fa-solid fa-flag"></i> Report Item</button>

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
                  {/* modal start */}

                  <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Book Now
                  </button>

                  <BookModal />

                  {/* modal end */}

                  <button className='btn btn-warning'><i class="fa-solid fa-flag"></i> Report Item</button>

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
                  {/* modal start */}

                  <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Book Now
                  </button>

                  <BookModal />

                  {/* modal end */}

                  <button className='btn btn-warning'><i class="fa-solid fa-flag"></i> Report Item</button>

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default CarCategoris;