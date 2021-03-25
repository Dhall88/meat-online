import {useContext} from 'react'
import {Container, Row, Col, Image, Button} from 'react-bootstrap';
import Aside from '../components/aside';
import {LinkContainer} from 'react-router-bootstrap';
import ProductTable from '../components/productTable';
import PaginationButtons from '../components/pagination';
import {ActiveProductContext} from '../context/activeProductContext';
import {CartContext} from '../context/cartContext';
import { SortingContext } from '../context/sortingContext';

const Cart = () => {

    const [sortingState, sortingDispatch] = useContext(SortingContext);


    return (
        <Container>
            <h1>Products</h1>
            <uo>
                <LinkContainer to={`/products/steak`} onClick={() => sortingDispatch({
                                                                type: 'SET_CATEGORY',
                                                                payload: 'steak'
                                                                })}
                    ><li>Steak</li>
                </LinkContainer>
                <LinkContainer to={`/products/beef`} onClick={() => sortingDispatch({
                                                                type: 'SET_CATEGORY',
                                                                payload: 'beef'
                                                                })}
                    ><li>Hotdog</li>
                </LinkContainer>
            </uo>
        </Container>
    )
}

export default Cart;