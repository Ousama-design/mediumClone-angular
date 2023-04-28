import { createReducer, on,Action } from '@ngrx/store';
import { authStateInterface } from '../types/authState.interface';
import { registerAction } from './actions';

const initialState: authStateInterface = {
  isSubmitting: false,
};

const authReducer = createReducer(
  initialState,
  on(registerAction, (state):authStateInterface => {
    return {
      ...state,
      //foo:1 is an error because foo is not found in the interface
      isSubmitting: true,
    };
  })
);

export function reducers(state:authStateInterface,action:Action){
    return authReducer(state,action);
}