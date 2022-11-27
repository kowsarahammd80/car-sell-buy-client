import { useEffect, useState } from 'react';

const useBuyer = (email) => {
  
  const [isBuyer, setBuyer] = useState(true)
  const [isBuyerLoading, setIsBuyerLoading] = useState(true)
     
  useEffect(() => {
    if(email){
      fetch(`http://localhost:5000/usersSeller/${email}`)
      .then(res => res.json())
      .then(data => {
        setBuyer(data.email)
        setIsBuyerLoading(false)
  
      })
    }
  },[email])
  
  return [isBuyer, isBuyerLoading]
 
};

export default useBuyer;