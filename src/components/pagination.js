import React, { useState, useContext, useEffect } from "react";
import {Jumbotron, Container, Pagination} from 'react-bootstrap';
import {ProductContext} from '../context/productContext';
import {PaginationContext} from '../context/paginationContext'
import {LinkContainer} from 'react-router-bootstrap'

const PaginationButtons = (props) => {

    const [productState, productDispatch] = useContext(ProductContext);
    const [paginationState, paginationDispatch] = useContext(PaginationContext);
    

    const setPagination = (i) => {
        paginationDispatch({
            type: 'SET_PAGINATION',
            payload: i
        })
    }


    const buildQuery = (page) => {
        return `?page=${page}`
    }

    const buildPagination = () => {

        let totalPages
        if (!productState.filteredProducts) {
            totalPages = Math.ceil(productState.products.length/9)
        } else {
            totalPages = Math.ceil(productState.filteredProducts.length/9)
        }

        let buttons = [];
        for (let i = 1; i<=totalPages; i++) {
            let query = buildQuery(i);
            
            buttons.push(
                    <LinkContainer key={i} to={`/${props.category}${query}`} onClick={() => setPagination(i)}>
                        <Pagination.Item  activeLabel='(current)' active={i===paginationState.pagination} >
                            {i}
                        </Pagination.Item>
                    </LinkContainer>
            )
        }
        return buttons;
    }

    let buttons = buildPagination();


    // const buttons = buildPagination();


    return (
        <Pagination>
            {buttons}
        </Pagination>
    )
}

export default PaginationButtons;