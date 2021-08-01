import { useSelector } from "react-redux";

import { Layout } from "src/Layout";
import { LoginModalModule } from "src/Modules";

export const App = () => {
    const isShowFormLogin = useSelector(state => state.form).formLogin.isShow;
    return (
        <div className="App">
            <Layout />
            {isShowFormLogin && (
                <LoginModalModule />
            )}
        </div>
    );
};