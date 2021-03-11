/* eslint-disable complexity */
import { joiResolver } from '@hookform/resolvers/joi';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { Redirect } from 'react-router-dom';
import { fetchImage } from '../../api/Publication';
import { fetchRegister } from '../../api/User';
import { UserContext } from '../../hooks/UserContext';
import editProfileSchema from '../Register/validations/editProfileSchema';
import InputForm from '../shared/Form/InputForm';
import InputImage from '../shared/Form/InputImage';
import Form from '../shared/Form/styles/Form';
import FormContainer from '../shared/Form/styles/FormContainer';
import FormTitle from '../shared/Form/styles/FormTitle';
import InputSection from '../shared/Form/styles/InputSection';
import SubmitButton from '../shared/Form/styles/SubmitButton';

const EditProfile = () => {
  const [response, setResponse] = useState(false);
  const [previewSource, setPreviewSource] = useState([]);
  const [user, setUser] = useContext(UserContext);
  const mutation = useMutation((data) => fetchRegister(data));

  const { register, handleSubmit, errors } = useForm({
    resolver: joiResolver(editProfileSchema),
    mode: 'onChange',
  });

  const fileToDataUri = (image) =>
    new Promise((res) => {
      const reader = new FileReader();
      const { type, name, size } = image;
      reader.addEventListener('load', () => {
        res({
          base64: reader.result,
          name,
          type,
          size,
        });
      });
      reader.readAsDataURL(image);
    });

  const handleFileInput = async (data) => {
    setResponse(true);
    const image = {
      data: [],
    };
    for (let i = 0; i < data.files.length; i += 1) {
      image.data.push(fileToDataUri(data.files[i]));
    }
    const newImages = await Promise.all(image.data);
    image.data = newImages;
    const res = await fetchImage(image);
    return res.data;
  };

  const onSubmit = async (data) => {
    console.log({ data });
    /* const { files, availability_date, ...datos } = data;
    const { street, door, floor, city, zipcode, ...rest } = datos;
    const publication_address = { street, door, floor, city, zipcode, country: 'Spain' };
    let pictures = await handleFileInput(data);
    pictures = pictures.map((item) => item.url);
    setPreviewSource(pictures);
    const publication = { availability_date, ...rest };
    const body = { publication, publication_address, pictures };
    try {
      await mutation.mutateAsync(body);
    } catch (error) {
      console.error('[ERROR]', error);
      if (mutation.isError) {
        console.log(`An error occurred: ${mutation.error.message}`);
      }
    } finally {
      setResponse(false);
    } */
  };
  /* const onSubmit = async (data) => {
    console.log({ data });
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
  }; */

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormTitle>Edit your profile</FormTitle>
        <InputForm
          id="fullName"
          name="fullName"
          label="Fullname"
          type="text"
          errorMsg={errors.fullName && errors.fullName.message}
          error={errors.fullName}
          reference={register}
          placeholder="Jhon Doe"
        />
        <InputForm
          id="email"
          name="email"
          label="Email"
          type="email"
          errorMsg={errors.email && errors.email.message}
          error={errors.email}
          placeholder="email@yopmail.com"
          reference={register}
        />
        <InputForm
          id="dni"
          name="dni"
          label="DNI"
          type="text"
          errorMsg={errors.dni && errors.dni.message}
          error={errors.dni}
          placeholder="12345678Z"
          reference={register}
        />
        <InputForm
          id="borndate"
          name="borndate"
          label="Borndate"
          type="date"
          errorMsg={errors.borndate && errors.borndate.message}
          error={errors.borndate}
          placeholder="1990-01-01"
          reference={register}
        />
        <InputForm
          id="telephone"
          name="telephone"
          label="Telephone"
          type="tel"
          errorMsg={errors.telephone && errors.telephone.message}
          error={errors.telephone}
          placeholder="666202020"
          reference={register}
        />
        <InputSection>
          <InputImage
            id="picture"
            name="picture"
            label="Upload here your profile picture"
            reference={register}
            previewSource={previewSource}
            errorMsg={errors.picture && errors.picture.message}
            error={errors.picture}
          />
        </InputSection>
        <InputSection>
          <InputImage
            id="background"
            name="background"
            label="Upload here your profile background"
            reference={register}
            previewSource={previewSource}
            errorMsg={errors.background && errors.background.message}
            error={errors.background}
          />
        </InputSection>

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

export default EditProfile;
