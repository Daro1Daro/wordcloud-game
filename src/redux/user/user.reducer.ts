import { Reducer } from 'redux';
import { UserAction, UserActionTypes, UserState } from './user.types';

const INITIAL_STATE: UserState = {
  data: undefined,
  loading: false,
  error: undefined,
  points: 0,
};

const userReducer: Reducer<UserState, UserAction> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_START:
      return {
        ...state,
        loading: true,
      }
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: undefined,
      };
    case UserActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        data: undefined,
        loading: false,
        error: action.payload,
      };
    case UserActionTypes.SET_POINTS:
      return {
        ...state,
        points: action.payload,
      }
    case UserActionTypes.SIGN_OUT:
      return {
        ...INITIAL_STATE
      }
    default:
      return state;
  }
};

export default userReducer;
