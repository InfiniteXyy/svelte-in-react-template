import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

export function tooltip(node: HTMLElement, content: string) {
  tippy(node, { content, hideOnClick: false }).show();
}
