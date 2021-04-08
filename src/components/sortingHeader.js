import {useContext} from 'react'
import {Container, Row, Col, Image, Button, Dropdown} from 'react-bootstrap';
import Aside from '../components/aside';
import {LinkContainer} from 'react-router-bootstrap';
import ProductTable from '../components/productTable';
import PaginationButtons from '../components/pagination';
import {ActiveProductContext} from '../context/activeProductContext';
import {CartContext} from '../context/cartContext';
import { CategoryContext } from '../context/categoryContext';
import { SortingContext } from '../context/sortingContext';

const SortingHeader = () => {


    const [sortingState, sortingDispatch] = useContext(SortingContext);


    return (
        <Container>
                           <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Sort By
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={() => sortingDispatch({
                                                        type: 'SET_CATEGORY',
                                                        payload: {sorting: ''}})}>
                Default</Dropdown.Item>
                <Dropdown.Item onClick={() => sortingDispatch({
                                                        type: 'SET_CATEGORY',
                                                        payload: {sorting: '-price'}})}>
                Price: High to Low</Dropdown.Item>
                <Dropdown.Item onClick={() => sortingDispatch({
                                                        type: 'SET_CATEGORY',
                                                        payload: {sorting: 'price'}})}>
                Price: Low to High</Dropdown.Item>
                <Dropdown.Item onClick={() => sortingDispatch({
                                                        type: 'SET_CATEGORY',
                                                        payload: {sorting: 'popularity'}})}>
                Popularity</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
        </Container>
    )
}

export default SortingHeader;