import { useContext } from 'react';
import AuthContext from '../Contexts/FirebaseAuthContext';

const useAuth = () => useContext(AuthContext);

export default useAuth;
