import React from 'react';
import brand from '../../assets/caru-img/bner1170-1.png'

const BrandSection = () => {
  return (
    <div className='container d-flex justify-content-center align-items-center mt-4'>

       <div>
         <img src={brand} className="img-fluid" alt="" />
       </div>
      
    </div>
  );
};

export default BrandSection;