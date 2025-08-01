export function formatAddress(userAddress: {
  streetAddress?: string
  address?: string
  city?: string
  state?: string
  postal?: string
  pinCode?: string
  country?: string
}): string {
  const {
    streetAddress = "",
    address = "",
    city = "",
    state = "",
    postal = "",
    pinCode = "",
    country = "",
  } = userAddress || {}

  // Collect non-empty parts
  const parts = [
    streetAddress?.trim(),
    address?.trim(),
    city?.trim(),
    state?.trim(),
    postal?.trim(),
    pinCode?.trim(),
    country?.trim(),
  ].filter(part => part && part.length > 0)

  // Join the address parts with commas
  return parts.join(", ")
}

export function formatAddressWithName(userAddress: {
  fullName?: string
  firstName?: string
  lastName?: string
  streetAddress?: string
  address?: string
  city?: string
  state?: string
  postal?: string
  pinCode?: string
  country?: string
}): string {
  const {
    fullName = "",
    firstName = "",
    lastName = "",
    streetAddress = "",
    address = "",
    city = "",
    state = "",
    postal = "",
    pinCode = "",
    country = "",
  } = userAddress || {}

  // Determine the name
  const name = fullName?.trim() || `${firstName?.trim()} ${lastName?.trim()}`.trim()

  // Collect non-empty address parts
  const parts = [
    name,
    streetAddress?.trim(),
    address?.trim(),
    city?.trim(),
    state?.trim(),
    postal?.trim(),
    pinCode?.trim(),
    country?.trim(),
  ].filter(part => part && part.length > 0)

  // Join the parts with commas
  return parts.join(", ")
}
