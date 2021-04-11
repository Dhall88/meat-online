import {useContext, useEffect} from 'react';
import {ProductContext} from '../context/productContext'
import {SortingContext} from '../context/sortingContext'
import EditProductTile from './editProductTile'

const EditProducts = () => {

    const [productState, productDispatch] = useContext(ProductContext);
    const [sortingState, sortingDispatch] = useContext(SortingContext)

    useEffect(() => {
        // console.log(sortingState.category)
        if (!!sortingState.search) {
            fetch(`http://localhost:3000/api/meats/search/${sortingState.search}?sorting=${sortingState.sorting}`)
            .then(data => data.json())
            .then(json => {
                productDispatch({
                    type: "ADD_PRODUCTS",
                    payload: json
                })
        })
    } else {
        fetch(`http://localhost:3000/api/meats/${sortingState.category}?sorting=${sortingState.sorting}`)
        .then(data => data.json())
        .then(json => {
            productDispatch({
                type: "ADD_PRODUCTS",
                payload: json
            })
        })
    }
    },[sortingState]);

    const buildTable = () => {
        const products = productState.products.map((product, index) => {
            return <EditProductTile product={product} />
            
        })

        return products;
    }

    return (
        <>
        {buildTable()}
        </>
    )
}

export default EditProducts;