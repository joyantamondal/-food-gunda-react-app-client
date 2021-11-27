import React, { Fragment, useEffect, useState } from 'react';
// import React, { Fragment } from "react";
// import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import './Food.css';
// import { Link } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import { Container, Row } from 'react-bootstrap';
// import { useAlert } from 'react-alert';

const Food = () => {
    
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart();
    const [page,setPage] = useState(0);
    const [pageCount,setPageCount] = useState(0);
    // products to be rendered on the UI
    const [displayProducts, setDisplayProducts] = useState([]);
    const size = 10;

    useEffect(() => {
        fetch(`https://sheltered-cliffs-77416.herokuapp.com/products?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                setDisplayProducts(data.products);
                const count = data.count;
                const pageNumber = Math.ceil(count/size);
                setPageCount(pageNumber);
            });
    }, [page]);

    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }
    }, [])

    const handleAddToCart = (product) => {
        const exists = cart.find(pd=>pd.key === product.key);
        let newCart= [];
        if(exists){
            const rest = cart.filter(pd=>pd.key!==product.key);
            exists.quantity=exists.quantity+1;
            newCart= [...rest,product];
            alert('Food Added to Cart Successfully...');
        }
        else{
            product.quantity= 1;
            newCart = [...cart,product]
        }
        setCart(newCart);
        // save to local storage (for now)
        addToDb(product.key);
    }

    const handleSearch = event => {
        const searchText = event.target.value;

        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));

        setDisplayProducts(matchedProducts);
        // if(!matchedProducts){
        //     <h3>Nod Found</h3>
        // }
    }

    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    onChange={handleSearch}
                    placeholder="Hungry? Type Your Favouite Food" />
            </div>
            <Container>
            <Row>
           
                
                    {
                        displayProducts.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        >
                        </Product>)
                    }
                    <div className="pagination">
                    {
                        [...Array(pageCount).keys()]
                        .map(number =><button
                        className={number===page ? 'selected': ''}
                        key={number}
                        onClick={()=>setPage(number)}
                        >{number +1}</button>)
                    }
                    </div>
                </Row>
                </Container>
           
        </>
    );
};

export default Food;