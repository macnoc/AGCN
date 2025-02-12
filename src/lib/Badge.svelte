<script>
  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";
  import Icon from "../lib/components/Icon.svelte";

  const dispatch = createEventDispatcher();

  export let badgePosition;

  onMount(async () => {
    switch (badgePosition) {
      case "top-right":
        badgePosition = "top-right";
        break;

      case "bottom-right":
        badgePosition = "bottom-right";
        break;

      case "top-left":
        badgePosition = "top-left";
        break;

      case "bottom-left":
        badgePosition = "bottom-left";
        break;

      default:
        badgePosition = "top-right";
        break;
    }
  });

  const openModalHandler = () => {
    dispatch("openModal");
  };
</script>

<!-- svelte-ignore a11y-invalid-attribute -->
<a href="#" class="badge {badgePosition}" on:click|preventDefault={openModalHandler} role="button" aria-label="Open modal" title="Open Dialog">
  <Icon color="var(--badge-color)" />
</a>

<style>
  .badge {
    position: fixed;
    border: 1px solid var(--badge-border-color);
    background-color: var(--badge-bg-color);
    color: var(--badge-color);
    padding: 0.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    z-index: 1000;
  }
  .badge.top-right {
    right: -10px;
    top: var(--badge-offset);
    border-top-left-radius: 0.7rem;
    border-bottom-left-radius: 0.7rem;
    padding-right: calc(0.7rem + 6px);
  }
  .badge.bottom-right {
    right: -10px;
    bottom: var(--badge-offset);
    border-top-left-radius: 0.7rem;
    border-bottom-left-radius: 0.7rem;
    padding-right: calc(0.7rem + 6px);
  }
  .badge.top-left {
    left: -10px;
    top: var(--badge-offset);
    border-top-right-radius: 0.7rem;
    border-bottom-right-radius: 0.7rem;
    padding-left: calc(0.7rem + 6px);
  }
  .badge.bottom-left {
    left: -10px;
    bottom: var(--badge-offset);
    border-top-right-radius: 0.7rem;
    border-bottom-right-radius: 0.7rem;
    padding-left: calc(0.7rem + 6px);
  }
  .badge.top-right:hover,
  .badge.bottom-right:hover {
    transform: translateX(-6px);
  }
  .badge.top-right:active,
  .badge.bottom-right:active {
    transform: scale(0.95) translateX(-6px);
  }
  .badge.top-left:hover,
  .badge.bottom-left:hover {
    transform: translateX(6px);
  }
  .badge.top-left:active,
  .badge.bottom-left:active {
    transform: scale(0.95) translateX(6px);
  }
  .badge:active {
    background-color: var(--badge-bg-color-hover);
    box-shadow: none;
  }
</style>
