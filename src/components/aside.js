import {useContext} from 'react'
import {Container, Row, Col, Image, Button} from 'react-bootstrap';
import Aside from '../components/aside';
import {LinkContainer} from 'react-router-bootstrap';
import ProductTable from '../components/productTable';
import PaginationButtons from '../components/pagination';
import {ActiveProductContext} from '../context/activeProductContext';
import {CartContext} from '../context/cartContext';
import { CategoryContext } from '../context/categoryContext';

const Cart = () => {

    const [categoryState, categoryDispatch] = useContext(CategoryContext);


    return (
        <Container>
            <h1>Products</h1>
            <uo>
                <LinkContainer to={`/steak`} onClick={() => categoryDispatch({
                                                                type: 'SET_CATEGORY',
                                                                payload: {category: 'steak', sorting: ''}
                                                                })}
                    ><li>Steak</li>
                </LinkContainer>
                <LinkContainer to={`/beef`} onClick={() => categoryDispatch({
                                                                type: 'SET_CATEGORY',
                                                                payload: {category: 'beef', sorting: ''}
                                                                })}
                    ><li>Hotdog</li>
                </LinkContainer>
            </uo>
        </Container>
    )
}

export default Cart;