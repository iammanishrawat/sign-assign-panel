import BaseAPI from '../../api/BaseAPI';

import type { CreateUserPayload, UpdateUserPayload, DeleteUserPayload } from './userSlice';

export const createUser = async (payload: CreateUserPayload) => {
    try {
        const response = await BaseAPI.post(`/v1/user/create`, payload)
        return response.data
    } catch (error) {
        throw error
    }
}

export const listUser = async () => {
    try {
        const response = await BaseAPI.post(`/v1/user/list`)
        return response.data
    } catch (error) {
        throw error
    }
}

export const updateUser = async (payload: UpdateUserPayload) => {
    try {
        const response = await BaseAPI.post(`/v1/user/update`, payload)
        return response.data
    } catch (error) {
        throw error
    }
}

export const deleteUser = async (payload: DeleteUserPayload) => {
    try {
        const response = await BaseAPI.post(`/v1/user/delete`, payload)
        return response.data
    } catch (error) {
        throw error
    }
}
