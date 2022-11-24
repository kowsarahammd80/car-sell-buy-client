import React from 'react';

const AddProduct = () => {
  return (
    <div className='container'>

      <h5 className='text-center mt-3'>Add Your Product</h5>

      <div className='container mt-4 mb-5'>

        <form className='' >

          <div class="mb-3">

            <label for="exampleFormControlInput1" class="form-label">Car PhotoURL</label>

            <input type="text" class="form-control" name='photURL' id="exampleFormControlInput1" placeholder="Img URL" />

          </div>

          <div class="mb-3">

            <label for="exampleFormControlInput1" class="form-label">Car Model Name</label>
            <input type="text" class="form-control" name='modelName' id="exampleFormControlInput1" placeholder="Model name" />

          </div>

          <div class="mb-3">

            <label for="exampleFormControlInput1" class="form-label">Old Price</label>

            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Price" name='price' />

          </div>

          <div class="mb-3">

            <label for="exampleFormControlInput1" class="form-label">Sell Price</label>

            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Rating" name='rating' />

          </div>

          <div class="mb-3">

            <label for="exampleFormControlInput1" class="form-label">Location</label>

            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Location" name='location' />

          </div>

          <div class="mb-3">

            <label for="exampleFormControlInput1" class="form-label">Car Category</label>

            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Rating" name='CarCategory' />

          </div>

          <div class="mb-3">

            <label for="exampleFormControlTextarea1" class="form-label">Product details</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Rating" name='productDetails' />

            <div className='text-center mt-3'>

              <button type='submit' className='btn btn-dark w-50'>Add Product</button>

            </div>

          </div>

        </form>

      </div>

    </div>
  );
};

export default AddProduct;