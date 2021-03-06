import React, { useState, useContext, useEffect } from "react";
import {Jumbotron, Container, Pagination} from 'react-bootstrap';
import {ProductContext} from '../context/productContext';
import {PaginationContext} from '../context/paginationContext'
import {LinkContainer} from 'react-router-bootstrap'
import {SortingContext} from '../context/sortingContext'

const PaginationButtons = (props) => {

    const [productState, productDispatch] = useContext(ProductContext);
    const [paginationState, paginationDispatch] = useContext(PaginationContext);
    const [sortingState, sortingDispatch] = useContext(SortingContext)
    

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
        let totalPages = Math.ceil(productState.products.length/9)

        let buttons = [];
        for (let i = 1; i<=totalPages; i++) {
            let query = buildQuery(i);
            
            buttons.push(
                    <LinkContainer key={i} exact to={`${sortingState.category}${query}`} onClick={() => setPagination(i)}>
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