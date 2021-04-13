import {useState} from 'react'
import {Form, Button, Row, Col} from 'react-bootstrap'

const AddNewProduct = () => {

    console.log('in new product')

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [unit, setUnit] = useState('')
    const [description, setDescription] = useState('')
    const [categories, setCategory] = useState([])
    const [pictureUrl, setPictureUrl] = useState('')
    const [newCat, setNewCat] = useState('');
    const [product, setProduct] = useState({})

    const buildCategories = () => {
        let result; 

        result = categories.map((category, index) => {
            return <>
                <Form.Group>
                <Form.Control type="text" value={categories[index]} onChange={e=>setCategory(e.target.value)} />
            </Form.Group>
            <Button variant = "primary" onClick={()=>{removeCategory(index)}} >
                Remove category
                </Button>
            </>
        })
        result.push(
            <Form onSubmit = {addCategory}>
           <Form.Group>
               <Form.Control type="text" value={newCat} placeholder="add category" onChange={e=>setNewCat(e.target.value)} />
           </Form.Group>
           <Button variant="primary" type="submit">
           Submit
       </Button>
           </Form>
       )

       return result
   }

        const addCategory = () => {
        
            setCategory([...categories, newCat])
            setNewCat('')
        }
    
        const removeCategory = (index) => {
            console.log(categories)
            let firstHalf = categories.slice(0,index)
            let secondHalf = categories.slice(index+1, categories.length)
            setCategory([...firstHalf, ...secondHalf])
            
        }
    
    
            const saveInfo = async() => {
                // Default options are marked with *
                setProduct({
                    name: name,
                    price: price,
                    pictures: [pictureUrl],
                    description: description,
                    unit: unit,
                    catagories: categories
                })

                console.log(product)

                const response = await fetch(`/api/meats/`, {
                  method: 'POST', // *GET, POST, PUT, DELETE, etc.
                //   mode: 'cors', // no-cors, *cors, same-origin
                //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                //   credentials: 'same-origin', // include, *same-origin, omit
                  headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                //   redirect: 'follow', // manual, *follow, error
                //   referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                  body: JSON.stringify(product) // body data type must match "Content-Type" header
                });
                console.log(response.json(product)); // parses JSON response into native JavaScript objects
              }

    return(
        <Row>
        <Col>
            <Form>
                
                <Form.Group>
                    <Form.Control type="text" value={name} placeholder="Product Title" onChange={e=>setName(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Control type="text" value={pictureUrl} placeholder="Picture Url" onChange={e=>setPictureUrl(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Control type="number" value={price} placeholder="Price" onChange={e=>setPrice(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Control type="text" value={unit} placeholder="Units" onChange={e=>setUnit(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Control type="textarea" value={description} placeholder="Product Description" onChange={e=>setDescription(e.target.value)} />
                </Form.Group>

            </Form>
                {buildCategories()}
                <Button variant="primary" onClick={saveInfo}>
        Save Info
    </Button> 
        </Col>

    </Row>
    )
}

export default AddNewProduct;