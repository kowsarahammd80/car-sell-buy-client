import { useEffect, useState } from 'react';


const useSeller = (email) => {

  const [isSeller, setSeller] = useState(null)
  const [isSellerLoading, setIsSellerLoading] = useState(true)

  useEffect(() => {
   
      fetch(`http://localhost:5000/usersSeller/${email}`)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setSeller(data.email)
          setIsSellerLoading(false)
        })
    
  }, [email])


  return [isSeller, isSellerLoading]
};

export default useSeller; 