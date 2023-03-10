//import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import UseReducer from "./UseReducer";

import App from "./App";
import Condrend from "./CondRend";
import UseState from "./UseState";
import DataHooks from "./DataHooks";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <>
    <App />
    <UseReducer />
    <Condrend authorized={true} />
    <DataHooks login="void-muerte" />
    <UseState />
  </>
);
