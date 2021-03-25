
import {Container, Row, Col} from 'react-bootstrap';
import Aside from '../components/aside';
import SortingHeader from '../components/sortingHeader';
import ProductTable from '../components/productTable';
import PaginationButtons from '../components/pagination';
import {PaginationContextProvider} from '../context/paginationContext';
import {SortingContextProvider} from '../context/sortingContext';


const Products = () => {

    return (
        <PaginationContextProvider>
            <Container fluid>
                <Row>
                    <Col md='auto'>
                        <Aside/>
                    </Col>
                    <Col>
                        <Row>
                        <SortingHeader/>
                        </Row>
                        <Row>

                        <ProductTable/>
                        </Row>
                        <Row>

                        <PaginationButtons/>
                        </Row>
                    </Col>
                </Row>
                <Col>

                </Col>
            </Container>
        </PaginationContextProvider>
    )
}

export default Products;