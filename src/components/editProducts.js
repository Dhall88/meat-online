// import {useContext, useEffect} from 'react';
// import {ProductContext} from '../context/productContext'

// const EditProducts = () => {

//     const [productState, productDispatch] = useContext(ProductContext);

//     useEffect(() => {
//         // console.log(sortingState.category)
//         fetch(`http://localhost:3000/api/meats/${sortingState.category}?sorting=${sortingState.sorting}`)
//         .then(data => data.json())
//         .then(json => {
//             productDispatch({
//                 type: "ADD_PRODUCTS",
//                 payload: json
//             })
//         })
//     },[sortingState]);

//     return (

//     )
// }