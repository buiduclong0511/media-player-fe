import axios from "axios";
import store, { logout } from "src/Redux";

const queryString = require("query-string");

const axiosClient = axios.create({
    baseURL: "https://media-player-be.herokuapp.com/",

    headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
    },

    paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use((config) => {
    const token = store.getState().auth.accessToken;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response;
        }
        return response;
    },

    (error) => {
        // Handle errors
        if (error.response && error.response.status === 401) {
            store.dispatch(logout());
        }
        throw error;
    }
);

export default axiosClient;