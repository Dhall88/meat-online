import {useContext} from 'react'
import {Container, Row, Col, Image, Button} from 'react-bootstrap';
import Aside from '../components/aside';
import {LinkContainer} from 'react-router-bootstrap';
import ProductTable from '../components/productTable';
import PaginationButtons from '../components/pagination';
import {ActiveProductContext} from '../context/activeProductContext';
import {CartContext} from '../context/cartContext';
import { SortingContext } from '../context/sortingContext';

const Cart = (props) => {

    const [sortingState, sortingDispatch] = useContext(SortingContext);

    console.log(props.url)


    return (
        <Container>
            <h1 className="category-header">Products</h1>
            <Container>
                <Row>
                    <Col xs={4} md={12}>
                <LinkContainer to={`/${props.url}/steak`} onClick={() => sortingDispatch({
                                                                type: "SET_CATEGORY",
                                                                payload: {category:"steak",
                                                                        sorting:""}
                                                                })}
                    ><a className="category">Steak</a>
                </LinkContainer>
                </Col>
                <Col xs={4} md={12}>
                <LinkContainer to={`/${props.url}/beef`} onClick={() => sortingDispatch({
                                                                type: "SET_CATEGORY",
                                                                payload: {category: "beef",
                                                                          sorting:""}
                                                                })}
                    ><a className="category">Hotdog</a>
                </LinkContainer>
                </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Cart;