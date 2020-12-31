/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser: undefined,
  registerUserData: {
    user: undefined,
    fetchStatus: "idle",
    error: undefined,
  },
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerUserRequest: (state) => {
      state.registerUserData.fetchStatus = "request"
      state.registerUserData.user = undefined
    },
    registerUserSuccess: {
      reducer(state, action) {
        state.registerUserData.fetchStatus = "success"
        state.registerUserData.user = action.payload.user
      },
      prepare(user) {
        return { payload: { user } }
      },
    },
    registerUserFailure: {
      reducer(state, action) {
        state.registerUserData.fetchStatus = "failure"
        state.registerUserData.error = action.payload.error
      },
      prepare(error) {
        return { payload: { error } }
      },
    },
    registerUserIdle: (state) => {
      state.registerUserData.fetchStatus = "idle"
    },
  },
})

export const {
  registerUserRequest,
  registerUserSuccess,
  registerUserFailure,
  registerUserIdle,
} = userSlice.actions

export default userSlice.reducer
