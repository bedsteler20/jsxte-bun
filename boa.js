import { Context } from "baojs";
import { renderToHtml } from "jsxte-bun";

Context.prototype.sendJsx = function (element, options) {
  options = options || {};
  options.headers = options.headers || {};
  options.headers["Content-Type"] = "text/html; charset=utf-8";
  return this.sendRaw(new Response(renderToHtml(element), options));
};
export * from "baojs";
