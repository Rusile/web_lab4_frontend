import AxiosApi from "./AxiosApi";

const LOGIN_URI = "api/v1/auth/login";
const REGISTER_URI = "api/v1/auth/register";
const REFRESH_URI = "api/v1/auth/refresh";


const AuthService = {

    login: async (login, password) => {
        const requestBody = JSON.stringify({
            login: login,
            password: password
        });

        console.log(login)
        console.log(requestBody)

        return AxiosApi.post(LOGIN_URI, requestBody)
            .then((response) => {
                if (response.status === 200) {
                    return response.data;
                } else {
                    return Promise.reject("Invalid username or password")
                }
            })
            .then((data) => {
                localStorage.setItem("access_token", data.accessToken);
                localStorage.setItem("refresh_token", data.refreshToken);
                localStorage.setItem("login", data.login);
                return data;
            })
            .catch((error) => {
                console.log(error);
                return Promise.reject(error.response.data);
            });
    },
    register: async (login, password) => {
        const requestBody = JSON.stringify({
            login: login,
            password: password
        });
        return AxiosApi.post(REGISTER_URI, requestBody)
            .then((response) => {
                return response.status === 200;
            }).catch((error) => {
                console.log(error);
                return Promise.reject(error.response.data);
            })

    },
    refresh: async () => {
        const refreshToken = localStorage.getItem("refresh_token");

        if (refreshToken === null) {
            return Promise.reject("No refresh token");
        }

        const requestBody = JSON.stringify({
            refreshToken: refreshToken
        });

        return AxiosApi.post(REFRESH_URI, requestBody)
            .then((response) => {
                if (response.status === 200) {
                    return response.data;
                } else {
                    return Promise.reject("Failed to refresh");
                }
            })
            .then((data) => {
                localStorage.setItem("access_token", data.accessToken);
                localStorage.setItem("refresh_token", data.refreshToken);
                return data
            })
            .catch((error) => {
                console.log(error);
                return Promise.reject(error.response.data);
            })
    },
    getCurrentAccessToken: () => {
        return localStorage.getItem("access_token");
    },
    isLoggedIn: () => {
        return localStorage.getItem("login") !== null;
    }

}

export default AuthService;