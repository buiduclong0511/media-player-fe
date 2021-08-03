import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { Layout } from "src/Layout";


export const App = () => {
    return (
        <div className="App">
            <Layout />
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                draggable
            />
        </div>
    );
};