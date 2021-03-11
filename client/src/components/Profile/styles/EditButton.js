import styled from 'styled-components';
import SubmitButton from '../../shared/Form/styles/SubmitButton';

const EditButton = ({ children, switchProfile, setSwitchProfile }) => {
  const handleSwitchProfile = (e) =>
    switchProfile ? setSwitchProfile(false) : setSwitchProfile(true);

  return <EditProfileButton onClick={handleSwitchProfile}>{children}</EditProfileButton>;
};

const EditProfileButton = styled(SubmitButton)`
  display: flex;
  justify-content: flex-end;
`;

export default EditButton;
