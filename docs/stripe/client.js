// A reference to Stripe.js initialized with your real test publishable API key.
const stripe = Stripe(
  'pk_test_51IEZpBJ20ftkdaeqexYP8vQ85DcU6fTOdlCb7aCTuSkI8i3avmxw1Aux7CnWVQffOGOnfvpMFSUY5t8BueVZ0Vag00louJ6dWB'
);

// The items the customer wants to buy
const purchase = {
  items: [{ id_booking: '7271ec1f-320a-43c1-9310-42127f795651' }],
};

const auth =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjRhOTQ5YmMxLWRkNGUtNDMxNi05YmRmLWY1YmQ2ODM5YmM4MyIsInZlcmlmaWVkIjowLCJpYXQiOjE2MTIxODQ3NDIsImV4cCI6MTYxMjE4ODM0Mn0.Y_wcFH2hvUaNk4v2HOYFg8QUpi_iT3IiJ50AxHuWeVI';

(async () => {
  // Disable the button until we have Stripe set up on the page
  document.querySelector('button').disabled = true;
  await fetch(
    'http://localhost:3000/api/v1/transactions/create-payment-intent/12869fe9-87c9-4fdf-bca6-53aabed7b973',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQ5Y2E4NTY0LTA0NzUtNDQ0ZC1hOGZkLWQ2NjVkMWNiMzBlYSIsInZlcmlmaWVkIjoxLCJpYXQiOjE2MTI4MTE2MjgsImV4cCI6MTYxMjgxNTIyOH0.3sfDZkH3Do0X4BYR4zyQ8FbeGA1NZRPrxIkT2kOS59A`,
      },
    }
  )
    .then(async function (result) {
      return await result.json();
    })
    .then(async function (data) {
      const elements = await stripe.elements();

      const style = {
        base: {
          color: '#32325d',
          fontFamily: 'Arial, sans-serif',
          fontSmoothing: 'antialiased',
          fontSize: '16px',
          '::placeholder': {
            color: '#32325d',
          },
        },
        invalid: {
          fontFamily: 'Arial, sans-serif',
          color: '#fa755a',
          iconColor: '#fa755a',
        },
      };

      const card = await elements.create('card', { style: style });
      // Stripe injects an iframe into the DOM
      card.mount('#card-element');

      card.on('change', async function (event) {
        // Disable the Pay button if there are no card details in the Element
        document.querySelector('button').disabled = event.empty;
        document.querySelector('#card-error').textContent = event.error ? event.error.message : '';
      });

      const form = document.getElementById('payment-form');
      form.addEventListener('submit', async function (event) {
        event.preventDefault();
        // Complete payment when the submit button is clicked
        await payWithCard(stripe, card, data.clientSecret);
      });
    });
})();

// Calls stripe.confirmCardPayment
// If the card requires authentication Stripe shows a pop-up modal to
// prompt the user to enter authentication details without leaving your page.
const payWithCard = async function (stripe, card, clientSecret) {
  await loading(true);
  await stripe
    .confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
      },
    })
    .then(async function (result) {
      console.log({ result });
      await createTransaction(result);
      if (result.error) {
        console.log('ERROR');
        // Show error to your customer
        // createTransaction(result.error);
        await showError(result.error.message);
      } else {
        console.log('SUCCESS');
        // The payment succeeded!
        await orderComplete(result.paymentIntent.id); // .paymentIntent.id
      }
    });
};

const createTransaction = async (paymentResult) => {
  await fetch('http://localhost:3000/api/v1/transactions/12869fe9-87c9-4fdf-bca6-53aabed7b973', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQ5Y2E4NTY0LTA0NzUtNDQ0ZC1hOGZkLWQ2NjVkMWNiMzBlYSIsInZlcmlmaWVkIjoxLCJpYXQiOjE2MTI4MTE2MjgsImV4cCI6MTYxMjgxNTIyOH0.3sfDZkH3Do0X4BYR4zyQ8FbeGA1NZRPrxIkT2kOS59A`,
    },
    body: JSON.stringify(paymentResult),
  });
};

/* ------- UI helpers ------- */

// Shows a success message when the payment is complete
const orderComplete = async function (result) {
  // paymentIntentId
  console.log(result);
  await loading(false);
  document
    .querySelector('.result-message a')
    .setAttribute('href', 'https://dashboard.stripe.com/test/payments/' + paymentIntentId);
  document.querySelector('.result-message').classList.remove('hidden');
  document.querySelector('button').disabled = true;
};

// Show the customer the error from Stripe if their card fails to charge
const showError = async function (errorMsgText) {
  await loading(false);
  const errorMsg = document.querySelector('#card-error');
  errorMsg.textContent = errorMsgText;
  setTimeout(function () {
    errorMsg.textContent = '';
  }, 4000);
};

// Show a spinner on payment submission
const loading = async function (isLoading) {
  if (isLoading) {
    // Disable the button and show a spinner
    document.querySelector('button').disabled = true;
    document.querySelector('#spinner').classList.remove('hidden');
    document.querySelector('#button-text').classList.add('hidden');
  } else {
    document.querySelector('button').disabled = false;
    document.querySelector('#spinner').classList.add('hidden');
    document.querySelector('#button-text').classList.remove('hidden');
  }
};
