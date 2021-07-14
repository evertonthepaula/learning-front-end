import templateString from "./template.js";

import state from "../../state/proxy.js";

export default class CustomElementClassModule extends HTMLElement {
  static get observedAttributes() {
    return ["data-teste"];
  }
  
  shadowRoot;

  constructor() {
    super();
    const template = templateString;
    const dataMode = this.dataset.mode || "open";
    this.shadowRoot = this.attachShadow({ mode: dataMode });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this._state = state;
  }

  connectedCallback() {
    this.eventHandler();
  }

  attributeChangedCallback(name, oldValue, newValue) {}

  eventHandler() {
    const ticketNumber = this.shadowRoot.getElementById("ticketNumber");

    window.document.addEventListener(
      "StateDispatch",
      (e) => (ticketNumber.innerHTML = this._state.current)
    );
  }
}
