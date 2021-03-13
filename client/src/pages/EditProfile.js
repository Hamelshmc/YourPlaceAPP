/* eslint-disable complexity */
import { joiResolver } from '@hookform/resolvers/joi';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { fetchImage } from '../api/Publication';
import { fetchAuthDataPost, fetchUpdateUser } from '../api/User';
import editProfileSchema from '../components/Register/validations/editProfileSchema';
import InputForm from '../components/shared/Form/InputForm';
import InputImage from '../components/shared/Form/InputImage';
import Constraints from '../components/shared/Form/styles/Constraints';
import Form from '../components/shared/Form/styles/Form';
import FormContainer from '../components/shared/Form/styles/FormContainer';
import FormTitle from '../components/shared/Form/styles/FormTitle';
import InputLabel from '../components/shared/Form/styles/InputLabel';
import InputSection from '../components/shared/Form/styles/InputSection';
import SubmitButton from '../components/shared/Form/styles/SubmitButton';
import { UserContext } from '../hooks/UserContext';

const EditProfile = () => {
  const [user, setUser] = useContext(UserContext);

  const mutation = useMutation(
    async (mutationData) => await fetchAuthDataPost(fetchUpdateUser, user, setUser, mutationData),
    {
      onSuccess: async (result) => {
        if (result.status === 200) {
          setUser({
            id: result.data.user.id,
            token: result.data.authorization,
            refreshToken: result.data.refreshToken,
            picture: result.data.user.picture,
          });
          toast.success(`😄 ¡Your profile has been updated! 😄`);

          if (result.data.user.verify === 0) {
            toast.info(`Remember to verify your account 👼`);
          }
        } else {
          toast.error(` ${result.data} 🙈 Ooops! Can you try again please? 🙈 `);
        }
      },
    }
  );

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

  const handleFileInput = async (fileInput) => {
    const image = {
      data: [],
    };
    for (let i = 0; i < fileInput.length; i += 1) {
      image.data.push(fileToDataUri(fileInput[i]));
    }
    const newImages = await Promise.all(image.data);
    image.data = newImages;
    const res = await fetchImage(image);
    return res.data;
  };

  const checkImages = async (images) => {
    let pictures;
    if (images[0]) {
      if (images[1]) {
        pictures = await handleFileInput([images[0], images[1]]);
      } else {
        pictures = await handleFileInput([images[0]]);
      }
    } else if (images[1]) {
      pictures = await handleFileInput([images[1]]);
    } else {
      pictures = false;
    }
    return pictures ? pictures.map((item) => item.url) : pictures;
  };

  const onSubmit = async (submitData) => {
    try {
      const { picture, background, borndate, bio, ...restSubmitData } = submitData;
      const newBornDate = borndate.toISOString().split('T')[0];
      const images = [picture[0], background[0]];
      const { fullname, dni, email, telephone, ...rest } = restSubmitData;
      const { street, city, zipcode } = rest;
      const pictures = await checkImages(images);
      const userInfo = {
        fullname,
        dni,
        bio,
        email,
        telephone,
        borndate: newBornDate,
        picture: pictures[0] ? pictures[0] : '/assets/User.svg',
        background: pictures[1] ? pictures[1] : '/assets/UserBackground.jpg',
      };
      const userAddress = { street, city, country: 'Spain', zipcode };
      await mutation.mutateAsync({ userInfo, userAddress });
    } catch (mutationEerror) {
      toast.error(` ${mutationEerror.message} 🙈 ¡Ooops! ¿Can you try again please? 🙈 `);
    }
  };

  return (
    <EditProfileContainer>
      <FormContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormTitle>Edit your profile</FormTitle>
          <InputForm
            id="fullname"
            name="fullname"
            label="Fullname"
            type="text"
            errorMsg={errors.fullname && errors.fullname.message}
            error={errors.fullname}
            reference={register}
            placeholder="Jhon Doe"
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
            type="text"
            name="street"
            id="street"
            label="Street"
            errorMsg={errors.street && errors.street.message}
            error={errors.street}
            placeholder="Calle Juan Florez"
            reference={register}
          />
          <InputForm
            id="city"
            name="city"
            label="City"
            type="text"
            errorMsg={errors.city && errors.city.message}
            error={errors.city}
            placeholder="A Coruña"
            reference={register}
          />
          <InputForm
            id="zipcode"
            name="zipcode"
            label="Zip Code"
            type="number"
            errorMsg={errors.zipcode && errors.zipcode.message}
            error={errors.zipcode}
            placeholder="15011"
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

          <TextAreaForm
            id="bio"
            name="bio"
            label="Biography"
            errorMsg={errors.bio && errors.bio.message}
            error={errors.bio}
            placeholder="Write here what you want 🏄‍♂️"
            reference={register}
          />

          <ImageSection>
            <InputImage
              id="picture"
              name="picture"
              label="Upload here your profile picture"
              reference={register}
              errorMsg={errors.picture && errors.picture.message}
              error={errors.picture}
              required={false}
            />
          </ImageSection>
          <InputImage
            id="background"
            name="background"
            label="Upload here your profile background"
            reference={register}
            errorMsg={errors.background && errors.background.message}
            required={false}
            error={errors.background}
          />
          <SubmitButton id="editProfile">
            {mutation.isLoading && 'Doing interesting things...'}
            {mutation.isError && 'An error occurred'}
          </SubmitButton>
        </Form>
      </FormContainer>
    </EditProfileContainer>
  );
};

const EditProfileContainer = styled.section`
  grid-row: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: clamp(15rem, 50%, 28rem);
`;

const ImageSection = styled.section`
  display: flex;
  margin: 0.5rem 0;
`;
function TextAreaForm({ id, name, label, type, errorMsg, error, placeholder, reference }) {
  return (
    <div>
      <InputSection>
        <TextArea
          id={id}
          name={name}
          type={type}
          aria-describedby={name}
          autoComplete="off"
          placeholder={placeholder}
          ref={reference}
          focus={error}
        />
        <InputLabel htmlFor={id}>{label}</InputLabel>
      </InputSection>
      <Constraints id={id}>{errorMsg}</Constraints>
    </div>
  );
}
const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  font-size: ${({ theme }) => theme.fontSizes.default};
  border: 0.1rem solid
    ${({ focus, theme }) => (focus ? theme.colors.error : theme.colors.primary.default)};
  border-radius: 0.5rem;
  outline: none;
  padding: 1.25rem;
  background: none;
  transition: 0.3s;
  resize: none;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.boxShadow.default};

  &:focus {
    background: none;
    border: 0.16rem solid
      ${({ focus, theme }) => (focus ? theme.colors.alert : theme.colors.success)};
  }

  &:focus + label {
    color: ${({ focus, theme }) => (focus ? theme.colors.alert : theme.colors.success)};
  }

  & + label {
    color: ${({ focus, theme }) => (focus ? theme.colors.error : theme.colors.primary.default)};
  }

  &:not(:placeholder-shown):not(:focus) {
    border: 0.16rem solid
      ${({ focus, theme }) => (focus ? theme.colors.error : theme.colors.success)};
  }

  &:not(:placeholder-shown):not(:focus) + label {
    color: ${({ focus, theme }) => (focus ? theme.colors.error : theme.colors.success)};
  }

  &::placeholder {
    color: ${({ theme }) => theme.fontColor.emphasis};
    font-size: ${({ theme }) => theme.fontSizes.smaller};
  }
`;

export default EditProfile;
