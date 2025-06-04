export function formatAddress(userAddress: {
    streetAddress?: string;
    city?: string;
    state?: string;
    postal?: string;
    country?: string;
}): string {
    const {
        streetAddress = '',
        city = '',
        state = '',
        postal = '',
        country = '',
    } = userAddress || {};

    // Collect non-empty parts
    const parts = [
        streetAddress?.trim(),
        city?.trim(),
        state?.trim(),
        postal?.trim(),
        country?.trim()
    ].filter(part => part && part.length > 0);

    // Join the address parts with commas
    return parts.join(', ');
}
