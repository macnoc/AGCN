<script>
  import Icon from "./components/Icon.svelte";

  export let openModal;
  export let config;
  export let slug;

  let sections = config.content[config.config.language]?.sections;
  
  let content = Array.isArray(sections) 
    ? sections.find(section => section.slug === slug)?.noticeText || slug 
    : slug;
</script>

<!-- svelte-ignore a11y-invalid-attribute -->
<a class="notice" href="#" on:click|preventDefault={() => openModal(slug)} title={content} aria-label={content}>
  <Icon size="0.7rem" color="var(--notice-color)" />
  {#if content}
    <span>{content}</span>
  {/if}
</a>
