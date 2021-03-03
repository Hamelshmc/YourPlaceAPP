import { joiResolver } from '@hookform/resolvers/joi';
import { useForm } from 'react-hook-form';
import { fetchRegister } from '../../api/User';
import useLocalStorage from '../../hooks/useLocalStorage';
import InputForm from '../shared/Form/InputForm';
import InputPassword from '../shared/Form/InputPassword';
import Form from '../shared/Form/styles/Form';
import FormContainer from '../shared/Form/styles/FormContainer';
import FormTitle from '../shared/Form/styles/FormTitle';
import SubmitButton from '../shared/Form/styles/SubmitButton';
import registerSchema from './validations/registerSchema';

const Register = () => {
  const [, setUser] = useLocalStorage('user', {});

  const { register, handleSubmit, errors } = useForm({
    resolver: joiResolver(registerSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data) => {
    const res = await fetchRegister(data);
    if (res.status === 201) {
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

        <SubmitButton id="register">Join our community</SubmitButton>
      </Form>
    </FormContainer>
  );
};

export default Register;
