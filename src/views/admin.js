import Search from '../components/search'
import EditProducts from '../components/editProducts'
import {PaginationContextProvider} from '../context/paginationContext'
import Aside from '../components/aside'
import SortingHeader from '../components/sortingHeader'
import PaginationButtons from '../components/pagination'
import {Container, Row, Col} from 'react-bootstrap'

const Admin = () => {
    return (

        <div className="product">
        <Container fluid>
            <Row>
                <Col md='auto'>
                    <Aside url={'admin'}/>
                </Col>
                <Col>
                    <Row>
                    <SortingHeader/>
                    <Search />
                    </Row>
                    <Row>

                    <EditProducts/>
                    </Row>
                </Col>
            </Row>
            <Col>

            </Col>
        </Container>
        </div>
    )
}

export default Admin;