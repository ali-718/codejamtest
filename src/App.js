import React from "react";
import { Provider } from "react-redux";
import Router from "./Router";
import store from "./redux/configureStore";

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
