import {
    Home,
    SearchResult
} from "src/Pages";

export const PATH_HOME = "/";
export const PATH_SEARCH_RESULT = "/search";

export const router = [
    { path: PATH_HOME, component: Home },
    { path: PATH_SEARCH_RESULT + "/:keySearch", component: SearchResult },
]