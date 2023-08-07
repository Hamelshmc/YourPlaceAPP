import CloseIcon from './styles/CloseIcon';
import NotificationContainer from './styles/NotificationContainer';
import NotificationContent from './styles/NotificationContent';
import NotificationHeader from './styles/NotificationHeader';
import NotificationHelper from './styles/NotificationHelper';
import NotificationTime from './styles/NotificationTime';
import NotificationTitle from './styles/NotificationTitle';

const Notification = ({ acepted, title, time, content }) => (
  <NotificationContainer>
    <NotificationContent acepted={acepted}>
      <NotificationHeader>
        <NotificationTitle>{title}</NotificationTitle>
        <NotificationTime>{time}</NotificationTime>
        <CloseIcon>close</CloseIcon>
      </NotificationHeader>
      <div>
        <span>{content}</span>
        <NotificationHelper />
      </div>
    </NotificationContent>
  </NotificationContainer>
);

export default Notification;
