import { joiResolver } from '@hookform/resolvers/joi';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchLogin } from '../../api/User';
import { UserContext } from '../../hooks/UserContext';
import InputForm from '../shared/Form/InputForm';
import InputPassword from '../shared/Form/InputPassword';
import Form from '../shared/Form/styles/Form';
import FormContainer from '../shared/Form/styles/FormContainer';
import FormTitle from '../shared/Form/styles/FormTitle';
import SubmitButton from '../shared/Form/styles/SubmitButton';
import loginSchema from './validations/loginSchema';

const Login = () => {
  const [user, setUser] = useContext(UserContext);
  const mutation = useMutation((data) => fetchLogin(data));

  const { register, handleSubmit, errors } = useForm({
    resolver: joiResolver(loginSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data) => {
    try {
      const res = await mutation.mutateAsync(data);
      if (res.status === 200) {
        setUser({
          id: res.data.user.id,
          token: res.data.authorization,
          refreshToken: res.data.refreshToken,
          picture: res.data.user.picture,
        });
        toast.success(`😄 Welcome! 😄`);
      } else {
        toast.error(` ${res.data} 🙈 Ooops! Can you try again please? 🙈 `);
      }
    } catch (error) {
      toast.error(`${error.message} 🙈 Ooops! Connection error 🙈 `);
    }
  };

  return (
    <FormContainer>
      <Form method="POST" onSubmit={handleSubmit(onSubmit)}>
        <FormTitle>Login</FormTitle>
        <InputForm
          id="emailLogin"
          name="emailLogin"
          label="Email"
          type="email"
          errorMsg={errors.emailLogin && errors.emailLogin.message}
          error={errors.emailLogin}
          placeholder="email@yopmail.com"
          reference={register}
        />
        <InputPassword
          id="passwordLogin"
          name="passwordLogin"
          label="Password"
          errorMsg={errors.passwordLogin && errors.passwordLogin.message}
          error={errors.passwordLogin}
          reference={register}
          placeholder="password"
        />
        <SubmitButton id="login">
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
  );
};

export default Login;
