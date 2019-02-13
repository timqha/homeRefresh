
import React from "react";
import { Provider } from "mobx-react/native";
import App from "./app";
import stores from './stores';

const Root = () => (
    <Provider {...stores}>
        <App />
    </Provider>
);

export default Root;