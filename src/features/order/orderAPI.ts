import BaseAPI from "../../api/BaseAPI"

import type {UpdateOrderPayload} from "./orderSlice"

export const listOrder = async () => {
  try {
    const response = await BaseAPI.postAPICall({
      endPoint: `/v1/order/list`,
      payload: {
        range: {all: true},
        linkedEntities: true,
      },
    })
    return response.data
  } catch (error) {
    throw error
  }
}

export const updateOrder = async (payload: UpdateOrderPayload) => {
  try {
    const response = await BaseAPI.postAPICall({
      endPoint: `/v1/order/update`,
      payload,
    })
    return response.data
  } catch (error) {
    throw error
  }
}
