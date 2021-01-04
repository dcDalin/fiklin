/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useReducer, useContext } from 'react';
import { useApolloClient } from '@apollo/client';

import HasuraUserReducer from './HasuraUserReducer';
import HasuraUserContext from './HasuraUserContext';

// context
import AuthContext from '../AuthContext/AuthContext';

// types
import { PROFILE_LOADED, PROFILE_LOADING, PROFILE_ERROR } from './types';

// GraphQL
import { USER_EXISTS } from '../../GraphQL/Queries/Users';
import { AUTH_ON_CREATE } from '../../GraphQL/Mutations/Auth';

interface HasuraUserProps {
  children?: React.ReactNode;
}

interface FuncResult {
  profile: any;
  profileLoading: boolean;
  error: any;
}

const HasuraUser: React.FC = (props: HasuraUserProps) => {
  const { children } = props;

  const { user, loading }: any = useContext(AuthContext);

  const initialState: FuncResult = {
    profile: null,
    profileLoading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(HasuraUserReducer, initialState);

  const client = useApolloClient();

  const fetchProfile = async () => {
    try {
      dispatch({
        type: PROFILE_LOADING,
      });

      // Check if user profile exists in Hasura
      const { data } = await client.query({
        query: USER_EXISTS,
        variables: {
          id: user.uid,
        },
      });

      // if user profile does not exist, create a new one
      if (!data.users_by_pk) {
        await client.mutate({
          mutation: AUTH_ON_CREATE,
          variables: {
            display_name: user.displayName,
            email: user.email,
            id: user.uid,
            profile_url: user.photoURL,
            phone_number: user.phoneNumber,
          },
        });

        // reload window
        window.location.reload();
      } else {
        // user profile found
        dispatch({
          type: PROFILE_LOADED,
          payload: data.users_by_pk,
        });
      }
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: err,
      });
    }
  };

  return (
    <HasuraUserContext.Provider
      value={{
        profile: state.profile,
        profileLoading: state.profileLoading,
        error: state.error,
        fetchProfile,
      }}
    >
      {children}
    </HasuraUserContext.Provider>
  );
};

export default HasuraUser;
