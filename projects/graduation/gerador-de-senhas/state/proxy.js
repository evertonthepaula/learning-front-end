const state = {
  indice: 1,
  current: "Não iniciado",
  comum: [],
  rapido: [],
  preferencial: [],
};

const changeEvent = new Event("StateDispatch", {
  bubbles: true,
  cancelable: true,
  composed: false,
});

const newState = new Proxy(state, {
  set: function (target, propKey, value) {
    target[propKey] = value;

    window.document.dispatchEvent(changeEvent);
    return true;
  },
});

export default newState;
