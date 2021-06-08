import { createStore, applyMiddleware, Action } from 'redux';
import { persistStore } from 'redux-persist';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './root-reducer';
import { UserState } from './user/user.types';

const middlewares = [thunk];
if (process.env.NODE_ENV === 'development') {
  // @ts-ignore
  middlewares.push(logger);
}

export interface RootState {
  user: UserState;
}

export type ThunkActionType<R> = ThunkAction<R, RootState, null, Action>;
export type ThunkDispatchType = ThunkDispatch<RootState, null, Action>;

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// @ts-ignore
export const persistor = persistStore(store);
