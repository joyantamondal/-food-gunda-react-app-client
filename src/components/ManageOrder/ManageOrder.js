import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ManageOrder = () => {
    const [orders, setOrders] = useState([]);
    useEffect(()=>{
        
            fetch('https://sheltered-cliffs-77416.herokuapp.com/orders')
            .then(res=>res.json())
            .then(data=>setOrders(data))
        },[])

  
    const handleDelete = id=>{
        
        const url = `https://sheltered-cliffs-77416.herokuapp.com/orders/${id}`;
        fetch(url,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount){
                alert('Deleted Successfully');
                const remaining = orders.filter(order=>order._id!==id);
                setOrders(remaining);
            }
        })
    }
    return (
        <div>
            <h2>Manage Orders</h2>
            {
                orders.map(order=><div key={order._id}>
                    <h3> Name: {order.name}</h3>
                    <h3> Email: {order.email}</h3>
                    <h3>Address: {order.address}</h3>
                    <h3>Phone: {order.phone}</h3>
                    <button onClick={() => handleDelete(order._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageOrder;