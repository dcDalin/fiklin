/* eslint-disable @typescript-eslint/no-explicit-any */
import { PROFILE_LOADED, PROFILE_LOADING, PROFILE_ERROR } from './types';

interface State {
  profile: any;
  profileLoading: boolean;
  error: any;
}

const authReducer = (state: State, { type, payload }: { type: string; payload?: any }): any => {
  switch (type) {
    case PROFILE_LOADING:
      return {
        ...state,
        profile: null,
        profileLoading: true,
        error: null,
      };
    case PROFILE_LOADED:
      return {
        ...state,
        profile: payload,
        profileLoading: false,
        error: null,
      };
    case PROFILE_ERROR:
      return {
        ...state,
        profile: null,
        profileLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default authReducer;
