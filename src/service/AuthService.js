// auth.js
import jwtDecode from 'jwt-decode'

const AuthService = {
    isAuthenticated() {
        try {
            const token = localStorage.getItem('token');
            const decoded = jwtDecode(token);
            // check if token is expired
            if (decoded.exp < Date.now() / 1000) {
                return false;
            }
            return true;
        } catch (error) {
            return false;
        }
    }
};

export default AuthService;
