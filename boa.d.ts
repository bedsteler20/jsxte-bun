import { renderToHtml } from "jsxte-bun";
import Bao from "baojs";
declare module "baojs" {
  interface Context {
    sendJsx(element: JSX.Element, options?: ResponseInit): Context;
    formData(): Promise<FormData>;
  }
}

export interface FormData {
  /**
   * Appends a new value onto an existing key inside a FormData object, or adds
   * the key if it does not already exist.
   *
   * @param name The name of the field whose data is contained in value.
   * @param value The field's value.
   * @param fileName The filename reported to the server.
   *
   * ## Upload a file
   * ```ts
   * const formData = new FormData();
   * formData.append("username", "abc123");
   * formData.append("avatar", Bun.file("avatar.png"), "avatar.png");
   * await fetch("https://example.com", { method: "POST", body: formData });
   * ```
   */
  append(name: string, value: string | Blob, fileName?: string): void;
  delete(name: string): void;
  get(name: string): FormDataEntryValue | null;
  getAll(name: string): FormDataEntryValue[];
  has(name: string): boolean;
  set(name: string, value: string | Blob, fileName?: string): void;
  keys(): IterableIterator<string>;
  values(): IterableIterator<FormDataEntryValue>;
  entries(): IterableIterator<[string, FormDataEntryValue]>;
  [Symbol.iterator](): IterableIterator<[string, FormDataEntryValue]>;
  forEach(
    callback: (value: FormDataEntryValue, key: string, parent: this) => void,
    thisArg?: any,
  ): void;
}

export * from "baojs";

export default Bao;
