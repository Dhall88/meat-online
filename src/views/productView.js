import {useContext, useState} from 'react'
import {Container, Row, Col, Image, Button, Form} from 'react-bootstrap';
import Aside from '../components/aside';
import SortingHeader from '../components/sortingHeader';
import ProductTable from '../components/productTable';
import PaginationButtons from '../components/pagination';
import {ActiveProductContext} from '../context/activeProductContext';
import {CartContext} from '../context/cartContext';
import Cookies from 'universal-cookie'

const ProductView = () => {

    const link = `${process.env.PUBLIC_URL}/assets/imgs/`

    const [activeProductState, activeProductDispatch] = useContext(ActiveProductContext);
    const [cartState, cartDispatch] = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);

    console.log(activeProductState.activeProduct)

    const onSubmit = () => {
        const product = activeProductState.activeProduct;
        product['quantity'] = quantity
        cartDispatch({
            type: 'ADD_PRODUCT',
            payload: product
        })
        
//             const cookies = new Cookies();

// cookies.set('cartState', 'test', { path: '/' });

// console.log(cookies.get('cartState'))
       
    }


    return (
        <Container fluid>
            <Row>
                <Col xs={{span:5, offset: 1}} md={{span:5, offset: 1}} lg={{span:5, offset: 1}}>
                    <Image src={`${link}${activeProductState.activeProduct.pictures[0]}`} fluid />
                </Col>
                <Col>
                    <Row>
                        <h3>{activeProductState.activeProduct.name}</h3>
                    </Row>
                    <Row>
                        <h1>{activeProductState.activeProduct.price} per {activeProductState.activeProduct.unit}</h1>
                    </Row>
                    <Row>
                        <h4>{activeProductState.activeProduct.description}</h4>
                    </Row>
                    <Form onSubmit={onSubmit}>
                        <Form.Group controlId="quantity">
                            <Form.Control id="quantity-input" type="number" value={quantity} onChange = {e => setQuantity(e.target.value)} />
                        </Form.Group>
                        <Button type="submit">Add to Card</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductView;