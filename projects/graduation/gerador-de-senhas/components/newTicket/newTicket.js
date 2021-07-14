import templateString from "./template.js";

import state from '../../state/proxy.js';

export default class CustomElementClassModule extends HTMLElement {
  shadowRoot;

  constructor() {
    super();
    const template = templateString;
    const dataMode = this.dataset.mode || "closed";
    this.shadowRoot = this.attachShadow({ mode: dataMode });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this._state = state;
  }

  connectedCallback() {
    // console.log("connectedCallback ::", this);
    this.buttonsEventsHandler();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // console.log('attributeChangedCallback ::: ', name);
    // console.log('attributeChangedCallback ::: ', oldValue);
    // console.log('attributeChangedCallback ::: ', newValue);
  }

  buttonsEventsHandler() {
    const buttons = this.shadowRoot.querySelectorAll("button");
    const showTicket = this.shadowRoot.getElementById("showTicket");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const ticket = `${button.value.charAt(0)}-${this._state.indice++}`;

        showTicket.innerHTML = `Sua senha é: <b>${ticket}</b>`;
        this._state[button.value].push(ticket);
      });
    });
  }
}
