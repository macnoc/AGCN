<script>
  import { createEventDispatcher, onMount, onDestroy } from "svelte";
  import { fly } from "svelte/transition";
  import Icon from "./Icon.svelte";
  import Support from "../Support.svelte";

  export let show;
  export let title, support;

  const dispatch = createEventDispatcher();
  let modalEl;
  let previouslyFocusedElement;

  const closeHandler = () => {
    dispatch("close");
  };

  const handleKeydown = (e) => {
    if (!show) return;

    if (e.key === "Escape") {
      closeHandler();
    }
  };

  // Trap focus within modal
  const handleTabbing = (e) => {
    if (!show || e.key !== "Tab") return;

    const focusableEls = modalEl.querySelectorAll('a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])');
    const firstFocusable = focusableEls[0];
    const lastFocusable = focusableEls[focusableEls.length - 1];

    if (e.shiftKey && document.activeElement === firstFocusable) {
      e.preventDefault();
      lastFocusable.focus();
    } else if (!e.shiftKey && document.activeElement === lastFocusable) {
      e.preventDefault();
      firstFocusable.focus();
    }
  };

  const disableScroll = () => {
    document.body.style.overflow = "hidden";

  };

  const enableScroll = () => {
    document.body.style.overflow = "";

  };

  $: if (show) {
    disableScroll();
    // Store previously focused element
    previouslyFocusedElement = document.activeElement;
    // Focus first focusable element in modal
    setTimeout(() => {
      modalEl?.querySelector("button")?.focus();
    });
  } else {
    enableScroll();
    // Restore focus
    if (previouslyFocusedElement) {
      previouslyFocusedElement.focus();
    }
  }

  onMount(() => {
    document.addEventListener("keydown", handleKeydown);
    document.addEventListener("keydown", handleTabbing);
  });

  onDestroy(() => {
    document.removeEventListener("keydown", handleKeydown);
    document.removeEventListener("keydown", handleTabbing);
    enableScroll();
  });
</script>

{#if show}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <div class="overlay" on:click|self={closeHandler} role="dialog" aria-labelledby="modal-title" aria-modal="true" bind:this={modalEl}>
    <section class="modal" transition:fly={{ y: -10, duration: 200 }}>
      <header>
        <div class="title">
          <div class="icon-wrapper" aria-hidden="true">
            <Icon color="var(--modal-icon-color)" />
          </div>
          <div id="modal-title" class="heading">{title}</div>
        </div>
        <button on:click|preventDefault={closeHandler} class="close" aria-label="Close dialog">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </header>
      <main>
        <slot />
      </main>
      {#if support}
        <Support />
      {/if}
    </section>
  </div>
{/if}

<style>
  .overlay {
    position: fixed;
    inset: 0px;
    z-index: 10000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }
  .modal {
    flex: 1;
    max-width: 580px;
    max-height: calc(100vh - 2rem);
    overflow: hidden;
    background-color: var(--modal-bg-color);
    padding: clamp(1.5rem, 2.5vw, 3rem);
    border-radius: 1rem;
    box-shadow:
      rgba(17, 17, 26, 0.05) 0px 4px 16px,
      rgba(17, 17, 26, 0.05) 0px 8px 32px;
    border: 1px solid var(--modal-border-color);
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }
  .title {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 0.5rem;
  }
  .heading {
    font-size: 1.1rem;
    font-weight: normal;
  }
  .close {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  .close svg {
    width: 1.4rem;
    height: 1.4rem;
  }
  main {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow-y: auto;
    max-height: 100%;
  }
  .icon-wrapper {
    padding: 0.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--main-color);
    border-radius: 0.7rem;
  }
</style>
