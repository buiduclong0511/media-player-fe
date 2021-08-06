import axiosClient from "./axiosClient";


export const songApi = {
    getListSongs: (query) => {
        const queryParams = Object.keys(query).map((key, index) => {
            if (index === 0) {
                return `?${key}=${query[key]}`;
            } else {
                return `&${key}=${query[key]}`;
            }
        }).join("");
        const url = "/songs" + queryParams;
        return axiosClient.get(url);
    },
    incrementView: (slug) => {
        const url = "/songs/" + slug;
        return axiosClient.post(url);
    }
};