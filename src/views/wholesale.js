import {useState} from 'react'
import {Jumbotron, Container, Form, Row, Col, Button} from 'react-bootstrap'
import SignIn from '../components/signIn'
import SignUp from '../components/signUp'

const Wholesale = () => {

    const [signUp, setSignUp] = useState(false)
    return (
        <>
            {/* <h2>As Fresh as Fresh Gets</h2>
            <p>If you are looking for a bulk order please contact Matt McCascal at ###-###-####</p> */}
            <Container>
                <Row>
                    <Col>
                        {signUp ? 
                        <SignUp/>
                        :
                        <SignIn/>
                        }
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button onClick={()=>setSignUp(!signUp)}>
                            {signUp?
                                "Go to Sign In"
                                :
                                "Sign up for a new account"
                            }
                        </Button>
                    </Col>
                </Row>
        </Container>

        </>
    )
}

export default Wholesale;