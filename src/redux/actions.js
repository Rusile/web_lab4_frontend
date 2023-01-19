import AppService from "../service/AppService";
import AuthService from "../service/AuthService";

export const FETCH_CHECK_HIT_REQUEST = 'FETCH_CHECK_HIT_REQUEST';
export const FETCH_CHECK_HIT_SUCCESS = 'FETCH_CHECK_HIT_SUCCESS';
export const FETCH_CHECK_HIT_FAILURE = 'FETCH_CHECK_HIT_FAILURE';

export const fetchHitCheck = (hit) => {
    return (dispatch) => {
        dispatch(fetchCheckHitRequest());
        AppService.checkHit(hit)
            .catch((error) => {
                dispatch(fetchCheckHitFailure(error.data.message));
                return false;
            })
            .then(() => {
                dispatch(fetchCheckHitSuccess());
                dispatch(fetchGetAllHitsRequest());
                AppService.getAllHits()
                    .catch((error) => {
                        dispatch(fetchGetAllHitsFailure(error.data.message));
                        return Promise.reject(error.data.message);
                    })
                    .then((response) => {
                        dispatch(fetchGetAllHitsSuccess(response.data));
                    });
                dispatch(fetchGetAllHitsByRRequest());
                AppService.getAllHitsByR(hit.r)
                    .catch((error) => {
                        dispatch(fetchGetAllHitsByRFailure(error.data.message));
                        return Promise.reject(error.data.message);
                    })
                    .then((response) => {
                        dispatch(fetchGetAllHitsByRSuccess(response.data));
                    });
            });
    }
}

const fetchCheckHitRequest = () => {
    return {
        type: FETCH_CHECK_HIT_REQUEST,
    }
}

const fetchCheckHitSuccess = () => {
    return {
        type: FETCH_CHECK_HIT_SUCCESS,
    }
}

const fetchCheckHitFailure = (errorMessage) => {
    return {
        type: FETCH_CHECK_HIT_FAILURE, payload: errorMessage,
    }
}

export const FETCH_DELETE_ALL_HITS_REQUEST = 'FETCH_DELETE_ALL_HITS_REQUEST';
export const FETCH_DELETE_ALL_HITS_SUCCESS = 'FETCH_DELETE_ALL_HITS_SUCCESS';
export const FETCH_DELETE_ALL_HITS_FAILURE = 'FETCH_DELETE_ALL_HITS_FAILURE';

export const fetchDeleteAllHits = () => {
    return (dispatch) => {
        dispatch(fetchDeleteAllHitsRequest());
        AppService.deleteAllHits()
            .catch(error => {
                dispatch(fetchDeleteAllHitsFailure(error.data.message));
                return Promise.reject(error.data.message);
            })
            .then(() => {
                dispatch(fetchDeleteAllHitsSuccess());
            });
    }
}

const fetchDeleteAllHitsRequest = () => {
    return {
        type: FETCH_DELETE_ALL_HITS_REQUEST,
    };
}

const fetchDeleteAllHitsSuccess = () => {
    return {
        type: FETCH_DELETE_ALL_HITS_SUCCESS,
    };
}

const fetchDeleteAllHitsFailure = (errorMessage) => {
    return {
        type: FETCH_DELETE_ALL_HITS_FAILURE, payload: errorMessage,
    };
}

export const FETCH_GET_ALL_HITS_REQUEST = 'FETCH_GET_ALL_HITS_REQUEST';
export const FETCH_GET_ALL_HITS_SUCCESS = 'FETCH_GET_ALL_HITS_SUCCESS';
export const FETCH_GET_ALL_HITS_FAILURE = 'FETCH_GET_ALL_HITS_FAILURE';

export const fetchGetAllHits = () => {
    return (dispatch) => {
        dispatch(fetchGetAllHitsRequest());
        AppService.getAllHits()
            .catch(error => {
                dispatch(fetchGetAllHitsFailure(error.data.message));
                return Promise.reject(error.data.message);
            })
            .then(response => {
                return response.data;
            })
            .then((hits) => {
                dispatch(fetchGetAllHitsSuccess(hits));
            });

    }
}

