import AuthService from "../service/AuthService";

import {
    FETCH_CHECK_HIT_FAILURE,
    FETCH_CHECK_HIT_REQUEST,
    FETCH_CHECK_HIT_SUCCESS,
    FETCH_DELETE_ALL_HITS_FAILURE,
    FETCH_DELETE_ALL_HITS_REQUEST,
    FETCH_DELETE_ALL_HITS_SUCCESS,
    FETCH_GET_ALL_HITS_BY_R_FAILURE,
    FETCH_GET_ALL_HITS_BY_R_REQUEST,
    FETCH_GET_ALL_HITS_BY_R_SUCCESS,
    FETCH_GET_ALL_HITS_FAILURE,
    FETCH_GET_ALL_HITS_REQUEST,
    FETCH_GET_ALL_HITS_SUCCESS,
    FETCH_LOGIN_FAILURE,
    FETCH_LOGIN_REQUEST,
    FETCH_LOGIN_SUCCESS,
    FETCH_REGISTER_FAILURE,
    FETCH_REGISTER_REQUEST,
    FETCH_REGISTER_SUCCESS,
    SET_FORM_ERROR,
    SET_GRAPH_IS_LOADING,
    SET_LOGGED_IN,
    SET_LOGIN_FORM_login,
    SET_LOGIN_FORM_ERROR,
    SET_LOGIN_FORM_PASSWORD,
    SET_R,
    SET_REGISTER_FORM_login,
    SET_REGISTER_FORM_ERROR,
    SET_REGISTER_FORM_PASSWORD,
    SET_REGISTER_FORM_PASSWORD_REPEAT,
    SET_REGISTER_FORM_SUCCESS_MESSAGE,
    SET_TABLE_HITS_LIST,
    SET_TABLE_IS_LOADING,
    SET_X,
    SET_Y
} from "./actions";

