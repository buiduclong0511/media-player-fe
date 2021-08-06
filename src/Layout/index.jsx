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

import { router } from "src/Routes";
import { SideBarComponent, StyledBackground } from "src/Components";
import { HeaderModule, FooterModule } from "src/Modules";

export const Layout = () => {
    return (
        <Grid>
            <Router>
                <Switch>
                    <Row noGutters>
                        <Column 
                            sizeDesktop={2}
                            sizeTablet={3}
                            size={0}
                        >
                            <SideBarComponent />
                        </Column>
                        <Column 
                            sizeDesktop={10}
                            sizeTablet={9}
                            size={12}
                        >
                            
                            <div className="main" style={{ paddingBottom: "80px" }}>
                                <StyledBackground />
                                <HeaderModule />
                                <Switch>
                                    {router.map((route, index) => <Route key={index} path={route.path} component={route.component} exact />)}
                                </Switch>
                                <FooterModule />
                            </div>
                        </Column>
                    </Row>
                </Switch>
            </Router>
        </Grid>
    );
};