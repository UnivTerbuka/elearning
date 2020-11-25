import { createReducer, on } from "@ngrx/store";
import { loginFailure, loginSuccess } from "./auth.actions";

export interface AuthState {
  token?: string;
  privatetoken?: string;
  error?: string;
}

export const initialAuthState: AuthState = {};

export const authReducer = createReducer(
  initialAuthState,
  on(loginSuccess, (state, action) => ({ ...state, ...action })),
  on(loginFailure, (state, action) => ({ ...state, ...action }))
);

export const authFeatureKey = "auth";
