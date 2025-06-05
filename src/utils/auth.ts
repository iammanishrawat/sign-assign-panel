export const getUserFromLocalStorage = (): string | null => {
  try {
    const params = new URLSearchParams(window.location.search)
    const tokenFromUrl = params.get("token")

    if (tokenFromUrl && tokenFromUrl.trim() !== "") {
      localStorage.setItem("jwtTokenUser", tokenFromUrl)
      console.log("Token from URL stored in localStorage")
    }

    const storedToken = localStorage.getItem("jwtTokenUser")
    return storedToken && storedToken.trim() !== "" ? storedToken : null
  } catch (error) {
    console.error("Error accessing localStorage:", error)
    return null
  }
}
