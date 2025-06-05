import BaseAPI from "../../api/BaseAPI"

import type {
  CreateUserAddressPayload,
  UpdateUserAddressPayload,
  DeleteUserAddressPayload,
} from "./userAddressSlice"

export const createUserAddress = async (payload: CreateUserAddressPayload) => {
  try {
    const response = await BaseAPI.postAPICall({
      endPoint: `/v1/user-address/create`,
      payload,
    })
    return response.data
  } catch (error) {
    throw error
  }
}

export const listUserAddress = async () => {
  try {
    const response = await BaseAPI.postAPICall({
      endPoint: `/v1/user-address/list`,
    })
    return response.data
  } catch (error) {
    throw error
  }
}

export const updateUserAddress = async (payload: UpdateUserAddressPayload) => {
  try {
    const response = await BaseAPI.postAPICall({
      endPoint: `/v1/user-address/update`,
      payload,
    })
    return response.data
  } catch (error) {
    throw error
  }
}

export const deleteUserAddress = async (payload: DeleteUserAddressPayload) => {
  try {
    const response = await BaseAPI.postAPICall({
      endPoint: `/v1/user-address/delete`,
      payload,
    })
    return response.data
  } catch (error) {
    throw error
  }
}
