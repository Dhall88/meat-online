import {useState} from 'react';
import {Form, Button} from 'react-bootstrap';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [business, setBusiness] = useState('');
    const [description, setDescription] = useState('')
    const [password, setPassword] = useState('');

    const onSubmit = async() => {

        console.log("in submit")
        const response = await fetch(`http://localhost:3000/api/users/signup`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
            //   'Content-Type': 'application/x-www-form-urlencoded',
            },
            // redirect: 'follow', // manual, *follow, error
            // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({username: email, password: password}) // body data type must match "Content-Type" header
          });
          console.log(response.json()); // parses JSON response into native JavaScript objects

    }
    return (
        <Form onSubmit={onSubmit}>
        <Form.Group controlId="email" >
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="businessName">
            <Form.Label>Business</Form.Label>
            <Form.Control type="text" value={business} onChange={(e)=>setBusiness(e.target.value)} placeholder="Business Name"></Form.Control>
        </Form.Group>
        <Form.Group controlId="textarea" value={description} onChange={(e)=>setDescription(e.target.value)}>
            <Form.Label>Tell us a little about yourself</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="What sort of business do you run and what are your needs?"/>
        </Form.Group>
        <Form.Group controlId="password" value={password} onChange={(e)=>setPassword(e.target.value)}>
            <Form.Label>Tell us a little about yourself</Form.Label>
            <Form.Control type="password"/>
        </Form.Group>
        <Button variant="primary" type="submit">
                                Sign In
                            </Button>
    </Form>
    )
}

export default SignUp;