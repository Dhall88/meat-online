import React, { useState, useEffect } from 'react';
import Square from '../components/square';

const Payment = () => {

  const [isLoad, setLoad] = useState(false);

  console.log('in payment')

useEffect(() => {
    let sqPaymentScript = document.createElement("script");
    // sandbox: https://js.squareupsandbox.com/v2/paymentform
    // production: https://js.squareup.com/v2/paymentform
    sqPaymentScript.src = "https://js.squareupsandbox.com/v2/paymentform";
    sqPaymentScript.type = "text/javascript";
    sqPaymentScript.async = false;
    sqPaymentScript.onload = () => {
      setLoad(true);
    };
    document.getElementsByTagName("head")[0].appendChild(sqPaymentScript);
  });

  const squarePayment = isLoad ? (
    <Square paymentForm={ window.SqPaymentForm }/>
) : (
   null
)

return (
<div className="App">
    <h1>Square</h1>
   {squarePayment}
</div>
);
}

export default Payment;