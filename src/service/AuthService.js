// auth.js
import jwtDecode from 'jwt-decode'

const AuthService = {
    isAuthenticated() {
        try {
            const token = localStorage.getItem('accessToken');
            const decoded = jwtDecode(token);
            // check if token is expired
            return decoded.exp >= Date.now() / 1000;

        } catch (error) {
            return false;
        }
    }
};

export default AuthService;
