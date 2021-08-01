import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { HeaderComponent } from "src/Components";
import { router } from "src/Routes";

export const Layout = () => {
    return (
        <>
            <Router>
                <HeaderComponent />
                <Switch>
                    {router.map((item, index) => {
                        return (
                            <Route key={index} path={item.path} component={item.component} exact />
                        );
                    })}
                </Switch>
            </Router>
        </>
    );
};