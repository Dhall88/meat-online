import {useState, useContext} from 'react'
import {Form, Button} from 'react-bootstrap';
import {SortingContext} from '../context/sortingContext'
import {ProductContext} from '../context/productContext'

const Search = () => {

    const [search, setSearch] = useState('');
    const [sortingState, sortingDispatch] = useContext(SortingContext);
    const [productstate, productDispatch] = useContext(ProductContext)

    const onSubmit = () => {
    fetch(`http://localhost:3000/api/meats/search/${search}?sorting=${sortingState.sorting}`)
    .then(data => data.json())
    .then(json => {
        productDispatch({
            type: "ADD_PRODUCTS",
            payload: json
        })
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