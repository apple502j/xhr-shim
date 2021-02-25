# xhr-shim
XMLHttpRequest, reimplemented using fetch.

## Why?
- This allows code using XHR to be tested using Node, with our friend `node-fetch`.
- You can also use it inside service workers!

## Differences
Due to the nature of fetch(),
- This does not support synchronous XHR.
- This does not support `progress` event.
- This does not implement `XMLHttpRequest.upload`.
- XMLHttpRequest instance is not reusable.
- `HEADERS_RECEIVED` and `LOADING` ready states are skipped.

Because this is still XMLHttpRequest,
- This does not support omitting cookies for same-origin requests.
- There is no Promise support.
- There is no built-in Node.js support. Polyfill using `node-fetch`.

This does not support obsolete APIs such as:
- `XMLHttpRequest.onreadystatechange`
- Basic authentication in `XMLHttpRequest.open` (use Authorization header!)

Due to the nature of the main usage,
- `XMLHttpRequest.responseXML` always throws.
- `Document` cannot be used in `XMLHttpRequest.send()`.
- The default MIME type is `text/plain`.
- Instead of `ProgressEvent`, `CustomEvent` is used.

## Requirements
This shim assumes you have these ES features:

- `async` support
- `class` syntax
- `globalThis`
- `Object.assign`
- `Object.create`
- `Object.entries`
- `Promise` including `Promise.prototype.finally`
- `Symbol`
- Template literals

And these WHATWG features:

- `AbortController`
- `Blob`
- Constructible `DOMException`
- `EventTarget.prototype.addEventListener` with `once` option
- `fetch` API with `signal` support
- `setTimeout`