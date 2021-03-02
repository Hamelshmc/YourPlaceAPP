import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { useForm } from 'react-hook-form';
import InputForm from '../shared/Form/InputForm';
import InputPassword from '../shared/Form/InputPassword';
import SubmitButton from '../shared/Form/styles/SubmitButton';

const registerSchema = Joi.object({
  emailRegister: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net', 'es', 'org', 'dev', 'io'] },
    })
    .messages({
      'string.base': `"Email" should be a type of 'text'`,
      'string.empty': `"Email" cannot be an empty field`,
      'any.required': `"Email" is a required field`,
    }),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  repeat_password: Joi.ref('password'),
});

const Register = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: joiResolver(registerSchema),
    mode: 'onChange',
  });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <form method="POST" onSubmit={handleSubmit(onSubmit)}>
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
    </form>
  );
};

export default Register;
