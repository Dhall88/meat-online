import {useState} from 'react'
import {Form, Button} from 'react-bootstrap'

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const onSubmit = async() => {
        console.log(email)
        console.log(pass)
        const response = await fetch(`http://localhost:3000/api/users/login`, {
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
            body: JSON.stringify({username: email, password: pass}) // body data type must match "Content-Type" header
          });
          console.log(response.json()); // parses JSON response into native JavaScript objects

    }
    
    return (
        <Form onSubmit={onSubmit}>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" value = {email} onChange = {(e)=>setEmail(e.target.value)} placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value = {pass} onChange = {(e)=>setPass(e.target.value)} placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit" onSubmit={e=>console.log()}>
            Submit
        </Button>
</Form>
    )
}

export default SignIn;