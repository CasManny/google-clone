import { render } from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ResultContextProvider } from "./context/resultContextProvider";

render(
  <Router>
    <ResultContextProvider>
      <App />
    </ResultContextProvider>
  </Router>,
  document.getElementById("root")
);
