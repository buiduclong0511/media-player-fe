import { Layout } from "src/Layout";
import { LoginModalModule } from "src/Modules";

export const App = () => {
    return (
        <div className="App">
            <Layout />
            <LoginModalModule />
        </div>
    );
};