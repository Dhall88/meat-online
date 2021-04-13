import {useState, useEffect} from 'react'
import {Row, Col, Image, Form, Button} from 'react-bootstrap'

const EditProductTile = (props) => {
    // console.log(props)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [unit, setUnit] = useState('')
    const [description, setDescription] = useState('')
    const [categories, setCategory] = useState([])
    const [newCat, setNewCat] = useState('')

    useEffect(()=> {

        setName(props.product.name)
        setPrice(props.product.price)
        setUnit(props.product.unit)
        setDescription(props.product.description)
        setCategory(props.product.catagories)
        console.log(price)
    },[])

    // console.log(price)

    const link = `${process.env.PUBLIC_URL}/assets/imgs/`

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
            props.product.price=price;
            props.product.name=name;
            props.product.description=description;
            props.product.catagories=categories;
            props.product.unit=unit;
            const response = await fetch(`/api/meats/${props.product._id}`, {
              method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            //   mode: 'cors', // no-cors, *cors, same-origin
            //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            //   credentials: 'same-origin', // include, *same-origin, omit
              headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            //   redirect: 'follow', // manual, *follow, error
            //   referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
              body: JSON.stringify(props.product) // body data type must match "Content-Type" header
            });
            console.log(response.json(props.product)); // parses JSON response into native JavaScript objects
          }
    

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

    return (
        <Row>
            <Col>
                <Image src={`${link}${props.product.pictures[0]}`} thumbnail /> 
            </Col>
            <Col>
                <Form>
                    <Form.Group>
                        <Form.Control type="text" value={name} onChange={e=>setName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="number" value={price} onChange={e=>setPrice(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="text" value={unit} onChange={e=>setUnit(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="textarea" value={description} onChange={e=>setDescription(e.target.value)} />
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

export default EditProductTile;