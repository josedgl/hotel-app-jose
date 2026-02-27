import { createContext, useEffect, useReducer, useState } from 'react';
import firebase from '../Utils/firebase';

const initialAuthState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null
};

const reducer = (state, action) => {
  if (action.type === 'AUTH_STATE_CHANGED') {
    const { isAuthenticated, user } = action.payload;

    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user
    };
  }

  return state;
};

const AuthContext = createContext({
  ...initialAuthState,
  method: 'FirebaseAuth',
  login: () => Promise.resolve(),
  logout: () => Promise.resolve()
});

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialAuthState);
  const [role, setRole] = useState("agencia")

  const getRole =(item)=>{
    if(item){
      const role = item.split('@')
      const role2 = role[1].split('.com')
      setRole(role2[0])
      return role2[0]
    }
  }

  useEffect(() => firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      dispatch({
        type: 'AUTH_STATE_CHANGED',
        payload: {
          isAuthenticated: true,
          user: {
            id: user.uid,
            role: getRole(user.multiFactor.user.email),
            username: user.multiFactor.user.email,
          }
        }
      });
    } else {
      dispatch({
        type: 'AUTH_STATE_CHANGED',
        payload: {
          isAuthenticated: false,
          user: null
        }
      });
    }
  }), [dispatch]);

  const login = async(
    email,
    password
  ) => {
    
            console.log('response------', email, password)
            
    return await firebase.auth().signInWithEmailAndPassword(email, password);
  };

  const logout = () => {
    return firebase.auth().signOut();
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: 'FirebaseAuth',
        role: role,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
