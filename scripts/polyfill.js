if (typeof globalThis.HTMLElement === "undefined") {
  globalThis.HTMLElement = class {};
}
if (typeof globalThis.customElements === "undefined") {
  globalThis.customElements = { define() {}, get() {} };
}
if (typeof globalThis.ShadowRoot === "undefined") {
  globalThis.ShadowRoot = class {};
}
if (typeof globalThis.CSSStyleSheet === "undefined") {
  globalThis.CSSStyleSheet = class {};
}
