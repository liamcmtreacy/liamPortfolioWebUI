import { g as getContext, f as bind_props, c as pop, p as push } from "../../chunks/index.js";
import "clsx";
import { n as noop } from "../../chunks/utils.js";
import { w as writable } from "../../chunks/exports.js";
import { e as escape_html } from "../../chunks/escaping.js";
const SNAPSHOT_KEY = "sveltekit:snapshot";
const SCROLL_KEY = "sveltekit:scroll";
function create_updated_store() {
  const { set, subscribe } = writable(false);
  {
    return {
      subscribe,
      // eslint-disable-next-line @typescript-eslint/require-await
      check: async () => false
    };
  }
}
const is_legacy = noop.toString().includes("$$") || /function \w+\(\) \{\}/.test(noop.toString());
if (is_legacy) {
  ({
    data: {},
    form: null,
    error: null,
    params: {},
    route: { id: null },
    state: {},
    status: -1,
    url: new URL("https://example.com")
  });
}
function get(key, parse = JSON.parse) {
  try {
    return parse(sessionStorage[key]);
  } catch {
  }
}
get(SCROLL_KEY) ?? {};
get(SNAPSHOT_KEY) ?? {};
const stores = {
  updated: /* @__PURE__ */ create_updated_store()
};
({
  check: stores.updated.check
});
function context() {
  return getContext("__request__");
}
const page$1 = {
  get url() {
    return context().page.url;
  }
};
const page = page$1;
function _error($$payload, $$props) {
  push();
  let error = $$props["error"];
  let status = $$props["status"];
  $$payload.out += `<div class="container svelte-13q8qaz" role="alert"><h1 class="error-code svelte-13q8qaz">${escape_html(status ?? 404)}</h1> `;
  if (status === 404 || !status && error == null) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<p class="message svelte-13q8qaz">Sorry, the page <code class="svelte-13q8qaz">${escape_html(page.url.pathname)}</code> doesn’t exist.</p>`;
  } else if (error) {
    $$payload.out += "<!--[1-->";
    $$payload.out += `<p class="message svelte-13q8qaz">${escape_html(error.message)}</p>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<p class="message svelte-13q8qaz">An unknown error occurred.</p>`;
  }
  $$payload.out += `<!--]--> <a class="home-button svelte-13q8qaz" href="/">← Go back home</a></div>`;
  bind_props($$props, { error, status });
  pop();
}
export {
  _error as default
};
