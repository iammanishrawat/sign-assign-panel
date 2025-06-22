export const getUserFromLocalStorage = (): string | null => {
  try {
    const params = new URLSearchParams(window.location.search)
    const tokenFromUrl = params.get("token")
    const cartItemCountFromUrl = params.get("cart-item-count")

    if (tokenFromUrl && tokenFromUrl.trim() !== "") {
      localStorage.setItem("jwtTokenUser", tokenFromUrl)
      console.log("Token from URL stored in localStorage")
    }

    if (cartItemCountFromUrl && cartItemCountFromUrl.trim() !== "") {
      localStorage.setItem(
        "cartItemCountUser",
        cartItemCountFromUrl && cartItemCountFromUrl.trim() !== ""
          ? cartItemCountFromUrl === "-"
            ? "0"
            : cartItemCountFromUrl
          : "0"
      )
      console.log("Cart item count from URL stored in localStorage", cartItemCountFromUrl)
    }

    const storedToken = localStorage.getItem("jwtTokenUser")
    return storedToken && storedToken.trim() !== "" ? storedToken : null
  } catch (error) {
    console.error("Error accessing localStorage:", error)
    return null
  }
}
