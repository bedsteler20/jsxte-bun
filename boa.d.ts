import { renderToHtml } from "jsxte-bun";
import Bao from "baojs";
declare module "baojs" {
  interface Context {
    sendJsx(element: JSX.Element, options?: ResponseInit): Context;
  }
}

export * from "baojs";

export default Bao;
