import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import { HeaderModule } from "src/Modules";
import { router } from "src/Routes";
import styled from "styled-components";

export const Layout = () => {
    return (
        <>
            <HeaderModule />
            <div className="grid wide">
                <Container>
                    <Router>
                        <Switch>
                            {router.map((item, index) => {
                                return (
                                    <Route key={index} path={item.path} component={item.component} exact />
                                );
                            })}
                        </Switch>
                    </Router>
                </Container>
            </div>
        </>
    );
};

const Container = styled.div`
    padding-top: 70px;
`;