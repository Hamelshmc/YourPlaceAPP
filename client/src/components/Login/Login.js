import { joiResolver } from '@hookform/resolvers/joi';
import React from 'react';
import { useForm } from 'react-hook-form';
import { fetchLogin } from '../../api/User';
import useLocalStorage from '../../hooks/useLocalStorage';
import InputForm from '../shared/Form/InputForm';
import InputPassword from '../shared/Form/InputPassword';
import Form from '../shared/Form/styles/Form';
import FormContainer from '../shared/Form/styles/FormContainer';
import FormTitle from '../shared/Form/styles/FormTitle';
import SubmitButton from '../shared/Form/styles/SubmitButton';
import loginSchema from './validations/loginSchema';

const Login = () => {
  const [, setUser] = useLocalStorage('user', {});

  const { register, handleSubmit, errors } = useForm({
    resolver: joiResolver(loginSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data) => {
    const res = await fetchLogin(data);
    if (res.status === 200) {
      setUser({
        id: res.data.user.id,
        token: res.data.authorization,
        picture: res.data.user.picture,
      });
    }
  };

  console.log(errors);
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
        <SubmitButton id="login">Go</SubmitButton>
      </Form>
    </FormContainer>
  );
};

export default Login;
