import BaseAPI from '../../api/BaseAPI';

import type { ListProductCategoryPayload } from './productCategorySlice';

export const listProductCategory = async (payload: ListProductCategoryPayload) => {
    try {
        const response = await BaseAPI.post(`/v1/product-category/list`, payload)
        return response.data
    } catch (error) {
        throw error
    }
}
