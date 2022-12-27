import { configureStore, ThunkAction, Action, Reducer } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import createReducer from './rootReducer'
import { nativeMiddleware } from 'webview-state-bridge'

const middlewares: any = [
  nativeMiddleware
]

const store = configureStore({
  reducer: createReducer({}),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false
    }).concat(middlewares)
  // devTools: process.env.NODE_ENV === 'development'
})

const asyncReducers: any = {}

export const injectReducer = (key: string, reducer: Reducer) => {
  if (asyncReducers[key]) {
    return false
  }
  asyncReducers[key] = reducer
  store.replaceReducer(createReducer(asyncReducers))
  return store
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
