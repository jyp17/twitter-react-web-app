import React from "react";
import HelloReduxComponent from "./hello-redux-component";
import hello from "./reducers/hello";
import todos from "./reducers/todos-reducer";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import Todos from "./todos-component";

const store = configureStore({
    reducer: {hello, todos}
});

const ReduxExamples = () => {
    return(
        <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
                <Todos />
                <HelloReduxComponent/>
            </div>
        </Provider>
    );
};
export default ReduxExamples;