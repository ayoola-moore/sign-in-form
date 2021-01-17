import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ErrorBoundary from "./errorBoundary";
import ErrorMessage from "./errorBoundary/RenderError";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <ErrorBoundary
    render={(e: Error) => (
      <ErrorMessage
        error={e}
        errorInfo={"something went wrong. Please contact admin"}
      />
    )}
  >
    <App />
  </ErrorBoundary>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
