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
  const mutation = useMutation((data) => fetchRegister(data));

  const { register, handleSubmit, errors } = useForm({
    resolver: joiResolver(registerSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data) => {
    try {
      const res = await mutation.mutateAsync(data);
      if (res.status === 201) {
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
