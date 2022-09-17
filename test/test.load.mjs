import tap from "tap";
import "./polyfill.mjs";
import XMLHttpRequest from "../src/index.js";

tap.test("load xhr-shim", t => {
  t.type(XMLHttpRequest, "function");
  t.end();
});
