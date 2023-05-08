import React from "react";
import ReactDOM from "react-dom";
import ReactWebComponent from "react-web-component";
import App from "./App";

const CustomElement = ReactWebComponent.create(<App />, "react-component");

ReactDOM.render(<App />, document.getElementById("root"));
