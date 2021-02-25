const tap = require("tap");
require("./polyfill.js");
const XMLHttpRequest = require("..");

tap.test("load xhr-shim", t => {
  t.type(XMLHttpRequest, "function");
  t.end();
});