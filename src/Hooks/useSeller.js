import  { useEffect, useState } from 'react';
import Loading from '../Sheard/Loading/Loading';

const useSeller = (email) => {

  console.log(email)
   
  const [isSeller, setSeller] = useState(true)
  const [isSellerLoading, setIsSellerLoading] = useState(true)
  
    
  useEffect(() => {
    if(email){
      fetch(`http://localhost:5000/usersSeller/${email}`)
      .then(res => res.json())
      .then(data => {
        setSeller(data.email)
        setIsSellerLoading(false)
  
      })
    }
  },[email])
  
  return [isSeller, isSellerLoading]
};

export default useSeller; 