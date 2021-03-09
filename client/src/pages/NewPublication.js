/* eslint-disable no-nested-ternary */
/* eslint-disable camelcase */
/* eslint-disable complexity */
/* eslint-disable no-magic-numbers */
import { joiResolver } from '@hookform/resolvers/joi';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import styled from 'styled-components';
import { fetchImage, fetchPublication } from '../api/Publication';
import { fetchAuthDataPost } from '../api/User';
import InputCheckBox from '../components/shared/Form/InputCheckBox';
import InputForm from '../components/shared/Form/InputForm';
import InputImage from '../components/shared/Form/InputImage';
import InputRadio from '../components/shared/Form/InputRadio';
import Form from '../components/shared/Form/styles/Form';
import FormContainer from '../components/shared/Form/styles/FormContainer';
import FormTitle from '../components/shared/Form/styles/FormTitle';
import SubmitButton from '../components/shared/Form/styles/SubmitButton';
import { UserContext } from '../hooks/UserContext';
import publicationSchema from '../Validations/Publication';

function NewPublication() {
  const [user, setUser] = useContext(UserContext);
  const [previewSource, setPreviewSource] = useState([]);
  const [response, setResponse] = useState(false);
  const mutation = useMutation((newTodo) =>
    fetchAuthDataPost(fetchPublication, user, setUser, newTodo)
  );
  const { register, handleSubmit, errors } = useForm({
    resolver: joiResolver(publicationSchema),
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
    const { files, availability_date, ...datos } = data;
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
    }
  };

  return (
    <SectionNewPublication>
      <FormContainer>
        <Form method="POST" onSubmit={handleSubmit(onSubmit)}>
          <FormTitle>Publication</FormTitle>
          <InputForm
            type="text"
            name="street"
            id="street"
            label="Street"
            errorMsg={errors.street && errors.street.message}
            error={errors.street}
            placeholder="Calle Juan Florez"
            reference={register}
          />
          <InputWrapper>
            <InputForm
              id="floor"
              name="floor"
              label="Floor"
              type="text"
              errorMsg={errors.floor && errors.floor.message}
              error={errors.floor}
              placeholder="4A o 4 izq"
              reference={register}
            />
            <InputForm
              id="city"
              name="city"
              label="City"
              type="text"
              errorMsg={errors.city && errors.city.message}
              error={errors.city}
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
              errorMsg={errors.door && errors.door.message}
              error={errors.door}
              placeholder="A o Left"
              reference={register}
            />
            <InputForm
              id="zipcode"
              name="zipcode"
              label="Zip Code"
              type="number"
              errorMsg={errors.zipcode && errors.zipcode.message}
              error={errors.zipcode}
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
              errorMsg={errors.area && errors.area.message}
              error={errors.area}
              placeholder="120"
              reference={register}
            />
            <InputForm
              id="rooms"
              name="rooms"
              label="Rooms"
              type="number"
              errorMsg={errors.rooms && errors.rooms.message}
              error={errors.rooms}
              placeholder="2"
              reference={register}
            />
          </InputWrapper>
          <InputForm
            id="bathrooms"
            name="bathrooms"
            label="Bathrooms"
            type="number"
            errorMsg={errors.bathrooms && errors.bathrooms.message}
            error={errors.bathrooms}
            placeholder="3"
            reference={register}
          />
          <InputForm
            id="availability_date"
            name="availability_date"
            label="Availability Date"
            type="date"
            errorMsg={errors.availability_date && errors.availability_date.message}
            error={errors.availability_date}
            reference={register}
          />
          <InputWrapper>
            <InputForm
              id="deposit"
              name="deposit"
              label="Deposit"
              type="number"
              errorMsg={errors.deposit && errors.deposit.message}
              error={errors.deposit}
              placeholder="500"
              reference={register}
            />
            <InputForm
              id="price"
              name="price"
              label="Price"
              type="number"
              errorMsg={errors.price && errors.price.message}
              error={errors.price}
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
              errorMsg={errors.heating && errors.heating.message}
              error={errors.heating}
              reference={register}
            />
            <InputRadio
              idFirst="flat"
              idSecond="house"
              name="publication_type"
              labelFirst="Flat"
              labelSecond="House"
              errorMsg={errors.publication_type && errors.publication_type.message}
              error={errors.publication_type}
              reference={register}
            />
          </InputRadioWrapper>

          <InputWrapper>
            <InputCheckBox
              id="garage"
              name="garage"
              label="Garage"
              errorMsg={errors.garage && errors.garage.message}
              error={errors.garage}
              reference={register}
            />
            <InputCheckBox
              id="elevator"
              name="elevator"
              label="Elevator"
              errorMsg={errors.elevator && errors.elevator.message}
              error={errors.elevator}
              reference={register}
            />
          </InputWrapper>
          <InputWrapper>
            <InputCheckBox
              id="furnished"
              name="furnished"
              label="Furnished"
              errorMsg={errors.furnished && errors.furnished.message}
              error={errors.furnished}
              reference={register}
            />
            <InputCheckBox
              id="parking"
              name="parking"
              label="Parking"
              errorMsg={errors.parking && errors.parking.message}
              error={errors.parking}
              reference={register}
            />
          </InputWrapper>
          <InputWrapper>
            <InputCheckBox
              id="garden"
              name="garden"
              label="Garden"
              errorMsg={errors.garden && errors.garden.message}
              error={errors.garden}
              reference={register}
            />
            <InputCheckBox
              id="pool"
              name="pool"
              label="Pool"
              errorMsg={errors.pool && errors.pool.message}
              error={errors.pool}
              reference={register}
            />
          </InputWrapper>
          <InputWrapper>
            <InputCheckBox
              id="terrace"
              name="terrace"
              label="Terrace"
              errorMsg={errors.terrace && errors.terrace.message}
              error={errors.terrace}
              reference={register}
            />
            <InputCheckBox
              id="storage_room"
              name="storage_room"
              label="Storage Room"
              errorMsg={errors.storage_room && errors.storage_room.message}
              error={errors.storage_room}
              reference={register}
            />
          </InputWrapper>
          <InputImage
            reference={register}
            previewSource={previewSource}
            errorMsg={errors.files && errors.files.message}
            error={errors.files}
          />
          <SubmitButton id="register">
            {response || mutation.isLoading ? (
              'Adding Publication...'
            ) : (
              <>
                {mutation.data && mutation.data.status > 400
                  ? `error occurred ${mutation.data.data}`
                  : mutation.isSuccess
                  ? `Publication added!`
                  : 'Create New Publication'}
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
  width: clamp(15rem, 50%, 28rem);
`;

const InputRadioWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: baseline;
  section {
    min-width: 48%;
    flex: 1 1 auto;
  }
  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;

const InputWrapper = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
  border: none;
  margin: 0;
  padding: 0;
  max-width: 30rem;
  section {
    min-width: 30%;
    padding-left: 0.1rem;
  }
`;

export default NewPublication;
