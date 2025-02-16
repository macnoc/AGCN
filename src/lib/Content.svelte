<script>
  import Accordion from "./components/Accordion.svelte";

  export let sections,
    title,
    body,
    sectionsHeader,
    slug = false;

  // Declare openStates
  let openStates = {};

  $: {
    openStates =
      sections?.reduce((acc, section) => {
        acc[section.slug] = section.slug === slug;
        return acc;
      }, {}) || {};

    // Scroll to the opened section if a slug is provided
    if (slug) {
      setTimeout(() => {
        const element = document.querySelector(`#section-${slug}`);
        element?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }
</script>

<h1>{title}</h1>
<p class="body">{@html body}</p>
{#if sections}
  <p>{sectionsHeader}</p>
  <div class="sections">
    {#each sections as section}
      <div id="section-{section.slug}">
        <Accordion open={openStates[section.slug]}>
          <div class="title" slot="head">{section.title}</div>
          <div class="body" slot="details">
            {@html section.body}
          </div>
        </Accordion>
      </div>
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
  }
</style>
