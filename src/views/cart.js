import {useContext} from 'react'
import {Container, Row, Col, Image, Button} from 'react-bootstrap';
import Aside from '../components/aside';
import SortingHeader from '../components/sortingHeader';
import ProductTable from '../components/productTable';
import PaginationButtons from '../components/pagination';
import {ActiveProductContext} from '../context/activeProductContext';
import {CartContext} from '../context/cartContext';

const Cart = () => {

    const link = `${process.env.PUBLIC_URL}/assets/imgs/`

    const [activeProductState, activeProductDispatch] = useContext(ActiveProductContext)
    const [cartState, cartDispatch] = useContext(CartContext);

    console.log(cartState)

    const buildTable = () => {
        const products = cartState.products.map((product, index) => {
            return <Row>
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
                            <h4>{product.quantity}</h4>
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

        products.push(<Row ><Col md={{ span: 4, offset: 8 }}>{total}</Col></Row>);

        return products;
    }

    const calcPrice = () => {
        let result = 0;

        for (let i = 0; i<cartState.products.length; i++) {
            result+=(cartState.products[i].price*cartState.products[i].quantity)
        }

        return result;

    }

    let cart = buildTable();


    return (
        <Container>
            {cart}
        </Container>
    )
}

export default Cart;