import {useState, useContext} from 'react'
import {Jumbotron, Container, Form, Row, Col, Button} from 'react-bootstrap'
import SignIn from '../components/signIn'
import SignUp from '../components/signUp'
import {UserContext} from '../context/userContext'
import Aside from '../components/aside';
import SortingHeader from '../components/sortingHeader';
import ProductTable from '../components/productTable';
import PaginationButtons from '../components/pagination';
import {PaginationContextProvider} from '../context/paginationContext';

const Wholesale = () => {

    const [signUp, setSignUp] = useState(false)

    const [userState, userDispatch] = useContext(UserContext)

    console.log(userState)
    return (
        <>
            {userState.loggedIn ?
            <PaginationContextProvider>
            <div className="product">
            <Container fluid>
                <Row>
                    <Col md='auto'>
                        <Aside/>
                    </Col>
                    <Col>
                        <Row>
                        <SortingHeader/>
                        </Row>
                        <Row>

                        <ProductTable/>
                        </Row>
                        <Row>

                        <PaginationButtons/>
                        </Row>
                    </Col>
                </Row>
                <Col>

                </Col>
            </Container>
            </div>
        </PaginationContextProvider>
        :
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
        }

        </>
    )
}

export default Wholesale;