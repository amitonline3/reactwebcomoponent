import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

export class ReactComponent extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement("div");
    this.attachShadow({ mode: "open" }).appendChild(mountPoint);

    const props = { ...this.attributes };
    ReactDOM.render(<App />, mountPoint);
  }
}

customElements.define("react-web-component", ReactComponent);