const fetchGetAllHitsRequest = () => {
    return {
        type: FETCH_GET_ALL_HITS_REQUEST,
    };
}

const fetchGetAllHitsSuccess = (hits) => {
    return {
        type: FETCH_GET_ALL_HITS_SUCCESS, payload: hits,
    };
}

const fetchGetAllHitsFailure = (errorMessage) => {
    return {
        type: FETCH_GET_ALL_HITS_FAILURE, payload: errorMessage,
    };
}

export const FETCH_GET_ALL_HITS_BY_R_REQUEST = 'FETCH_GET_ALL_HITS_BY_R_REQUEST';
export const FETCH_GET_ALL_HITS_BY_R_SUCCESS = 'FETCH_GET_ALL_HITS_BY_R_SUCCESS';
export const FETCH_GET_ALL_HITS_BY_R_FAILURE = 'FETCH_GET_ALL_HITS_BY_R_FAILURE';

export const fetchGetAllHitsByR = (radius) => {
    return (dispatch) => {
        dispatch(fetchGetAllHitsByRRequest());
        AppService.getAllHitsByR(radius)
            .catch(error => {
                dispatch(fetchGetAllHitsByRFailure(error.data.message));
                return Promise.reject(error.data.message);
            })
            .then(response => {
                return response.data;
            })
            .then((hits) => {
                dispatch(fetchGetAllHitsByRSuccess(hits));
            });
    }
}

const fetchGetAllHitsByRRequest = () => {
    return {
        type: FETCH_GET_ALL_HITS_BY_R_REQUEST,
    };
}

const fetchGetAllHitsByRSuccess = (hits) => {
    return {
        type: FETCH_GET_ALL_HITS_BY_R_SUCCESS, payload: hits,
    };
}

const fetchGetAllHitsByRFailure = (errorMessage) => {
    return {
        type: FETCH_GET_ALL_HITS_BY_R_FAILURE, payload: errorMessage,
    };
}

export const SET_X = 'SET_X';

export const setX = (x) => {
    return {
        type: SET_X, payload: x,
    }
}

export const SET_Y = 'SET_Y';

export const setY = (y) => {
    return {
        type: SET_Y, payload: y,
    }
}

export const SET_R = 'SET_R';

export const setR = (r) => {
    return {
        type: SET_R, payload: r,
    }
}

export const SET_FORM_ERROR = 'SET_FORM_ERROR';

export const setFormError = (message) => {
    return {
        type: SET_FORM_ERROR, payload: message,
    }
}

export const SET_LOGIN_FORM_login = 'SET_LOGIN_FORM_LOGIN';
export const SET_LOGIN_FORM_PASSWORD = 'SET_LOGIN_FORM_PASSWORD';

export const setLoginFormlogin = (login) => {
    return {
        type: SET_LOGIN_FORM_login, payload: login,
    }
}

export const setLoginFormPassword = (password) => {
    return {
        type: SET_LOGIN_FORM_PASSWORD, payload: password,
    }
}

export const SET_LOGGED_IN = 'SET_LOGGED_IN';

export const setLoggedIn = (isLoggedIn) => {
    return {
        type: SET_LOGGED_IN, payload: isLoggedIn,
    }
}

export const FETCH_LOGIN_REQUEST = 'FETCH_LOGIN_REQUEST';
export const FETCH_LOGIN_SUCCESS = 'FETCH_LOGIN_SUCCESS';
export const FETCH_LOGIN_FAILURE = 'FETCH_LOGIN_FAILURE';

export const fetchLogin = (login, password) => {
    return (dispatch) => {
        dispatch(fetchLoginRequest());
        AuthService.login(login, password)
            .catch(error => {
                dispatch(fetchLoginFailure(error.data.message));
                return Promise.reject(error.data.message);
            })
            .then((result) => {
                if (result) {
                    dispatch(fetchLoginSuccess());
                } else {
                    dispatch(fetchLoginFailure("Wrong username or password"));
                }
            })
    }
}

