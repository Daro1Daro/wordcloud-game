import { Action, ActionCreator } from 'redux';
import { History } from 'history';

import { ThunkActionType, ThunkDispatchType } from '../store';
import { SignInStartAction, User, UserActionTypes } from './user.types';

const fakeLogin = (username: string) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = { name: username };
      resolve(user);
    }, 1000);
});

export const signIn = (username: string, history: History): ThunkActionType<void> => async (dispatch: ThunkDispatchType) => {
  dispatch(signInStart(username));
  try {
    const user = await fakeLogin(username);
    dispatch(signInSuccess(user));
    history.push('/game');
  } catch (e) {
    dispatch(signInFailure(e.message));
  }
};

export const signInStart = (username: string): SignInStartAction => ({
  type: UserActionTypes.SIGN_IN_START,
  payload: username,
});

export const signInSuccess: ActionCreator<Action> = (user: User) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure: ActionCreator<Action> = (error: string) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const setPoints: ActionCreator<Action> = (points: number) => ({
  type: UserActionTypes.SET_POINTS,
  payload: points,
});

export const signOut = () => ({
  type: UserActionTypes.SIGN_OUT,
});
