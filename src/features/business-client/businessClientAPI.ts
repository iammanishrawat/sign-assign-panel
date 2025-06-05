import BaseAPI from "../../api/BaseAPI"

import type {
  CreateBusinessClientPayload,
  UpdateBusinessClientPayload,
  DeleteBusinessClientPayload,
} from "./businessClientSlice"

export const createBusinessClient = async (payload: CreateBusinessClientPayload) => {
  try {
    const response = await BaseAPI.postAPICall({
      endPoint: `/v1/business-client/create`,
      payload,
    })
    return response.data
  } catch (error) {
    throw error
  }
}

export const listBusinessClient = async () => {
  try {
    const response = await BaseAPI.postAPICall({
      endPoint: `/v1/business-client/list`,
    })
    return response.data
  } catch (error) {
    throw error
  }
}

export const updateBusinessClient = async (payload: UpdateBusinessClientPayload) => {
  try {
    const response = await BaseAPI.postAPICall({
      endPoint: `/v1/business-client/update`,
      payload,
    })
    return response.data
  } catch (error) {
    throw error
  }
}

export const deleteBusinessClient = async (payload: DeleteBusinessClientPayload) => {
  try {
    const response = await BaseAPI.postAPICall({
      endPoint: `/v1/business-client/delete`,
      payload,
    })
    return response.data
  } catch (error) {
    throw error
  }
}