const fetchLoginRequest = () => {
    return {
        type: FETCH_LOGIN_REQUEST,
    }
}

const fetchLoginSuccess = () => {
    return {
        type: FETCH_LOGIN_SUCCESS,
    }
}

const fetchLoginFailure = errorMessage => {
    return {
        type: FETCH_LOGIN_FAILURE, payload: errorMessage,
    }
}

export const SET_REGISTER_FORM_PASSWORD = 'SET_REGISTER_FORM_PASSWORD';
export const SET_REGISTER_FORM_PASSWORD_REPEAT = 'SET_REGISTER_FORM_PASSWORD_REPEAT';
export const SET_REGISTER_FORM_login = 'SET_REGISTER_FORM_login';

export const setRegisterFormPassword = (password) => {
    return {
        type: SET_REGISTER_FORM_PASSWORD, payload: password,
    }
}

export const setRegisterFormPasswordRepeat = (passwordRepeat) => {
    return {
        type: SET_REGISTER_FORM_PASSWORD_REPEAT, payload: passwordRepeat,
    }
}

export const setRegisterFormlogin = (login) => {
    return {
        type: SET_REGISTER_FORM_login, payload: login,
    }
}

export const FETCH_REGISTER_REQUEST = 'FETCH_REGISTER_REQUEST';
export const FETCH_REGISTER_SUCCESS = 'FETCH_REGISTER_SUCCESS';
export const FETCH_REGISTER_FAILURE = 'FETCH_REGISTER_FAILURE';

export const fetchRegister = (login, password) => {
    return (dispatch) => {
        dispatch(fetchRegisterRequest());
        AuthService.register(login, password)
            .catch(error => {
                dispatch(fetchRegisterFailure(error.data.message));
                return Promise.reject(error.data.message);
            })
            .then((result) => {
                if (result) {
                    dispatch(fetchRegisterSuccess());
                } else {
                    dispatch(fetchRegisterFailure("User with such username already exists"));
                }
            });
    }
}

const fetchRegisterRequest = () => {
    return {
        type: FETCH_REGISTER_REQUEST,
    }
}

const fetchRegisterSuccess = () => {
    return {
        type: FETCH_REGISTER_SUCCESS,
    }
}

const fetchRegisterFailure = errorMessage => {
    return {
        type: FETCH_REGISTER_FAILURE, payload: errorMessage,
    }
}

export const SET_TABLE_HITS_LIST = 'SET_TABLE_HITS_LIST';

export const setTableHitsList = (hitsList) => {
    return {
        type: SET_TABLE_HITS_LIST, payload: hitsList,
    }
}

export const SET_REGISTER_FORM_ERROR = 'SET_REGISTER_FORM_ERROR';

export const setRegisterFormError = (errorMessage) => {
    return {
        type: SET_REGISTER_FORM_ERROR, payload: errorMessage,
    }
}

export const SET_LOGIN_FORM_ERROR = 'SET_LOGIN_FORM_ERROR';

export const setLoginFormError = (errorMessage) => {
    return {
        type: SET_LOGIN_FORM_ERROR, payload: errorMessage,
    }
}

export const SET_REGISTER_FORM_SUCCESS_MESSAGE = 'SET_REGISTER_FORM_SUCCESS_MESSAGE';

export const setRegisterFormSuccessMessage = (successMessage) => {
    return {
        type: SET_REGISTER_FORM_SUCCESS_MESSAGE, payload: successMessage,
    }
}

export const SET_TABLE_IS_LOADING = 'SET_TABLE_IS_LOADING';

export const setTableIsLoading = (isLoading) => {
    return {
        type: SET_TABLE_IS_LOADING, payload: isLoading,
    }
}

export const SET_GRAPH_IS_LOADING = 'SET_GRAPH_IS_LOADING';

export const setGraphIsLoading = (isLoading) => {
    return {
        type: SET_GRAPH_IS_LOADING, payload: isLoading,
    }
}


