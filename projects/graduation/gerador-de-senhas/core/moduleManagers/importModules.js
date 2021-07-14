export default (() => {
  function inject(obj) {
    if (!this._moduleValidation(obj)) {
      return;
    }

    const tag = document.createElement("script");

    tag.type = "module";
    tag.src = obj.path;
    tag.setAttribute("async", "async");
    tag.onload = obj.callbackSuccess;
    tag.onerror = obj.callbackError;
    document.head.appendChild(tag);

    return tag;
  }

  function _moduleValidation(obj) {
    if (RegExp("(.js)$").test(obj.path)) {
      return;
    }

    console.error(
      new TypeError(
        '[Import Component] - Is expected an ".js Module" file, you must be check your path definition'
      )
    );

    return false;
  }

  return {
    inject: inject,
    map: map,
  };
})();
