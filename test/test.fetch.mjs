import tap from "tap";
import "./polyfill.mjs";
import XMLHttpRequest from "../src/index.js";

tap.test("fetch example.com", t => {
  t.plan(6);
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://example.com/");
  xhr.responseType = "text";
  xhr.onloadstart = () => t.pass("onloadstart");
  xhr.onload = () => {
    t.pass("onload");
    t.equal(xhr.status, 200);
    t.equal(xhr.statusText, "OK");
    t.doesNotThrow(() => xhr.response);
  };
  xhr.onloadend = () => {
    t.pass("onloadend");
    t.end();
  };
  xhr.send();
});

tap.test("abort", t => {
  t.plan(1);
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://example.com/");
  xhr.onabort = () => t.pass("aborted");
  xhr.onload = () => t.fail("not aborted");
  xhr.onloadend = () => t.end();
  xhr.send();
  xhr.abort();
});
