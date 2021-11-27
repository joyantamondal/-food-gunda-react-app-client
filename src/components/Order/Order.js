
import React, { useEffect, useState } from "react";

import { useParams } from "react-router";


const Order = () => {
const {serviceId} = useParams();
const [order , setOrder] = useState({});

  useEffect(()=>{
    fetch(`https://sheltered-cliffs-77416.herokuapp.com/orders/${serviceId}`)
    .then(res=>res.json())
    .then(data=>setOrder(data))
},[])
const handleRemove = id=>{
    const url = `https://sheltered-cliffs-77416.herokuapp.com/orders/${id}`;
    fetch(url,{
        method: 'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
    })
}
  // const {serviceId} = useParams()
  
  return (
      <div>
          <h2>{order.name}</h2>
      </div>
 
  );
};

export default Order;
