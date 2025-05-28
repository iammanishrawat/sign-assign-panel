export const getUserFromLocalStorage = () => {
    try {
        // const token = localStorage.getItem('jwtTokenUser');
        // console.log(`token`, token)
        // const userDataStr = localStorage.getItem('userDataUser');
        // console.log(`userDataStr`, userDataStr)
        // const userData = userDataStr ? JSON.parse(userDataStr) : null;
        // console.log(`userData`, userData)

        const params = new URLSearchParams(window.location.search);
        const token = params.get('token');
        const userData = params.get('user');

        if (token && userData) {
            localStorage.setItem('jwtTokenUser', token);
            localStorage.setItem('userDataUser', userData);
            console.log("Token and user data stored.");
        } else {
            console.warn("Token or user data missing in URL");
        }

        return { token, userData };
    } catch (error) {
        console.error('Error reading from localStorage:', error);
        return { token: null, userData: null };
    }
};
