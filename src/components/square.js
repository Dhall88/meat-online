import React from 'react';
import config from '../utils/paymentForm';
import {Button} from 'react-bootstrap'

const Square = ({ paymentForm }) => {

    paymentForm = new paymentForm(config);
    paymentForm.build();
    const requestCardNonce = (event) =>{
        event.preventDefault();
        paymentForm.requestCardNonce();
    }

    return (
        <div id="form-container">
            <div id="card-container">Enter Card Info Below
                <div className="flex-third">
                    <div id="sq-card-number"></div>
                    <div className="third" id="sq-expiration-date"></div>
                </div>
                <div className="flex-third">
                    <div className="third" id="sq-cvv"></div>
                    <div className="third" id="sq-postal-code"></div>
                </div>
            </div>
            <Button id="sq-creditcard" className="button-credit-card" onClick={requestCardNonce}> Pay £ 1.00</Button>
        </div>
      
    )
}

export default Square;