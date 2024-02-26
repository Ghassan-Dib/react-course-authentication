import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import Welcome from "./components/Welcome";
import Signup from "./components/auth/Signup";
import Signin from "./components/auth/Signin";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createStore } from "redux";
import reducers from "./reducers";
import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import Feature from "./components/Feature";
import Signout from "./components/auth/Signout";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(
  reducers,
  {
    auth: { authenticated: localStorage.getItem("token") },
  },
  applyMiddleware(thunk)
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" exact element={<Welcome />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/feature" element={<Feature />} />
            <Route path="/signout" element={<Signout />} />
            <Route path="/signin" element={<Signin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
