import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import userReducer from './slices/user'

const createStore = () => {
  const reducer = {
    user: userReducer
  }

  const middleware = [...getDefaultMiddleware()]
  const store = configureStore({
    reducer,
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
  })
  return store
}

export default createStore
