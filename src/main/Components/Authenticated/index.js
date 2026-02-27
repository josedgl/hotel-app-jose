import { useState, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import useAuth from '../../Hooks/useAuth';
import LoginPage from '../../../features/Authentication/presenter/pages/Login';
import { SessionContext } from '../../Contexts/SessionContext';

const Authenticated = (props) => {
  const { children } = props;
  const { session } = useContext(SessionContext);
  const auth = useAuth();
  const location = useLocation();
  const [requestedLocation, setRequestedLocation] = useState(null);

  if (!auth.isAuthenticated ||!session.token || !session.uid) {
    if (location.pathname !== requestedLocation) {
      setRequestedLocation(location.pathname);
    }
    setTimeout(() => {
      return <LoginPage />;
    }, 1000);
  }

  if (requestedLocation && location.pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }

  return <>{children}</>;
};

Authenticated.propTypes = {
  children: PropTypes.node
};

export default Authenticated;
