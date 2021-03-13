import { joiResolver } from '@hookform/resolvers/joi';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { Redirect, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import fetchAddBooking from '../api/Booking';
import bookingSchema from '../components/Booking/validations/bookingSchema';
import InputForm from '../components/shared/Form/InputForm';
import Form from '../components/shared/Form/styles/Form';
import FormContainer from '../components/shared/Form/styles/FormContainer';
import FormTitle from '../components/shared/Form/styles/FormTitle';
import SubmitButton from '../components/shared/Form/styles/SubmitButton';
import { UserContext } from '../hooks/UserContext';

const BookingForm = () => {
  const [user, setUser] = useContext(UserContext);
  const { id } = useParams();

  const mutation = useMutation(async (data) => await fetchAddBooking(data, user.token), {
    onSuccess: (result) => {
      console.log({ result });
      /* if (result.status === 200) {
        setUser({
          id: result.data.user.id,
          token: result.data.authorization,
          refreshToken: result.data.refreshToken,
          picture: result.data.user.picture,
        });
        toast.success(`😄 Welcome! 😄`);
        if (result.data.user.verified === 0) {
          toast.info(`Remember to verify your account 👼`);
        }
      } else {
        toast.error(` ${result.data} 🙈 Ooops! Can you try again please? 🙈 `);
      } */
    },
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: joiResolver(bookingSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data) => {
    try {
      const { startDate } = data;
      const date = new Date(startDate).toISOString().split('T')[0];
      await mutation.mutateAsync({ ...data, startDate: date, idPublication: id });
    } catch (error) {
      toast.error(`${error.message} 🙈 Ooops! Connection error 🙈 `);
    }
  };

  return (
    <BookingContainer>
      <FormContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormTitle>New booking</FormTitle>
          <InputForm
            id="startDate"
            name="startDate"
            label="Start date"
            type="date"
            errorMsg={errors.startDate && errors.startDate.message}
            error={errors.startDate}
            placeholder="1990-01-01"
            reference={register}
          />
          <InputForm
            id="months"
            name="months"
            label="Months"
            type="number"
            errorMsg={errors.months && errors.months.message}
            error={errors.months}
            placeholder="Number of months"
            reference={register}
          />
          <SubmitButton id="addBooking">
            {mutation.isLoading ? (
              'Doing interesting things...'
            ) : (
              <>
                {mutation.data && mutation.data.status >= 400 ? (
                  `Try again!`
                ) : mutation.isSuccess ? (
                  <Redirect to="/search" />
                ) : (
                  'Go!'
                )}
              </>
            )}
          </SubmitButton>
        </Form>
      </FormContainer>
    </BookingContainer>
  );
};

const BookingContainer = styled.section`
  grid-row: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 auto;
  width: clamp(15.5rem, 50%, 25rem);
`;

export default BookingForm;
