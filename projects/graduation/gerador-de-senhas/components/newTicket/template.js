import style from "./style.js";

const template = document.createElement("template");

template.innerHTML = `
<link rel="stylesheet" href="/assets/css/chunks/buttons.css">

<style>
  ${style}
</style>

<div class="new-ticket">
  <h3>Para clientes:</h3>
  <p>Escolha o seu tipo de atendimento</p>

  <div class="new-ticket-actions">
    <button type="button" class="btn" value="comum">Comum</button>
    <button type="button" class="btn" value="rapido">Rápido</button>
    <button type="button" class="btn" value="preferencial">Prioritário</button>
  </div>

  <p id="showTicket" class="new-ticket-show"></p>
</div>
`;

export default template;
