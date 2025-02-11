<script>
  import Accordion from "./components/Accordion.svelte";

  export let sections, title, body, sectionsHeader;
</script>

<h1>{title}</h1>
<p>{@html body}</p>
{#if sections}
  <p>{sectionsHeader}</p>
  <div class="sections">
    {#each sections as section}
      <Accordion>
        <div class="title" slot="head">{section.title}</div>
        <div class="details" slot="details">
          {@html section.body}
        </div>
      </Accordion>
    {/each}
  </div>
{/if}

<style>
  h1 {
    font-size: clamp(1.2rem, 2.5vw, 1.3rem);
    font-weight: 600;
  }
  .title {
    font-weight: 600;
  }
  .sections {
    display: flex;
    flex-direction: column;
    gap: 0px;
    border-bottom: 1px solid var(--modal-border-color);
  }
</style>
