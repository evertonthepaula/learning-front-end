import style from "./style.js";

const template = document.createElement("template");

template.innerHTML = `
<link rel="stylesheet" href="/assets/css/chunks/buttons.css">

<style>
  ${style}
</style>

<div class="new-ticket">
  <h3>Para Caixas:</h3>
  <p>Selecione o caixa que vai chamar a senha</p>

  <div class="new-ticket-actions">
    <button type="button" class="btn" value="1">CAIXA 1</button>
    <button type="button" class="btn" value="2">CAIXA 2</button>
    <button type="button" class="btn" value="3">CAIXA 3</button>
    <button type="button" class="btn" value="4">CAIXA 4</button>
  </div>
</div>
`;

export default template;
