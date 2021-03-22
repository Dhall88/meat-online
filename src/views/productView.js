import {useContext, useState} from 'react'
import {Container, Row, Col, Image, Button, Form} from 'react-bootstrap';
import Aside from '../components/aside';
import SortingHeader from '../components/sortingHeader';
import ProductTable from '../components/productTable';
import PaginationButtons from '../components/pagination';
import {ActiveProductContext} from '../context/activeProductContext';
import {CartContext} from '../context/cartContext';

const ProductView = (props) => {

    const link = `${process.env.PUBLIC_URL}/assets/imgs/`

    console.log(props)

    const [activeProductState, activeProductDispatch] = useContext(ActiveProductContext);
    const [cartState, cartDispatch] = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);

    const onSubmit = () => {
        const product = props;
        product['quantity'] = quantity
        cartDispatch({
            type: 'ADD_PRODUCT',
            payload: product
        })
    }

    console.log(quantity)


    return (
        <Container>
            <Row>
                <Col>
                    <Image src={`${link}${props.pictures[0]}`} />
                </Col>
                <Col>
                    <Row>
                        <h3>{props.name}</h3>
                    </Row>
                    <Row>
                        <h1>{props.price} per {props.unit}</h1>
                    </Row>
                    <Row>
                        <h4>{props.description}</h4>
                    </Row>
                    <Form onSubmit={onSubmit}>
                        <Form.Group controlId="quantity">
                            <Form.Control type="number" value={quantity} onChange = {e => setQuantity(e.target.value)} />
                        </Form.Group>
                        <Button type="submit">Add to Card</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductView;