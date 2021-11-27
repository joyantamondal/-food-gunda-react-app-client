import React, { useEffect, useState } from 'react';
// import useProducts from '../../Hooks/useProducts';
import useCart from '../../Hooks/useCart';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import { useHistory } from 'react-router';
import { Container, Row } from 'react-bootstrap';
import './OrderCart.css'

const OrderCart = () => {
    const [cart,setCart]=useCart();
    const history = useHistory()
    const handleRemove = key=>{
        const newCart = cart.filter(product=>product.key!==key);
        setCart(newCart);
        removeFromDb(key);
    }
    const handleProceedToDelivery=()=>{
        // setCart([]);
        // clearTheCart()
        history.push('/deliveryinfo');
    }
    return (
        <div className="shop-container">
            <div className="cart-container">
                <Cart cart={cart}>
                <button onClick={handleProceedToDelivery} className="btn-regular btn-delivery">Proceed to Delivery</button>
                </Cart>
            </div>
            <div className="product-container">
                <Container>
                <Row>
                {
                    cart.map(product=><ReviewItem 
                        key={product.key}
                        product={product}
                        handleRemove={handleRemove}
                        >
                        </ReviewItem>)
                }
                </Row>
                </Container>
            </div>
            
        </div>
    );
};

export default OrderCart;