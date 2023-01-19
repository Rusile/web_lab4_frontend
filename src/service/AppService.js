import AuthService from "./AuthService";
import AxiosApi from "./AxiosApi";

const HITS_URI = "api/v1/hits";

const refreshHandler = (callback) => {
    return AuthService.refresh()
        .then(() => {
            return callback();
        });

};

const AppService = {

    checkHit: async (hit) => {
        const requestBody = JSON.stringify(hit);
        const config = {
            headers: {
                Authorization: `Bearer ${AuthService.getCurrentAccessToken()}`
            }
        };
        return AxiosApi.post(HITS_URI, requestBody, config)
            .then((response) => {
                if (response.status === 200) {
                    return response;
                }
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    return refreshHandler(() => AppService.checkHit(hit));
                }
                return Promise.reject(error.response)
            });

    },
    getAllHits: async () => {
        const config = {
            headers: {
                Authorization: `Bearer ${AuthService.getCurrentAccessToken()}`
            }
        };
        return AxiosApi.get(HITS_URI, config)
            .catch((error) => {
                if (error.response.status === 401) {
                    return refreshHandler(() => AppService.getAllHits());
                }
                return Promise.reject(error.response)
            })
            .then((response) => {
                return response;
            });
    },
    getAllHitsByR: async (radius) => {
        const config = {
            headers: {
                Authorization: `Bearer ${AuthService.getCurrentAccessToken()}`
            },
            params: {
                radius: radius
            }
        };
        return AxiosApi.get(`${HITS_URI}`, config)
            .catch((error) => {
                if (error.response.status === 401) {
                    return refreshHandler(() => AppService.getAllHitsByR(radius));
                }
                return Promise.reject(error.response)
            })
            .then((response) => {
                return response;
            });
    },
    deleteAllHits: async () => {
        const config = {
            headers: {
                Authorization: `Bearer ${AuthService.getCurrentAccessToken()}`
            }
        };
        return AxiosApi.delete(HITS_URI, config)
            .catch((error) => {
                if (error.response.status === 401) {
                    return refreshHandler(() => AppService.deleteAllHits());
                }
                return Promise.reject(error.response)
            })
            .then((response) => {
                return response;
            });
    }
};

export default AppService;