import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import {getStoredCart,clearTheCart } from '../../utilities/fakedb';
import './DeliveryInfo.css';
const DeliveryInfo = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const {user}= useAuth()
  const onSubmit = data => {
    const savedCart = getStoredCart();
    data.order=savedCart;
    fetch('https://sheltered-cliffs-77416.herokuapp.com/orders',{
      method: 'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(result=>{
      if(result.insertedId){
        alert('Order Processed Successfully');
        clearTheCart();
        reset();
      }
    })
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="shipping-form">
        <input defaultValue={user.displayName} {...register("name")} />
        <input defaultValue={user.email} {...register("email", { required: true })} />
        {errors.email && <span className="error">This field is required</span>}
        <input placeholder="Address" defaultValue="" {...register("address")} />
        <input placeholder="City" defaultValue="" {...register("city")} />
        <input placeholder="Phone" defaultValue="" {...register("phone")} />

        <input type="submit" />
      </form>
    </div>
  );
};

export default DeliveryInfo;
