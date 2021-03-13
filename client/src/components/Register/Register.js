import { joiResolver } from '@hookform/resolvers/joi';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchRegister } from '../../api/User';
import { UserContext } from '../../hooks/UserContext';
import InputForm from '../shared/Form/InputForm';
import InputPassword from '../shared/Form/InputPassword';
import Form from '../shared/Form/styles/Form';
import FormContainer from '../shared/Form/styles/FormContainer';
import FormTitle from '../shared/Form/styles/FormTitle';
import SubmitButton from '../shared/Form/styles/SubmitButton';
import registerSchema from './validations/registerSchema';

const Register = () => {
  const [user, setUser] = useContext(UserContext);
  const mutation = useMutation(async (data) => await fetchRegister(data), {
    onSuccess: async (result) => {
      if (result.status === 201) {
        setUser({
          id: result.data.user.id,
          token: result.data.authorization,
          refreshToken: result.data.refreshToken,
          picture: result.data.user.picture,
        });
        toast.success(`😄 Welcome! 😄`);
        toast.info(`Remember to verify your account 👼`);
      } else {
        toast.error(` ${result.data} 🙈 Ooops! Can you try again please? 🙈 `);
      }
    },
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: joiResolver(registerSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data) => {
    try {
      await mutation.mutateAsync(data);
    } catch (error) {
      toast.error(`${error.message} 🙈 Ooops! Connection error 🙈 `);
    }
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormTitle>Register</FormTitle>
        <InputForm
          id="emailRegister"
          name="emailRegister"
          label="Email"
          type="email"
          errorMsg={errors.emailRegister && errors.emailRegister.message}
          error={errors.emailRegister}
          placeholder="email@yopmail.com"
          reference={register}
        />
        <InputPassword
          id="password"
          name="password"
          label="Password"
          type="password"
          errorMsg={errors.password && errors.password.message}
          error={errors.password}
          reference={register}
          placeholder="Eight chars min"
        />
        <InputPassword
          id="repeat_password"
          name="repeat_password"
          label="Repeat Password"
          errorMsg={errors.repeat_password && errors.repeat_password.message}
          error={errors.repeat_password}
          type="password"
          reference={register}
          placeholder="Eight chars min"
        />

        <SubmitButton id="register">
          {mutation.isLoading ? (
            'Doing interesting things...'
          ) : (
            <>
              {mutation.data && mutation.data.status >= 400 ? (
                `Try again!`
              ) : mutation.isSuccess ? (
                <Redirect to="/search" />
              ) : (
                'Join our community!'
              )}
            </>
          )}
        </SubmitButton>
      </Form>
    </FormContainer>
  );
};

export default Register;
