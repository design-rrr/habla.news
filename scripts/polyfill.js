const { parseHTML } = require("linkedom");

if (typeof globalThis.document === "undefined") {
  const { document, window, HTMLElement, customElements, ShadowRoot } =
    parseHTML("<!DOCTYPE html><html><body></body></html>");
  globalThis.document = document;
  globalThis.window = window;
  globalThis.HTMLElement = HTMLElement;
  globalThis.customElements = customElements;
  globalThis.ShadowRoot = ShadowRoot;

  const CSSStyleSheet = class {
    constructor() {
      this.cssRules = [];
    }
    replace(text) {
      return Promise.resolve();
    }
  };
  globalThis.CSSStyleSheet = CSSStyleSheet;
}
