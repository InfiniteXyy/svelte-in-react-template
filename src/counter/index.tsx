import SvelteApp from "./Counter.svelte";
import linkSvelte from "react-link-svelte";
import type { CounterProps } from "./interface";

export const Counter = linkSvelte<CounterProps>(SvelteApp);
