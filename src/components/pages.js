import React from "react";
import { Link } from "react-router-dom";
import { Header } from "./App";
/*
import App from "./App";
import Condrend from "./CondRend";
import UseState from "./UseState";
import DataHooks from "./DataHooks";
import UseReducer from "./UseReducer";
    <App />
    <UseReducer />
    <Condrend authorized={true} />
    <DataHooks login="void-muerte" />
    <UseState />
*/
export function Home() {
  return (
    <div>
      <Header prog="React" />
      <nav>
        <Link to="about">About</Link>
        <Link to="products">Products</Link>
        <Link to="contact">Contact</Link>
      </nav>
    </div>
  );
}
export function About() {
  return (
    <div>
      <h1>[About Us]</h1>
      <Link to="home">Home</Link>
    </div>
  );
}
export function Products() {
  return (
    <div>
      <h1>[Products]</h1>
      <Link to="home">Home</Link>
    </div>
  );
}
export function Contact() {
  return (
    <div>
      <h1>[Contact]</h1>
      <Link to="home">Home</Link>
    </div>
  );
}
export function Error404() {
  return (
    <div>
      <h1>Page does not exist</h1>
    </div>
  );
}
