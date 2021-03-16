/* eslint-disable react/button-has-type */
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams, withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import fetchCreateTransaction from '../api/Transaction';
import { UserContext } from '../hooks/UserContext';

const cardStyle = {
  iconStyle: 'solid',
  style: {
    base: {
      iconColor: '#c4f0ff',
      color: '#fff',
      fontWeight: 500,
      fontFamily: 'Nunito, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': {
        color: '#fce883',
      },
      '::placeholder': {
        color: '#87bbfd',
      },
    },
    invalid: {
      iconColor: '#ffc7c7',
      color: '#ffc7ee',
    },
  },
};

const CheckoutForm = () => {
  const [user, setUser] = useContext(UserContext);
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');
  const [cardComplete, setCardComplete] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);

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

  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : '');
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    if (error) {
      elements.getElement('card').focus();
      return;
    }
    if (cardComplete) {
      setProcessing(true);
    }

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
    <SectionStyle>
      <FormStyle onSubmit={handleSubmit}>
        <FormGroup>
          <CardField
            onChange={(e) => {
              setError(e.error);
              setCardComplete(e.complete);
            }}
          />
        </FormGroup>
        {error && <ErrorMessage>{error.message}</ErrorMessage>}
        <SubmitButton processing={processing} error={error} disabled={!stripe}>
          Pay
        </SubmitButton>
      </FormStyle>
    </SectionStyle>
  );
};

export default withRouter(CheckoutForm);

const CardField = ({ onChange }) => (
  <FormRow>
    <CardElementStyle options={cardStyle} onChange={onChange} />
  </FormRow>
);

const SubmitButton = ({ processing, error, children, disabled }) => (
  <SubmitButtonStyle error type="submit" disabled={processing || disabled}>
    {processing ? 'Processing...' : children}
  </SubmitButtonStyle>
);

const ErrorMessage = ({ children }) => (
  <ErrorMessageStyle role="alert">
    <svg width="16" height="16" viewBox="0 0 17 17">
      <path
        fill="#FFF"
        d="M8.5,17 C3.80557963,17 0,13.1944204 0,8.5 C0,3.80557963 3.80557963,0 8.5,0 C13.1944204,0 17,3.80557963 17,8.5 C17,13.1944204 13.1944204,17 8.5,17 Z"
      />
      <path
        fill="#6772e5"
        d="M8.5,7.29791847 L6.12604076,4.92395924 C5.79409512,4.59201359 5.25590488,4.59201359 4.92395924,4.92395924 C4.59201359,5.25590488 4.59201359,5.79409512 4.92395924,6.12604076 L7.29791847,8.5 L4.92395924,10.8739592 C4.59201359,11.2059049 4.59201359,11.7440951 4.92395924,12.0760408 C5.25590488,12.4079864 5.79409512,12.4079864 6.12604076,12.0760408 L8.5,9.70208153 L10.8739592,12.0760408 C11.2059049,12.4079864 11.7440951,12.4079864 12.0760408,12.0760408 C12.4079864,11.7440951 12.4079864,11.2059049 12.0760408,10.8739592 L9.70208153,8.5 L12.0760408,6.12604076 C12.4079864,5.79409512 12.4079864,5.25590488 12.0760408,4.92395924 C11.7440951,4.59201359 11.2059049,4.59201359 10.8739592,4.92395924 L8.5,7.29791847 L8.5,7.29791847 Z"
      />
    </svg>
    {children}
  </ErrorMessageStyle>
);

const FormRow = styled.section`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  margin-left: 15px;
  border-top: 1px solid #819efc;
  &:first-child {
    border-top: none;
  }
`;

const ErrorMessageStyle = styled.div`
  color: #fff;
  position: absolute;
  display: flex;
  justify-content: center;
  padding: 0 15px;
  font-size: 13px;
  margin-top: 0px;
  width: 100%;
  transform: translateY(-15px);
  opacity: 0;
  animation: fade 150ms ease-out;
  animation-delay: 50ms;
  animation-fill-mode: forwards;
  will-change: opacity, transform;
  & svg {
    margin-right: 10px;
  }
`;

const SubmitButtonStyle = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  border-style: none;
  display: block;
  font-size: 16px;
  width: calc(100% - 30px);
  height: 40px;
  margin: 40px 15px 0;
  background-color: #7d1735;
  box-shadow: 0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08), inset 0 1px 0 #ffb9f6;
  border-radius: 4px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  transition: all 100ms ease-in-out;
  will-change: transform, background-color, box-shadow;
  &:active {
    background-color: #d782d9;
    box-shadow: 0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08),
      inset 0 1px 0 #e298d8;
    ${({ error }) => (error ? 'transform: translateY(15px)' : 'transform: scale(0.99)')}
  }
  ${({ error }) => error && 'transform: translateY(15px)'}
`;

const fade = styled.keyframes`
  from {
    opacity: 0;
    transform: scale3D(0.95, 0.95, 0.95);
  }
  to {
    opacity: 1;
    transform: scale3D(1, 1, 1);
  }
`;

const FormStyle = styled.form`
  animation: ${fade} 200ms ease-out;
`;

const FormGroup = styled.fieldset`
  margin: 0 15px 20px;
  padding: 0;
  border-style: none;
  background-color: #0f58aa;
  will-change: opacity, transform;
  box-shadow: 0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08), inset 0 1px 0 #829fff;
  border-radius: 4px;
`;
const SectionStyle = styled.section`
  height: 100%;
  margin: auto;
  width: clamp(20rem, 50%, 28rem);
  min-height: 4rem;
  max-height: 12rem;
  padding: 0.5rem;
  position: relative;
`;

const CardElementStyle = styled(CardElement)`
  width: 100%;
  padding: 1rem 1rem 1rem 0;
`;
