// auth.js
import jwtDecode from 'jwt-decode'
import axios from 'axios'

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
    },
    async getAndStoreUserRoles(username, password, allowedRoles) {
        var userRoles = []
        const response = await axios.post('http://localhost:8081/api/auth/signin', {
            username: username,
            password: password
        })
        for (let i = 0; i < response.data.roles.length; i++) {
            userRoles[i] = response.data.roles[i]
            console.log(userRoles[i])
        }
        let commonValues = userRoles.filter(x => allowedRoles.includes(x));

        if (commonValues.length > 0) {
            return true;
        } else {
            return false;
        }
    }
};

export default AuthService;
