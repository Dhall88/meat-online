import {useContext} from 'react'
import {Container, Row, Col, Image, Button, Form} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import {ActiveProductContext} from '../context/activeProductContext';
import {CartContext} from '../context/cartContext';

const Cart = () => {

    const link = `${process.env.PUBLIC_URL}/assets/imgs/`

    const [activeProductState, activeProductDispatch] = useContext(ActiveProductContext)
    const [cartState, cartDispatch] = useContext(CartContext);

    console.log(cartState.products)

    const buildTable = () => {
        const products = cartState.products.map((product, index) => {
            return <Row className="align-items-center">
                        <Col>
                            <h4>{product.name}</h4>
                        </Col>
                        <Col>
                            <Image src={`${link}${product.pictures[0]}`} />
                        </Col>
                        <Col>
                            <h4>{product.price}</h4>
                        </Col>
                        <Col>
                            <Form.Control id="quantity-input" type="number" value={product.quantity} onChange = {e => cartDispatch({
                                                                                                                        type: "UPDATE_QUANTITY",
                                                                                                                        payload: {product: product, quantity:e.target.value}
                            })} />
                        </Col>
                        <Col>
                            <Button onClick={() => cartDispatch({
                                                    type: 'DEL_PRODUCT',
                                                    payload: product
                                                    })}>
                                                        Remove Item
                            </Button>
                        </Col>

                    </Row>
        })
        const total = calcPrice();

        products.push(<Row><Col  className="text-right total"><h3>Total: {total}</h3></Col></Row>);

        return products;
    }

    const calcPrice = () => {
        let result = 0;

        for (let i = 0; i<cartState.products.length; i++) {
            result+=(cartState.products[i].price*cartState.products[i].quantity)
        }

        return result.toFixed(2);

    }

    let cart = buildTable();


    return (
        <div className="cart d-flex justify-content-center">
            {cartState.products.length!==0?
            
            <Container>
            {cart}
                <div className="d-flex justify-content-end">
                    <LinkContainer to="/checkout"><Button>Checkout</Button></LinkContainer>
                </div>
            </Container>
            
            :<h3>Your Cart is Empty!</h3>}
        </div>
    )
}

export default Cart;