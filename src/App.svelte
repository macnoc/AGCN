<script>
  import Badge from "./lib/Badge.svelte";
  import Modal from "./lib/components/Modal.svelte";
  import Content from "./lib/Content.svelte";

  export let content, config;

  let showModal = false;
  let contentSlug = false;

  export const openModal = (slug = false) => {
    contentSlug = slug;
    showModal = true;
  };

  const closeModal = () => {
    showModal = false;
    contentSlug = false;
  };
</script>

{#if config.showBadge}
  <Badge badgePosition={config.badgePosition} on:openModal={() => openModal()}/>
{/if}

<Modal show={showModal} on:close={closeModal} title={content[config.language]?.header} support={config.support}>
  <Content slug={contentSlug} sections={content[config.language]?.sections} title={content[config.language]?.title} body={content[config.language]?.body} sectionsHeader={content[config.language]?.sectionsHeader} />
</Modal>
