import React, { useState, useContext, useEffect } from "react";
import {Jumbotron, Container, Image, Table, Col, Row} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {CartContext} from '../context/cartContext';
import {ProductContext} from '../context/productContext';
import {PaginationContext} from '../context/paginationContext';
import {ActiveProductContext} from '../context/activeProductContext';
import {CategoryContext} from '../context/categoryContext';


const ProductTable = (props) => {

    const [productState, productDispatch] = useContext(ProductContext);
    const [paginationState, paginationDispatch] = useContext(PaginationContext);
    const [activeProductState, activeProductDispatch] = useContext(ActiveProductContext);
    // const [categoryState, categoryDispatch] = useContext(CategoryContext)

    const link = `${process.env.PUBLIC_URL}/assets/imgs/`


    useEffect(() => {
        fetch(`http://localhost:3000/api/meats/${props.category}`)
        .then(data => data.json())
        .then(json => {
            productDispatch({
                type: 'ADD_PRODUCTS',
                payload: json
            })
        })
    },[]);

    // console.log(categoryState)

    const buildRow = (arr) => {

        let end = 3-arr.length;

        let result = arr.map((product,index) => {
        
                return  <Col>
                            <LinkContainer to = {`/${props.category}/${product.name}`} onClick={() => activeProductDispatch({
                                                                                    type: 'SET_PRODUCT',
                                                                                    payload: product})}>
                                <Container>
                                <Image src={`${link}${product.pictures[0]}`} thumbnail /> 
                                    <Row>
                                        <Col><h4>{product.name}</h4></Col>
                                        <Col><h4>{product.price}</h4></Col>
                                    </Row> 
                                    </Container>                       
                            </LinkContainer>
                        </Col>
        })
        for(end; end>0; end--) {
            result.push(<Col></Col>)
        }
        return result;
    }

    const buildTable = (index) => {

        const pagScale = (paginationState.pagination-1)*9;

        

        return (
            <Container>
                <Row>
                    {buildRow(productState.products.slice(pagScale, pagScale+3))}
                </Row>
                <Row>
                    {buildRow(productState.products.slice(pagScale+3, pagScale+6))}
                </Row>
                <Row>
                    {buildRow(productState.products.slice(pagScale+6, pagScale+9))}
                </Row>
            </Container>
        )

    }

    const products = buildTable(paginationState.pagination);

    return (
        <>
            {products}
        </>
    )
}

export default ProductTable;