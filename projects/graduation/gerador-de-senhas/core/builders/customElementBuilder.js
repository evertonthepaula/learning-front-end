export default (function () {
  function define(name, elementClass) {
    _testSuport();

    if (!name) {
      console.error(new Error("customElements precisam ter um nome válido"));
      return;
    }

    if (!elementClass) {
      console.error(new Error("customElements precisam possuir uma classe"));
      return;
    }

    return window.customElements.define(name, elementClass);
  }

  function _testSuport() {
    if (!"customElements" in window) {
      console.error(new Error("Seu browser não suporta a customElements"));
      return;
    }
  }

  return {
    define: define,
  };
})();
