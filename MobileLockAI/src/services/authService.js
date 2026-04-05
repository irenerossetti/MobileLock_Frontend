import apiClient from "./apiClient"
const API = "http://127.0.0.1:8000/api/users/auth"

const PROFILE_ENDPOINTS = ["/users/users/me/", "/users/me/"]

export const register = async (userData) => {

  const response = await apiClient.post(`${API}/register/`,userData)

  return response.data
}

export const login = async (email, password) => {
  const response = await apiClient.post(`${API}/login/`, {
    correo_electronico: email,
    password: password
  })

  return response.data
}

export const logout = async () => {
  const refresh = localStorage.getItem("refreshToken")

  if (!refresh) {
    return { message: "Logout local" }
  }

  const response = await apiClient.post(`${API}/logout/`, { refresh })
  return response.data
}

export const getProfile = async () => {
  let lastError = null

  for (const endpoint of PROFILE_ENDPOINTS) {
    try {
      const response = await apiClient.get(endpoint)
      return response.data
    } catch (error) {
      if (error.response?.status !== 404) {
        throw error
      }

      lastError = error
    }
  }

  throw lastError
}