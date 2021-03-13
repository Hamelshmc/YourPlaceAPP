import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchUserVerification } from '../api/User';
import { UserContext } from '../hooks/UserContext';

const Verification = () => {
  const [user, setUser] = useContext(UserContext);
  const location = useLocation();

  (async () => {
    const res = await fetchUserVerification(location.pathname);
    if (res.status === 201) {
      const { token, refreshToken } = res.data;
      setUser({ ...user, token, refreshToken });
    }
  })();

  return (
    <div>
      <h1>Your account has been verified!</h1>
    </div>
  );
};

export default Verification;
