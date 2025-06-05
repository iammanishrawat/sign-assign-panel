import BaseAPI from "../../api/BaseAPI"

import type {ChangePasswordPayload} from "./authSlice"

export const getMe = async () => {
  try {
    const response = await BaseAPI.postAPICall({
      endPoint: `/v1/auth/get-me`,
    })
    return response.data
  } catch (error) {
    throw error
  }
}

export const changePassword = async (payload: ChangePasswordPayload) => {
  try {
    const response = await BaseAPI.postAPICall({
      endPoint: `/v1/auth/change-password`,
      payload,
    })
    return response.data
  } catch (error) {
    throw error
  }
}
