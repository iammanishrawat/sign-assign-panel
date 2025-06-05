import axios, {type AxiosError} from "axios"

const BASE_API_PATH = import.meta.env.VITE_BASE_PATH_API as string

const axiosInstance = axios.create({
  baseURL: BASE_API_PATH,
})

// Request interceptor to attach token
axiosInstance.interceptors.request.use(config => {
  const token = localStorage.getItem("jwtTokenUser")
  if (token) {
    config.headers = config.headers || {}
    config.headers["Authorization"] = `Bearer ${token}`
  }
  return config
})

// POST API Call Function
interface PostAPICallParams {
  endPoint: string
  payload?: any
  callbackBeforeSend?: () => void
  callbackComplete?: () => void
  callbackSuccess?: (response: any) => void
}

async function postAPICall({
  endPoint,
  payload,
  callbackBeforeSend,
  callbackComplete,
  callbackSuccess,
}: PostAPICallParams): Promise<void | any> {
  const isFormData = payload instanceof FormData

  try {
    if (callbackBeforeSend) callbackBeforeSend()

    const response = await axiosInstance.post(endPoint, payload ?? {}, {
      headers: {
        ...(isFormData ? {"Content-Type": "multipart/form-data"} : {}),
      },
    })

    if (callbackSuccess) {
      callbackSuccess(response.data)
    } else {
      return response.data
    }
  } catch (error: any) {
    await handlePostError(error, {
      endPoint,
      payload,
      callbackBeforeSend,
      callbackComplete,
      callbackSuccess,
    })
  } finally {
    if (callbackComplete) callbackComplete()
  }
}

async function handlePostError(
  error: AxiosError | any,
  originalParams: PostAPICallParams
): Promise<void> {
  let errorMessage = "Something went wrong"

  const responseData = error?.response?.data

  if (responseData?.message) {
    errorMessage = responseData.message
  }

  // Handle JWT Expiry
  if (["jwt expired"].includes(errorMessage)) {
    try {
      await refreshToken()
      // Retry original request
      await postAPICall(originalParams)
      return
    } catch (refreshError) {
      // toastr.error('Session expired! Please login again.');
      alert("Session expired! Please login again.")
      onClickLogout()
      return
    }
  }

  // Unauthorized
  if (responseData?.status === 401) {
    // toastr.error(errorMessage);
    alert(errorMessage)
    onClickLogout()
    return
  }

  // toastr.error(errorMessage);
  alert(errorMessage)
}

// Refresh Token Logic
async function refreshToken(): Promise<string> {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axiosInstance.post("/auth/refresh-token")
      if (response.data?.success) {
        const newToken = response.data.data.jwtToken
        localStorage.setItem("jwtTokenUser", newToken)
        resolve(newToken)
      } else {
        reject("Token refresh failed")
      }
    } catch (err) {
      reject("Token refresh failed")
    }
  })
}

// Logout Function
export function onClickLogout(): void {
  localStorage.removeItem("jwtTokenUser")
  setTimeout(
    () => (window.location.href = `${import.meta.env.VITE_BASE_PATH_WEB as string}?event=logout`),
    1500
  )
}

export default {
  postAPICall,
  onClickLogout,
  refreshToken,
}
