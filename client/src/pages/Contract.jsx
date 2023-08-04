import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchContract from '../api/Contract';
import { UserContext } from '../hooks/UserContext';

const Contract = () => {
  const [user, setUser] = useContext(UserContext);
  const { id } = useParams();
  const [contract, setContract] = useState('');

  useEffect(
    (async) => {
      const res = fetchContract(id, user.token).then((res) => {
        if (res.status === 200) {
          setContract(res.data);
        }
      });
    },
    [id, user.token]
  );

  return contract ? (
    <iframe src={contract} height="100%" width="100%" title="pdf" />
  ) : (
    'CANT LOAD CONTENT'
  );
};

export default Contract;
