import { useEffect } from "react";
import { useState } from "react"

const useProducts=()=>{
 const [products,setProducts]=useState([]);
 useEffect(()=>{
     fetch('https://sheltered-cliffs-77416.herokuapp.com/products')
     .then(res=>res.json())
     .then(data=>setProducts(data.products))
 },[])
 //return necessary things
 return [products,setProducts];
}
export default useProducts;