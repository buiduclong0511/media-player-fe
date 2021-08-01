import { useDispatch, useSelector } from "react-redux";
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

import { Layout } from "src/Layout";
import { LoginModalModule } from "src/Modules";
import { hideToast } from "src/Redux";
import { LoadingOverlayComponent } from "src/Components";

const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

export const App = () => {
    const toast = useSelector(state => state.toast);
    const isLoadingAuth = useSelector(state => state.auth).isLoading;
    const isLoading = isLoadingAuth;
    const dispatch = useDispatch();
    const isShowFormLogin = useSelector(state => state.form).formLogin.isShow;
    const handleHideToast = () => {
        dispatch(hideToast());
    };
    return (
        <div className="App">
            <Layout />
            {isLoading ? (
                <LoadingOverlayComponent />
            ) : <></>}
            {isShowFormLogin && (
                <LoginModalModule />
            )}
            <Snackbar anchorOrigin={{ vertical: "top", horizontal: "right" }} open={toast.open} autoHideDuration={toast.autoHideDuration} onClose={handleHideToast}>
                <Alert onClose={handleHideToast} severity={toast.type}>
                    {toast.message}
                </Alert>
            </Snackbar>
        </div>
    );
};