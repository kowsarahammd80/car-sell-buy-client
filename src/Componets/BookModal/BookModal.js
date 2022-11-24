import React from 'react';

const BookModal = () => {
  return (
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">

            {/* modal form start */}

            <form>

              <div class="mb-3">

                <label for="recipient-name" class="col-form-label">User Name</label>
                <input type="text" class="form-control" id="recipient-name" />

              </div>

              <div class="mb-3">

                <label for="recipient-name" class="col-form-label">Email</label>
                <input type="text" class="form-control" id="recipient-name" />

              </div>
              <div class="mb-3">

                <label for="recipient-name" class="col-form-label">Product Name</label>
                <input type="text" class="form-control" id="recipient-name" />

              </div>

              <div class="mb-3">

                <label for="recipient-name" class="col-form-label"> Price Price</label>
                <input type="text" class="form-control" id="recipient-name" />

              </div>

              <div class="mb-3">

                <label for="recipient-name" class="col-form-label">Phone Number</label>
                <input type="text" class="form-control" id="recipient-name" />

              </div>

              <div class="mb-3">

                <label for="recipient-name" class="col-form-label">Meet Location</label>
                <input type="text" class="form-control" id="recipient-name" />

              </div>

            </form>

            {/* modal form end */}



          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Understood</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookModal;