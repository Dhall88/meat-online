import {useContext, useEffect} from 'react';
import {ProductContext} from '../context/productContext'
import {SortingContext} from '../context/sortingContext'
import EditProductTile from './editProductTile'

const EditProducts = () => {

    const [productState, productDispatch] = useContext(ProductContext);
    const [sortingState, sortingDispatch] = useContext(SortingContext);

    // console.log(sortingState)

    // let products;

    const buildTable = () => {
        const products = productState.products.map((product, index) => {
            return <EditProductTile key={`${Math.random()*Math.random()}`} product={product} />
            
        })
        return products;
    }
    useEffect(() => {
        console.log('in edit effect')
        if (!!sortingState.search) {
            console.log('in use effect if')
            fetch(`/api/meats/search/${sortingState.search}?sorting=${sortingState.sorting}`)
            .then(data => data.json())
            .then(json => {
                productDispatch({
                    type: "ADD_PRODUCTS",
                    payload: json
                })
                console.log(json)
        })
    } else {
        console.log('in use effect else')
        fetch(`/api/meats/${sortingState.category}?sorting=${sortingState.sorting}`)
        .then(data => data.json())
        .then(json => {
            productDispatch({
                type: "ADD_PRODUCTS",
                payload: json
            })
        })
    }
    },[sortingState]);
    console.log(productState.products)
    const products = buildTable();
    return (
        <>
        <h1>Admin</h1>
        {products}
        </>
    )
}

export default EditProducts;