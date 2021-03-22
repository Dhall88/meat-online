import {Container} from 'react-bootstrap';
import Aside from '../components/aside';
import SortingHeader from '../components/sortingHeader';
import ProductTable from '../components/productTable';
import PaginationButtons from '../components/pagination';
import {PaginationContextProvider} from '../context/paginationContext'

const Products = (props) => {

    console.log(props)
    return (
        <PaginationContextProvider>
            {/* <Container>
                <Aside/>
            </Container>
            <Container>
                <SortingHeader/>
            </Container> */}
            <Container>
                <ProductTable category = {props}/>
            </Container>
            <Container>
                <PaginationButtons category = {props}/>
            </Container>
        </PaginationContextProvider>
    )
}

export default Products;