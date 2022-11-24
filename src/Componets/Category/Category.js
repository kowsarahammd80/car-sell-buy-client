import React from 'react';
import './Category.css'
import marcity from '../../assets/caru-img/marcity.jfif';
import bmw from '../../assets/caru-img/bmw-logo.jpg';
import audi from '../../assets/caru-img/audi-logo.avif'



const Category = () => {

  return (

    <div className='container mt-3 mb-3'>

      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

        <div class="col">

          <div class="card">
            <img src={marcity} class="card-img-top height" alt="..." />
            <div class="card-body text-center">
              <h5 class="card-title">Mercedes-Benz</h5>
              <div className=''>
                <button className='btn bg-success text-white fw-bold'> <i class="fa-duotone fa-car"></i> See Car</button>
              </div>
            </div>
          </div>

        </div>

        <div class="col">

          <div class="card">
            <img src={bmw} class="card-img-top height" alt="..." />
            <div class="card-body text-center">
              <h5 class="card-title">Card title</h5>
              <div className=''>
                <button className='btn bg-success text-white fw-bold'>See Car</button>
              </div>
            </div>
          </div>

        </div>

        <div class="col">

          <div class="card">
            <img src={audi} class="card-img-top height" alt="..." />
            <div class="card-body text-center">
              <h5 class="card-title">Card title</h5>
              <div className=''>
                <button className='btn bg-success text-white fw-bold'>See Car</button>
              </div>
            </div>
          </div>

        </div>


      </div>

    </div>

  );

};

export default Category;