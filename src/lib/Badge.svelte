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
<a href="#" class="widget {badgePosition}" on:click|preventDefault={openModalHandler}>
  <Icon color="var(--badge-color)" />
</a>

<style>
  .widget {
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
  }
  .widget.top-right {
    right: -10px;
    top: var(--badge-offset);
    border-top-left-radius: 0.7rem;
    border-bottom-left-radius: 0.7rem;
    padding-right: calc(0.7rem + 6px);
  }
  .widget.bottom-right {
    right: -10px;
    bottom: var(--badge-offset);
    border-top-left-radius: 0.7rem;
    border-bottom-left-radius: 0.7rem;
    padding-right: calc(0.7rem + 6px);
  }
  .widget.top-left {
    left: -10px;
    top: var(--badge-offset);
    border-top-right-radius: 0.7rem;
    border-bottom-right-radius: 0.7rem;
    padding-left: calc(0.7rem + 6px);
  }
  .widget.bottom-left {
    left: -10px;
    bottom: var(--badge-offset);
    border-top-right-radius: 0.7rem;
    border-bottom-right-radius: 0.7rem;
    padding-left: calc(0.7rem + 6px);
  }
  .widget.top-right:hover,
  .widget.bottom-right:hover {
    transform: translateX(-6px);
  }
  .widget.top-right:active,
  .widget.bottom-right:active {
    transform: scale(0.95) translateX(-6px);
  }
  .widget.top-left:hover,
  .widget.bottom-left:hover {
    transform: translateX(6px);
  }
  .widget.top-left:active,
  .widget.bottom-left:active {
    transform: scale(0.95) translateX(6px);
  }
  .widget:active {
    background-color: var(--badge-bg-color-hover);
    box-shadow: none;
  }
</style>
