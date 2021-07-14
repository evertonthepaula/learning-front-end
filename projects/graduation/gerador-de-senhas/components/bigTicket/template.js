import style from "./style.js";

const template = document.createElement("template");

template.innerHTML = `
<style>
  ${style}
</style>

<div class="ticket">
  <h2 class="ticket-number" id="ticketNumber">
    <slot name="ticket"></slot>
  </h2>
</div>
`;

export default template;