import BaseAPI from '../../api/BaseAPI';

import type { UpdateUserPayload } from './userSlice';

export const updateUser = async (payload: UpdateUserPayload) => {
    try {
        const response = await BaseAPI.post(`/v1/user/update`, payload)
        return response.data
    } catch (error) {
        throw error
    }
}
