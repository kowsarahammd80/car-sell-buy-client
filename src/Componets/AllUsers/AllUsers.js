import React, { useEffect, useState } from 'react';
import Loading from '../../Sheard/Loading/Loading';
import AllUserTb from './AllUserTb';

const AllUsers = () => {

  const [allUsers, setAllUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`http://localhost:5000/allUser`)
      .then(res => res.json())
      .then(data => {
        setAllUsers(data)
        setLoading(false)
      })
      .catch(e => console.error(e))
  }, [allUsers])

  if(loading){
    return <Loading/>
  }

  return (
    <div className='container mt-3 mb-3'>

      <h3 className='text-center'>All User List</h3>

      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {
          allUsers.map(allUser => <AllUserTb
           key={allUser._id}
           allUserData={allUser}
          >
          </AllUserTb>)
        }
   
      </div>

    </div>
  );
};

export default AllUsers;