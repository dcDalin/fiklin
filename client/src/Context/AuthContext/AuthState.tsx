/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useReducer } from 'react';
import AuthReducer from './AuthReducer';
import AuthContext from './AuthContext';
import { AUTH_ERROR, USER_LOADED, USER_LOADING, USER_LOGGING_OUT, USER_LOGOUT } from './types';
import firebase, { auth, googleProvider } from '../../firebase.config';
import { jwtTitle } from '../../constants';

interface AuthStateProps {
  children?: React.ReactNode;
}

interface FuncResult {
  token: string | null;
  isAuthenticated: boolean | null;
  isVerified: boolean | null;
  user: any;
  loading: boolean;
  error: any;
}

const AuthState: React.FC = (props: AuthStateProps) => {
  const { children } = props;

  const initialState: FuncResult = {
    token: localStorage.getItem(jwtTitle),
    isAuthenticated: null,
    isVerified: null,
    loading: true,
    user: null,
    error: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // Logout
  const logOut = async () => {
    try {
      dispatch({ type: USER_LOGGING_OUT });
      localStorage.removeItem(jwtTitle);
      await auth.signOut();
      dispatch({ type: USER_LOGOUT });
    } catch (err) {
      dispatch({ type: USER_LOGOUT, payload: err });
    }
  };

  // Google auth
  const signUpWithGoogle = async () => {
    try {
      await firebase.auth().signInWithPopup(googleProvider);
      loadUser();
    } catch (err) {
      dispatch({
        type: AUTH_ERROR,
        payload: err,
      });
    }
  };

  // Load User
  const loadUser = () => {
    // start user loading process
    dispatch({
      type: USER_LOADING,
    });

    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken();
        const idTokenResult = await user.getIdTokenResult();
        const hasuraClaim = idTokenResult.claims['https://hasura.io/jwt/claims'];

        if (hasuraClaim) {
          localStorage.setItem(jwtTitle, token);

          dispatch({
            type: USER_LOADED,
            payload: { ...user },
          });
        } else {
          // Check if refresh is required.
          const metadataRef = firebase.database().ref('metadata/' + user.uid + '/refreshTime');

          metadataRef.on('value', async (data) => {
            if (!data.exists) return;
            // Force refresh to pick up the latest custom claims changes.
            const token = await user.getIdToken(true);
            localStorage.setItem(jwtTitle, token);

            dispatch({
              type: USER_LOADED,
              payload: { ...user },
            });
          });
        }
      } else {
        // error
        dispatch({
          type: AUTH_ERROR,
          payload: 'User not found',
        });
      }
    });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        isVerified: state.isVerified,
        loading: state.loading,
        user: state.user,
        error: state.error,
        signUpWithGoogle,
        loadUser,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
