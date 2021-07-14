import customElementBuilder from "./builders/customElementBuilder.js";

export default (() => {
  function componentsBuilder(componentsList = []) {
    if (!componentsList.length) {
      console.error(
        new Error("ComponentsBuilder was called, but 'componentsList' is empty")
      );
      return;
    }

    window.addEventListener("load", () => componentsList.map(obj => _define(obj)));
  }

  function _define({ name, componentClass }) {
    return customElementBuilder.define(name, componentClass);
  }

  return {
    build: componentsBuilder,
  };
})();
