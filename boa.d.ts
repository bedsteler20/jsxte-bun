import { renderToHtml } from "jsxte-bun";
import Bao from "baojs";
declare module "baojs" {
  interface Context {
    sendJsx(element: JSX.Element, options?: ResponseInit): Context;
    formData(): Promise<Record<string, string>>;
  }
}

export * from "baojs";

export default Bao;
