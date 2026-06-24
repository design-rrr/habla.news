if (typeof globalThis.HTMLElement === "undefined") {
  globalThis.HTMLElement = class {};
}
if (typeof globalThis.customElements === "undefined") {
  globalThis.customElements = { define() {}, get() {}, };
}
if (typeof globalThis.document === "undefined") {
  globalThis.document = { createElement() { return {}; } };
}
if (typeof globalThis.navigator === "undefined") {
  globalThis.navigator = { userAgent: "Node" };
}
