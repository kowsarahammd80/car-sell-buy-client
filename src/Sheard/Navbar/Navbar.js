import React, { useContext } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/Logo1.png'
import { AuthContext } from '../../Auth/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
   
  const handleLogOut = () => {
     logOut()
     .then(result => {})
     .catch(error => console.error(error))
  }


  return (
    <div className=''>
      <nav class="navbar navbar-expand-lg bg-black">
        <div class="container-fluid">
          <Link class="navbar-brand" href="#">
            <img src={logo} alt="Logo" class="d-inline-block align-text-top img-fluid p-0" />
          </Link>
          <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item fw-bold">
                <Link to='/' class="nav-link text-white" >Home</Link>
              </li>

              <li class="nav-item fw-bold">
                <Link to='/blog' class="nav-link text-white" >Blogs</Link>
              </li>
              <li class="nav-item fw-bold">
                <Link to='/category' class="nav-link text-white" >Category</Link>
              </li>
              <li class="nav-item fw-bold">
                <Link to='/addproduct' class="nav-link text-white" >Add Product</Link>
              </li>
              <li class="nav-item fw-bold">
                <Link to='/myorder' class="nav-link text-white" >My Order</Link>
              </li>
              <li class="nav-item fw-bold">
                <Link to='/myProductList' class="nav-link text-white" >My Product List</Link>
              </li>

              {
                 
                 user?.uid ?

                 <button onClick={handleLogOut} className='btn btn-danger fw-bold'>Log Out</button>
                 :
                <>

                  <li class="nav-item fw-bold">
                    <Link to='/login' class="nav-link text-white" >Login</Link>
                  </li>
                  <li class="nav-item fw-bold">
                    <Link to='/signup' class="nav-link text-white">Sign Up</Link>
                  </li>
                </>
              }

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );

};

export default Navbar;