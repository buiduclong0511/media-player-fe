import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {
    Grid,
    Row,
    Column
} from '@mycv/mycv-grid'

import { PATH_LOGIN, router } from "src/Routes";
import { SideBarComponent, StyledBackground } from "src/Components";
import { HeaderModule } from "src/Modules";
import { Login } from "src/Pages";

export const Layout = () => {
    return (
        <Grid>
            <Router>
                <Switch>
                    <Route path={PATH_LOGIN} component={Login} exact />
                    <Row noGutters>
                        <Column 
                            sizeDesktop={2}
                            sizeTablet={2}
                            size={0}
                        >
                            <SideBarComponent />
                        </Column>
                        <Column 
                            sizeDesktop={10}
                            sizeTablet={10}
                            size={12}
                        >
                            
                            <StyledBackground />
                            <HeaderModule />
                            <Switch>
                                {router.map((route, index) => <Route key={index} path={route.path} component={route.component} exact />)}
                            </Switch>
                        </Column>
                    </Row>
                </Switch>
            </Router>
        </Grid>
    );
};