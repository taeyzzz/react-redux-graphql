import { gql } from 'graphql-request'
import graphqlRequest from '../../utils/graphql-request'

import {
  registerUserRequest,
  registerUserSuccess,
  registerUserFailure,
  registerUserIdle,
} from '../slices/user'

export const registerUser = (data) => async (dispatch) => {
  dispatch(registerUserRequest())
  try {
    const mutation = gql`
      mutation RegisterUser($username: String!, $password: String!, $name: String!){
        registerUser(username: $username, password: $password, name: $name) {
          username
          name
        }
      }
    `
    const response = await graphqlRequest(mutation, data)
    dispatch(registerUserSuccess())
  } catch (error) {
    dispatch(registerUserFailure(error))
  } finally {
    dispatch(registerUserIdle())
  }
}
