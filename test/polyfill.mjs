import AbortController from "abort-controller";
import Blob from "fetch-blob";
import DOMException from "domexception";
import fetch from "node-fetch";
import { Event, EventTarget } from "event-target-shim";

if (typeof AbortController === "undefined") {
  globalThis.AbortController = AbortController;
}
if (typeof EventTarget === "undefined") {
  globalThis.EventTarget = EventTarget;
  globalThis.Event = Event;
}
if (typeof Blob === "undefined") {
  globalThis.Blob = Blob;
}
globalThis.CustomEvent = class CustomEvent extends Event { }; // eslint-disable-line no-undef
globalThis.DOMException = DOMException;
globalThis.fetch = fetch;
