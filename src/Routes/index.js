import {
    Home,
    SearchResult,
    AccountSetting
} from "src/Pages";

export const PATH_HOME = "/";
export const PATH_SEARCH_RESULT = "/search";
export const PATH_ACCOUNT_SETTING = "/account";

export const router = [
    { path: PATH_HOME, component: Home },
    { path: PATH_SEARCH_RESULT + "/:keySearch", component: SearchResult },
    { path: PATH_ACCOUNT_SETTING, component: AccountSetting },
]