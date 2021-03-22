import React, { useState, useContext, useEffect } from "react";
import {Jumbotron, Container, Image, Table, Col, Row} from 'react-bootstrap';
import {CartContext} from '../context/cartContext';
import {ProductContext} from '../context/productContext';

const handleProdutState = (props) => {

    const [productState, productDispatch] = useContext(ProductContext)

    useEffect(() => {
        console.log("in use effect")
        fetch(`http://localhost:3000/api/meats/`)
        .then(data => data.json())
        .then(json => {
            console.log(json)
            productDispatch({
                type: 'ADD_PRODUCTS',
                payload: json
            })
        })
    },[productDispatch]);

    return <></>
}

export default handleProductState;