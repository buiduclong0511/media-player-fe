import axiosClient from "./axiosClient";

export const authApi = {
    login(body) {
        const url = "/auth/login";
        return axiosClient.post(url, body);
    },
    register(body) {
        const url = "/auth/register";
        return axiosClient.post(url, body);
    },
    getInfo() {
        const url = "/me";
        return axiosClient.get(url);
    },
    updateInfo(body) {
        const url = "/auth";
        return axiosClient.patch(url, body);
    }
};