//import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import RoutingV from "./components/RoutingV";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <>
    <Router>
      <RoutingV />
    </Router>
    <Footer year={new Date().getFullYear()} />
  </>
);
