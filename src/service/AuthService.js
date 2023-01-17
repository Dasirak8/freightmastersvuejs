// auth.js
import jwtDecode from 'jwt-decode'
//import axios from "axios";

//axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('accessToken');

const AuthService = {
    isAuthenticated() {
        try {
            const token = localStorage.getItem('accessToken');
            const decoded = jwtDecode(token);
            // check if token is expired
            if (decoded.exp < Date.now() / 1000) {
                localStorage.removeItem('userRoles');
                localStorage.removeItem('accessToken');
                return false;
            }
            return true;
        } catch (error) {
            return false;
        }
    },
};

export default AuthService;
