if (typeof AbortController === "undefined") {
  const AbortController = require("abort-controller");
  globalThis.AbortController = AbortController;
}
if (typeof EventTarget === "undefined") {
  const {EventTarget, Event} = require("event-target-shim");
  globalThis.EventTarget = EventTarget;
  globalThis.Event = Event;
}
if (typeof Blob === "undefined") {
  globalThis.Blob = require("fetch-blob");
}
globalThis.CustomEvent = class CustomEvent extends Event {}; // eslint-disable-line no-undef
globalThis.DOMException = require("domexception");
globalThis.fetch = require("node-fetch");