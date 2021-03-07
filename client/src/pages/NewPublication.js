/* eslint-disable camelcase */
/* eslint-disable complexity */
/* eslint-disable no-magic-numbers */
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import styled from 'styled-components';
import { fetchImage, fetchPublication } from '../api/Publication';
import InputCheckBox from '../components/shared/Form/InputCheckBox';
import InputForm from '../components/shared/Form/InputForm';
import InputImage from '../components/shared/Form/InputImage';
import InputRadio from '../components/shared/Form/InputRadio';
import Form from '../components/shared/Form/styles/Form';
import FormContainer from '../components/shared/Form/styles/FormContainer';
import FormTitle from '../components/shared/Form/styles/FormTitle';
import SubmitButton from '../components/shared/Form/styles/SubmitButton';
import SearchMap from '../components/shared/MapBox/SearchMap';
import { UserContext } from '../hooks/UserContext';

function NewPublication() {
  const [user, setUser] = useContext(UserContext);
  const [previewSource, setPreviewSource] = useState([]);
  const mutation = useMutation((newTodo) => fetchPublication(newTodo, user));

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
    const image = {
      data: [],
    };
    for (let i = 0; i < data.files.length; i += 1) {
      image.data.push(fileToDataUri(data.files[i]));
    }
    const newImages = await Promise.all(image.data);
    image.data = newImages;
    const res = await fetchImage(image);
    setPreviewSource(res.data);
    return res.data;
  };

  const { register, handleSubmit, errors } = useForm({
    mode: 'onChange',
  });

  const onSubmit = async (data) => {
    const { files, ...datos } = data;
    const { street, door, floor, city, zipcode, ...rest } = datos;
    const publication_address = { street, door, floor, city, zipcode, country: 'Spain' };
    let pictures = await handleFileInput(data);
    pictures = pictures.map((item) => item.url);
    const publication = { ...rest };
    const body = { publication, publication_address, pictures };
    mutation.mutate(body);
  };

  return (
    <SectionNewPublication>
      <FormContainer>
        <Form method="POST" onSubmit={handleSubmit(onSubmit)}>
          <FormTitle>Publication</FormTitle>
          <SearchMap reference={register} />
          <InputWrapper>
            <InputForm
              id="floor"
              name="floor"
              label="Floor"
              type="text"
              errorMsg={errors.emailRegister && errors.emailRegister.message}
              error={errors.emailRegister}
              placeholder="4A o 4 izq"
              reference={register}
            />
            <InputForm
              id="city"
              name="city"
              label="City"
              type="text"
              errorMsg={errors.emailRegister && errors.emailRegister.message}
              error={errors.emailRegister}
              placeholder="Lugo"
              reference={register}
            />
          </InputWrapper>
          <InputWrapper>
            <InputForm
              id="door"
              name="door"
              label="Door"
              type="text"
              errorMsg={errors.emailRegister && errors.emailRegister.message}
              error={errors.emailRegister}
              placeholder="A o Left"
              reference={register}
            />
            <InputForm
              id="zipcode"
              name="zipcode"
              label="Zip Code"
              type="number"
              errorMsg={errors.emailRegister && errors.emailRegister.message}
              error={errors.emailRegister}
              placeholder="15009"
              reference={register}
            />
          </InputWrapper>
          <InputWrapper>
            <InputForm
              id="area"
              name="area"
              label="Area"
              type="number"
              errorMsg={errors.emailRegister && errors.emailRegister.message}
              error={errors.emailRegister}
              placeholder="120"
              reference={register}
            />
            <InputForm
              id="rooms"
              name="rooms"
              label="Rooms"
              type="number"
              errorMsg={errors.emailRegister && errors.emailRegister.message}
              error={errors.emailRegister}
              placeholder="2"
              reference={register}
            />
          </InputWrapper>
          <InputWrapper>
            <InputForm
              id="bathrooms"
              name="bathrooms"
              label="Bathrooms"
              type="number"
              errorMsg={errors.emailRegister && errors.emailRegister.message}
              error={errors.emailRegister}
              placeholder="3"
              reference={register}
            />
          </InputWrapper>
          <InputWrapper>
            <InputForm
              id="deposit"
              name="deposit"
              label="Deposit"
              type="number"
              errorMsg={errors.emailRegister && errors.emailRegister.message}
              error={errors.emailRegister}
              placeholder="500"
              reference={register}
            />
            <InputForm
              id="price"
              name="price"
              label="Price"
              type="number"
              errorMsg={errors.emailRegister && errors.emailRegister.message}
              error={errors.emailRegister}
              placeholder="300"
              reference={register}
            />
          </InputWrapper>
          <InputRadioWrapper>
            <InputRadio
              idFirst="gas"
              idSecond="electrical"
              name="heating"
              labelFirst="Gas"
              labelSecond="Electrical"
              errorMsg={errors.emailRegister && errors.emailRegister.message}
              error={errors.emailRegister}
              reference={register}
            />
            <InputRadio
              idFirst="flat"
              idSecond="house"
              name="publication_type"
              labelFirst="Flat"
              labelSecond="House"
              errorMsg={errors.emailRegister && errors.emailRegister.message}
              error={errors.emailRegister}
              reference={register}
            />
          </InputRadioWrapper>
          <InputCheckBoxWrapper>
            <InputCheckBox
              id="garage"
              name="garage"
              label="Garage"
              errorMsg={errors.emailRegister && errors.emailRegister.message}
              error={errors.emailRegister}
              reference={register}
            />
            <InputCheckBox
              id="elevator"
              name="elevator"
              label="Elevator"
              errorMsg={errors.emailRegister && errors.emailRegister.message}
              error={errors.emailRegister}
              reference={register}
            />
            <InputCheckBox
              id="furnished"
              name="furnished"
              label="Furnished"
              errorMsg={errors.emailRegister && errors.emailRegister.message}
              error={errors.emailRegister}
              reference={register}
            />
            <InputCheckBox
              id="parking"
              name="parking"
              label="Parking"
              errorMsg={errors.emailRegister && errors.emailRegister.message}
              error={errors.emailRegister}
              reference={register}
            />

            <InputCheckBox
              id="garden"
              name="garden"
              label="Garden"
              errorMsg={errors.emailRegister && errors.emailRegister.message}
              error={errors.emailRegister}
              reference={register}
            />
            <InputCheckBox
              id="pool"
              name="pool"
              label="Pool"
              errorMsg={errors.emailRegister && errors.emailRegister.message}
              error={errors.emailRegister}
              reference={register}
            />
            <InputCheckBox
              id="terrace"
              name="terrace"
              label="Terrace"
              errorMsg={errors.emailRegister && errors.emailRegister.message}
              error={errors.emailRegister}
              reference={register}
            />
            <InputCheckBox
              id="storage_room"
              name="storage_room"
              label="Storage Room"
              errorMsg={errors.emailRegister && errors.emailRegister.message}
              error={errors.emailRegister}
              reference={register}
            />
          </InputCheckBoxWrapper>
          <InputImage reference={register} previewSource={previewSource} />
          <SubmitButton id="register">
            {mutation.isLoading ? (
              'Adding todo...'
            ) : (
              <>
                {mutation.isError ? `An error occurred: ${mutation.error.message}` : null}
                {mutation.isSuccess ? `Todo added!` : 'Create New Publication'}
              </>
            )}
          </SubmitButton>
        </Form>
      </FormContainer>
    </SectionNewPublication>
  );
}

const SectionNewPublication = styled.section`
  grid-row: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: clamp(15rem, 50%, 35rem);
`;

const InputCheckBoxWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  section {
    min-width: 50%;
    flex: 1 1 auto;
  }
`;

const InputRadioWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: baseline;
  section {
    min-width: 50%;
    flex: 1 1 auto;
  }
  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;

const InputWrapper = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  border: none;
  margin: 0;
  padding: 0;
  section {
    padding: 0.1rem;
  }
`;

export default NewPublication;
