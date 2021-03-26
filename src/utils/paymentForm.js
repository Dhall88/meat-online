const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

const idempotencyKey = uuidv4();
console.log(idempotencyKey)

const config = {
    // Initialize the payment form elements
    
    //TODO: Replace with your sandbox application ID
    applicationId: process.env.REACT_APP_ID,
    // applicationId: 'sandbox-sq0idb--69yZknzwLpvVaSUVUOLMg',
    inputClass: 'sq-input',
    autoBuild: false,
    // Customize the CSS for SqPaymentForm iframe elements
    inputStyles: [{
        fontSize: '25px',
        color: '#ffffff',
        lineHeight: '24px',
        padding: '16px',
        placeholderColor: '#f2f2f2',
        backgroundColor: 'transparent',
    }],
    // Initialize the credit card placeholders
    cardNumber: {
        elementId: 'sq-card-number',
        placeholder: 'Card Number'
    },
    cvv: {
        elementId: 'sq-cvv',
        placeholder: 'CVV'
    },
    expirationDate: {
        elementId: 'sq-expiration-date',
        placeholder: 'MM/YY'
    },
    postalCode: {
        elementId: 'sq-postal-code',
        placeholder: 'Postal'
    },
    // SqPaymentForm callback functions
    callbacks: {
        /*
        * callback function: cardNonceResponseReceived
        * Triggered when: SqPaymentForm completes a card nonce request
        */
        cardNonceResponseReceived: function (errors, nonce, cardData) {
        if (errors) {
            // Log errors from nonce generation to the browser developer console.
            console.error('Encountered errors:');
            errors.forEach(function (error) {
                console.error('  ' + error.message);
            });
            alert('Encountered errors, check browser developer console for more details');
            return;
        }
           fetch('http://localhost:3000/process-payment', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                nonce: nonce,
                idempotencyKey: idempotencyKey,
                locationId: process.env.REACT_APP_LOCATION_ID
              })
            })
            .catch(err => {
              alert('Network error: ' + err);
            })
            .then(response => {
              if (!response.ok) {
                return response.text().then(errorInfo => Promise.reject(errorInfo));
              }
              return response.text();
            })
            .then(data => {
              console.log(JSON.stringify(data));
              alert('Payment complete successfully!\nCheck browser developer console form more details');
            })
            .catch(err => {
              console.error(err);
              alert('Payment failed to complete!\nCheck browser developer console form more details');
            });
        }
      }
}



export default config;