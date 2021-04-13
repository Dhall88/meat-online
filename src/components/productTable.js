import React, { useState, useContext, useEffect } from "react";
import {Jumbotron, Container, Image, Table, Col, Row} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {CartContext} from '../context/cartContext';
import {ProductContext} from '../context/productContext';
import {PaginationContext} from '../context/paginationContext';
import {ActiveProductContext} from '../context/activeProductContext';
import {CategoryContext} from '../context/categoryContext';
import { SortingContext } from '../context/sortingContext';


const ProductTable = (props) => {

    // const [productState, productDispatch] = useContext(ProductContext);
    // const [productState, setProducts] = useState([]);
    const [paginationState, paginationDispatch] = useContext(PaginationContext);
    const [activeProductState, activeProductDispatch] = useContext(ActiveProductContext);
    const [sortingState, sortingDispatch] = useContext(SortingContext);
    const [productState, productDispatch] = useContext(ProductContext)
    // const [sortingState, categoryDispatch] = useContext(CategoryContext)
   

    const link = `${process.env.PUBLIC_URL}/assets/imgs/`
    
    console.log(sortingState)


    useEffect(() => {
        // console.log(sortingState.category)
        if (!!sortingState.search) {
            fetch(`/api/meats/search/${sortingState.search}?sorting=${sortingState.sorting}`, {
                headers: {
                    Accept: 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                }
            })
            .then(data => data.json())
            .then(json => {
                productDispatch({
                    type: "ADD_PRODUCTS",
                    payload: json
                })
        })
    } else {
        fetch(`/api/meats/${sortingState.category}?sorting=${sortingState.sorting}`, {
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            }
        })
        .then(data => data.json())
            
        .then(json => {
            productDispatch({
                type: "ADD_PRODUCTS",
                payload: json
            })
        })
    }
    },[sortingState]);

    // console.log(sortingState)

    const buildRow = (arr) => {

        let end = 3-arr.length;

        let result = arr.map((product,index) => {
        
                return  <Col xs={6} md={4}>
                            <LinkContainer to = {`/${props.url}/${sortingState.category}/${product.name}`} onClick={() => activeProductDispatch({
                                                                                    type: 'SET_PRODUCT',
                                                                                    payload: product})}>
                                <Container>
                                <Image src={`${link}${product.pictures[0]}`} thumbnail /> 
                                    <Row>
                                        <Col><h4>{product.name}</h4></Col>
                                        
                                    </Row> 
                                    <Row>
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

    const buildTable = () => {

        const pagScale = (paginationState.pagination-1)*9;

        

        return (
            <Container>
                <Row>
                    {buildRow(productState.products.slice(pagScale, pagScale+9))}
                </Row>
                {/* <Row>
                    {buildRow(productState.slice(pagScale+3, pagScale+6))}
                </Row>
                <Row>
                    {buildRow(productState.slice(pagScale+6, pagScale+9))}
                </Row> */}
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