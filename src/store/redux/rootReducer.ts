import { Action, combineReducers, ReducersMapObject } from '@reduxjs/toolkit';
import { RootState } from './index';
import user from './user/userSlice';

const createReducer = (asyncReducers: ReducersMapObject): any => (state: RootState, action: Action) => {
  const combinedReducer = combineReducers({
    user,
    ...asyncReducers
  });

  /*
  Reset the redux store when user logged out
   */
  if (action.type === 'user/userLoggedOut') {
    // state = undefined;
  }

  return combinedReducer(state, action);
};

export default createReducer;
