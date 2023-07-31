import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/app/app";
import { Provider } from "react-redux";
import { BrowserRouter,HashRouter  } from "react-router-dom";
import store from "./services/store";


const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <HashRouter >
            <Provider store={store}>
                <App />
            </Provider>
        </HashRouter >
    </React.StrictMode>
);