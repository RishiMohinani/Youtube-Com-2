// src/app/store/reducers/auth.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as AuthActions from '../state/auth.actions';

export interface AuthState {
  user: any;
  error: any;
}

export const initialState: AuthState = {
  user: null,
  error: null
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state, { user }) => ({ ...state, user, error: null })),
  on(AuthActions.loginFailure, (state, { error }) => ({ ...state, user: null, error })),
  on(AuthActions.signupSuccess, (state, { user }) => ({ ...state, user, error: null })),
  on(AuthActions.signupFailure, (state, { error }) => ({ ...state, user: null, error }))
);
