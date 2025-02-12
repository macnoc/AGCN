<script>
  export let open = false;
  import { slide } from "svelte/transition";
  const handleClick = () => (open = !open);
</script>

<section class="accordion" class:open>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <!-- svelte-ignore a11y-invalid-attribute -->
  <a class="header" href="#" role="button" aria-expanded={open} aria-controls="accordion-details" on:click|preventDefault={handleClick}>
    <slot name="head"></slot>
    {#if !open}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon">
        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
      </svg>
    {:else}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon">
        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
      </svg>
    {/if}
  </a>

  {#if open}
    <div id="accordion-details" class="details" transition:slide>
      <slot name="details"></slot>
    </div>
  {/if}
</section>

<style>
  .header,
  .header:visited {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    color: inherit;
    text-decoration: none;
    padding: 0.8rem 0.6rem;
  }
  .header:active {
    background-color: var(--accordion-open-bg-color);
  }
  .accordion {
    border-top: 1px solid var(--modal-border-color);
    transition: all 0.2s ease-in-out;
  }
  .accordion.open {
    background-color: var(--accordion-open-bg-color);
  }
  .details {
    padding: 0.8rem 0.6rem;
    padding-top: 0px;
  }
  .icon {
    width: 1rem;
    height: 1rem;
  }
</style>
