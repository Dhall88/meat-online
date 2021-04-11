import {useState, useContext} from 'react'
import {Form, Button} from 'react-bootstrap';
import {SortingContext} from '../context/sortingContext'
import {ProductContext} from '../context/productContext'
import {CategoryContext} from '../context/categoryContext'

const Search = () => {

    const [search, setSearch] = useState('');
    const [sortingState, sortingDispatch] = useContext(SortingContext);
    const [productstate, productDispatch] = useContext(ProductContext);

    const onSubmit = () => {
        sortingDispatch({
            type: "SET_SEARCH",
            payload: search
        })
    }

    return (
        <Form onSubmit={onSubmit}>

        <Form.Group controlId="search">
            <Form.Control type="text" value = {search} onChange = {(e)=>setSearch(e.target.value)} placeholder="Search by Name" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
</Form>
    )
}

export default Search;