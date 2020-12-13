<script lang="ts">
  import type { CounterProps } from "./interface";
  import { tooltip } from "./utils";

  export let count: CounterProps["count"];
  export let onChange: CounterProps["onChange"];

  $: onChange(count);
</script>

<style>
  button {
    display: inline-block;
    background-color: orangered;
    padding: 0.5rem 2rem;
    border-radius: 4px;
    border: none;
    font-size: 20px;
    color: white;
    outline: none;
    cursor: pointer;
  }
</style>

<button on:click={() => count++} use:tooltip={`click to add count`}>
  svelte:
  {count}
</button>
