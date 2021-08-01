import axiosClient from "./axiosClient";

export const authApi = {
    login(body) {
        const url = "/auth/login";
        return axiosClient.post(url, body);
    },
    register(body) {
        const url = "/auth/register";
        return axiosClient.post(url, body);
    }
};