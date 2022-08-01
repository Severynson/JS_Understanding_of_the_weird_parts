(function (global) {
  "use strict";

  function SelectedElement(elementName) {
    this.elementName = elementName;
    this.element = document.querySelector(elementName);
  }

  SelectedElement.prototype.addJSXLike = function (x) {
    this.element.insertAdjacentHTML("beforeend", x);

    return this;
  };

  SelectedElement.prototype.cleanAll = function (x) {
    this.element.innerHTML = "";
  };

  global.SQuery = (elementName) => new SelectedElement(elementName);
})(window);
