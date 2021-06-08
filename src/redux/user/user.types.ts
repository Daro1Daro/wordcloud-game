import { Action } from 'redux';

export interface User {
  name: string,
}

export enum UserActionTypes {
  SIGN_IN_START = 'SIGN_IN_START',
  SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS',
  SIGN_IN_FAILURE = 'SIGN_IN_FAILURE',
  SIGN_OUT = 'SIGN_OUT',
  SET_POINTS = 'SET_POINTS',
}

export interface UserState {
  readonly data?: User;
  readonly loading: boolean;
  readonly error?: string;
  readonly points: number;
}

export interface SignInStartAction extends Action<UserActionTypes.SIGN_IN_START> {
  payload: string,
}

export interface SignInSuccessAction extends Action<UserActionTypes.SIGN_IN_SUCCESS> {
  payload: User,
}

export interface SignInFailureAction extends Action<UserActionTypes.SIGN_IN_FAILURE> {
  payload: string,
}

export interface SetPoints extends Action<UserActionTypes.SET_POINTS> {
  payload: number,
}

export interface SignOut extends Action<UserActionTypes.SIGN_OUT> {}

export type UserAction = SignInStartAction | SignInSuccessAction | SignInFailureAction | SetPoints | SignOut;
