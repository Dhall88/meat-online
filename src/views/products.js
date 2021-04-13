
import {Container, Row, Col} from 'react-bootstrap';
import Aside from '../components/aside';
import SortingHeader from '../components/sortingHeader';
import ProductTable from '../components/productTable';
import PaginationButtons from '../components/pagination';
import Search from '../components/search'
import {PaginationContextProvider} from '../context/paginationContext';
import {SortingContextProvider} from '../context/sortingContext';


const Products = () => {

    return (
        <PaginationContextProvider>
            <div className="product">
            <Container fluid>
                <Row>
                    <Col md='auto'>
                        <Aside url={'products'}/>
                    </Col>
                    <Col>
                        <Row>
                        <SortingHeader/>
                        <Search />
                        </Row>
                        <Row>

                        <ProductTable url={'products'}/>
                        </Row>
                        <Row>

                        <PaginationButtons/>
                        </Row>
                    </Col>
                </Row>
                <Col>

                </Col>
            </Container>
            </div>
        </PaginationContextProvider>
    )
}

export default Products;