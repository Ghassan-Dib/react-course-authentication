import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import Welcome from "./components/Welcome";
import Signup from "./components/auth/Signup";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createStore } from "redux";
import reducers from "./reducers";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(reducers, {});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" exact element={<Welcome />} />
            <Route path="/signup" exact element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
