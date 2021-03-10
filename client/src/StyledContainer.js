import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';

const StyledContainer = styled(ToastContainer).attrs({
  position: 'top-center',
  autoClose: 3000,
  hideProgressBar: false,
  newestOnTop: true,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: false,
  draggable: true,
  pauseOnHover: false,
  limit: 1,
})`
  .Toastify__toast-container {
    box-shadow: ${({ theme }) => theme.boxShadow.default};
    backdrop-filter: blur(25px);
  }
  .Toastify__toast {
    background-color: rgba(15, 88, 170, 0.8);
  }
  .Toastify__toast--error {
    background-color: rgba(231, 76, 60, 0.8);
  }
  .Toastify__toast--warning {
  }
  .Toastify__toast--success {
    background-color: rgba(38, 170, 94, 0.8);
  }
  .Toastify__toast-body {
    font-size: ${({ theme }) => theme.fontSizes.small};
    margin: auto auto;
    color: #fff;
    font-weight: bold;
  }
  .Toastify__progress-bar {
  }
`;

export default StyledContainer;
