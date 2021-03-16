/* eslint-disable react/button-has-type */
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams, withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import fetchCreateTransaction from '../api/Transaction';
import { UserContext } from '../hooks/UserContext';

const CheckoutForm = () => {
  const [user, setUser] = useContext(UserContext);
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    window
      .fetch(`/api/v1/transactions/create-payment-intent/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }, []);

  const cardStyle = {
    style: {
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
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    },
  };

  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : '');
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(async (result) => {
        await fetchCreateTransaction(id, result, user.token);
        if (result.error) {
          toast.error(`🙈 ${result.error} ¡Ooops! Error with the transaction`);
        } else {
          toast.success(`¡Payment successful! 🎉🎉🎇`);
          history.push('/profile');
        }
      });
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
      <button disabled={processing || disabled || succeeded} id="submit">
        <span id="button-text">
          {processing ? <div className="spinner" id="spinner" /> : 'Pay now'}
        </span>
      </button>
    </form>
  );
};

export default withRouter(CheckoutForm);
