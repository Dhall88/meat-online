import {useState} from 'react'
import {Row, Col, Image, Form} from 'react-bootstrap'

const EditProductTile = (props) => {
    const [name, setName] = useState(props.product.name)
    const [price, setPrice] = useState(props.product.price)
    const [unit, setUnit] = useState(props.product.unit)
    const [description, setDescription] = useState(props.product.description)
    const [categories, setCategory] = useState(props.product.catagories)

    const link = `${process.env.PUBLIC_URL}/assets/imgs/`

    const buildCategories = () => {
        let result; 

        result = categories.map((category, index) => {
            return <Form.Group>
                <Form.Control type="text" value={categories[index]} onChange={e=>setCategory(e.target.value)} />
            </Form.Group>
        })

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
                    {buildCategories()}
                </Form>
            </Col>

        </Row>
    )
}

export default EditProductTile;