const initialState = {
    authFormIsLoading: false,
    tableIsLoading: false,
    graphIsLoading: false,
    serverErrorMessage: '',
    tableHitsList: [],
    graphHitsList: [],
    currentEnteredX: 0,
    currentEnteredY: 0,
    currentEnteredR: 1,
    formErrorMessage: '',
    loginFormlogin: '',
    loginFormPassword: '',
    loginFormErrorMessage: '',
    loginFormSuccessMessage: '',
    registerFormlogin: '',
    registerFormPassword: '',
    registerFormPasswordRepeat: '',
    registerFormErrorMessage: '',
    registerFormSuccessMessage: '',
    isLoggedIn: AuthService.isLoggedIn()
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CHECK_HIT_SUCCESS: {
            return {
                ...state,
            }
        }
        case FETCH_CHECK_HIT_FAILURE: {
            return {
                ...state,
                tableIsLoading: false,
                graphIsLoading: false,
                formErrorMessage: action.payload
            }
        }
        case FETCH_CHECK_HIT_REQUEST: {
            return {
                ...state,
                tableIsLoading: true,
                graphIsLoading: true
            }
        }
        case FETCH_DELETE_ALL_HITS_SUCCESS: {
            return {
                ...state,
                tableIsLoading: false,
                graphIsLoading: false,
                tableHitsList: [],
                graphHitsList: []
            }
        }
        case FETCH_DELETE_ALL_HITS_FAILURE: {
            return {
                ...state,
                tableIsLoading: false,
                graphIsLoading: false,
                formErrorMessage: action.payload
            }
        }
        case FETCH_DELETE_ALL_HITS_REQUEST: {
            return {
                ...state,
                graphIsLoading: true,
                tableIsLoading: true
            }
        }
        case FETCH_GET_ALL_HITS_SUCCESS: {
            return {
                ...state,
                tableIsLoading: false,
                tableHitsList: action.payload.reverse()
            }
        }
        case FETCH_GET_ALL_HITS_FAILURE: {
            return {
                ...state,
                tableIsLoading: false,
                formErrorMessage: action.payload
            }
        }
        case FETCH_GET_ALL_HITS_REQUEST: {
            return {
                ...state,
                tableIsLoading: true
            }
        }
        case FETCH_GET_ALL_HITS_BY_R_SUCCESS: {
            return {
                ...state,
                graphIsLoading: false,
                graphHitsList: action.payload
            }
        }
        case FETCH_GET_ALL_HITS_BY_R_FAILURE: {
            return {
                ...state,
                graphIsLoading: false,
                formErrorMessage: action.payload
            }
        }
        case FETCH_GET_ALL_HITS_BY_R_REQUEST: {
            return {
                ...state,
                graphIsLoading: true
            }
        }
        case SET_X: {
            return {
                ...state,
                currentEnteredX: action.payload,
            }
        }
        case SET_Y: {
            return {
                ...state,
                currentEnteredY: action.payload,
            }
        }
        case SET_R: {
            return {
                ...state,
                currentEnteredR: action.payload,
            }
        }
        case SET_FORM_ERROR: {
            return {
                ...state,
                formErrorMessage: action.payload,
            }
        }
        case SET_LOGIN_FORM_PASSWORD: {
            return {
                ...state,
                loginFormPassword: action.payload,
            }
        }
        case SET_LOGIN_FORM_login: {
            return {
                ...state,
                loginFormlogin: action.payload,
            }
        }
        case FETCH_LOGIN_REQUEST: {
            return {
                ...state,
                authFormIsLoading: true,
            }
        }
        case FETCH_LOGIN_SUCCESS: {
            return {
                ...state,
                authFormIsLoading: false,
                loginFormErrorMessage: '', isLoggedIn: true
            }
        }
        case FETCH_LOGIN_FAILURE: {
            return {
                ...state,
                authFormIsLoading: false,
                loginFormErrorMessage: action.payload,
            }
        }
        case SET_REGISTER_FORM_PASSWORD: {
            return {
                ...state,
                registerFormPassword: action.payload,
            }
        }
        case SET_REGISTER_FORM_PASSWORD_REPEAT: {
            return {
                ...state,
                registerFormPasswordRepeat: action.payload,
            }
        }
        case SET_REGISTER_FORM_login: {
            return {
                ...state,
                registerFormlogin: action.payload,
            }
        }
        case FETCH_REGISTER_REQUEST: {
            return {
                ...state,
                authFormIsLoading: true,
            }
        }
        case FETCH_REGISTER_SUCCESS: {
            return {
                ...state,
                authFormIsLoading: false,
                registerFormSuccessMessage: 'The user has been successfully registered',
                registerFormErrorMessage: ''
            }
        }
        case FETCH_REGISTER_FAILURE: {
            return {
                ...state,
                authFormIsLoading: false,
                registerFormErrorMessage: action.payload,
                registerFormSuccessMessage: ''
            }
        }
        case SET_TABLE_HITS_LIST: {
            return {
                ...state,
                tableHitsList: action.payload,
            }
        }
        case SET_LOGGED_IN: {
            return {
                ...state,
                isLoggedIn: action.payload,
            }
        }
        case SET_REGISTER_FORM_ERROR: {
            return {
                ...state,
                registerFormErrorMessage: action.payload,
            }
        }
        case SET_LOGIN_FORM_ERROR: {
            return {
                ...state,
                loginFormErrorMessage: action.payload,
            }
        }
        case SET_REGISTER_FORM_SUCCESS_MESSAGE: {
            return {
                ...state,
                registerFormSuccessMessage: action.payload,
            }
        }
        case SET_TABLE_IS_LOADING: {
            return {
                ...state,
                tableIsLoading: action.payload
            }
        }
        case SET_GRAPH_IS_LOADING: {
            return {
                ...state,
                graphIsLoading: action.payload
            }
        }

        default:
            return state;
    }
}

export default reducer;