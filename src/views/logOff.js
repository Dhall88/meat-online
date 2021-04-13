import {useEffect, useContext} from 'react'
import {UserContext} from '../context/userContext'
import { useHistory } from "react-router-dom";

const LogOff = () => {

    const [userState, userDispatch] = useContext(UserContext)
    const history = useHistory();

    useEffect(() => {
        fetch('/api/users/logout', {
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            }
        })
        .then(data => {
            setTimeout(()=> {

                userDispatch({
                    type: "SET_USER",
                    payload: {loggedIn: false,
                                admin: false}
                })
                history.push("/")
            },3000)
        })

  
})

    return (
        <h1>THANKS, COME AGAIN</h1>
    )
}

export default LogOff