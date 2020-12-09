/* eslint-disable @typescript-eslint/no-explicit-any */
import { USER_LOADED, AUTH_ERROR, USER_LOGOUT, USER_LOADING, USER_LOGGING_OUT } from './types';

interface State {
  isAuthenticated: boolean;
  user: any;
  loading: boolean;
  error: any;
}

const authReducer = (state: State, { type, payload }: { type: string; payload?: any }): any => {
  switch (type) {
    case USER_LOADING:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        loading: true,
        error: null,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        user: payload,
        loading: false,
        error: null,
      };

    case AUTH_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        loading: false,
        error: payload,
      };
    case USER_LOGGING_OUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        loading: true,
        error: null,
      };
    case USER_LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default authReducer;
