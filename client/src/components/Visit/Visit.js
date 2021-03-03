import InputForm from '../shared/Form/InputForm';
import FormTitle from '../shared/Form/styles/FormTitle';
import SubmitButton from '../shared/Form/styles/SubmitButton';
import VisitForm from './styles/VisitForm';
import VisitFormContainer from './styles/VisitFormContainer';

const Visit = () => (
  <VisitFormContainer>
    <VisitForm>
      <FormTitle>Visita</FormTitle>
      <InputForm id="date" name="date" type="date" error="La fecha es incorrecta" />
      <InputForm id="time" name="time" type="time" error="La hora es incorrecta" />
      <SubmitButton id="submitVisit">Pedir visita!</SubmitButton>
    </VisitForm>
  </VisitFormContainer>
);

export default Visit;
