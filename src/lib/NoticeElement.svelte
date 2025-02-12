<script>
  import Icon from "./components/Icon.svelte";

  export let openModal;
  export let config;
  export let notice;

  let notices = config.content[config.config.language]?.notices || {};

  let content = notices[notice] || config.content.en.notices[notice] || "Unknown";
</script>

<!-- svelte-ignore a11y-invalid-attribute -->
<a class="notice" href="#" on:click|preventDefault={() => openModal()}>
  <Icon size="0.7rem" color="var(--notice-color)" />
  <span>{content}</span>
</a>
