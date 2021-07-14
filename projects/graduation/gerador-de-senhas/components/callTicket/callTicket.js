import templateString from "./template.js";

import state from "../../state/proxy.js";

export default class CustomElementClassModule extends HTMLElement {
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
    this.buttonsEventsHandler();
  }

  buttonsEventsHandler() {
    const buttons = this.shadowRoot.querySelectorAll("button");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        switch (button.value) {
          case "1":
            this.firstRule();
            break;
          case "2":
            this.secondRule();
            break;
          case "3":
            this.secondRule();
            break;
          case "4":
            this.thirdRule();
            break;
          default:
        }
      });
    });
  }

  firstRule() {
    if (this._state.preferencial.length) {
      return (this._state.current = this._state.preferencial.shift());
    }

    if (this._state.rapido.length) {
      return (this._state.current = this._state.rapido.shift());
    }

    if (this._state.comum.length) {
      return (this._state.current = this._state.comum.shift());
    }
    return;
  }

  secondRule() {
    if (this._state.rapido.length) {
      return (this._state.current = this._state.rapido.shift());
    }

    if (this._state.preferencial.length) {
      return (this._state.current = this._state.preferencial.shift());
    }

    if (this._state.comum.length) {
      return (this._state.current = this._state.comum.shift());
    }
    return;
  }

  thirdRule() {
    if (this._state.comum.length) {
      return (this._state.current = this._state.comum.shift());
    }

    if (this._state.preferencial.length) {
      return (this._state.current = this._state.preferencial.shift());
    }

    if (this._state.rapido.length) {
      return (this._state.current = this._state.rapido.shift());
    }
    return;
  }
}
