<script>
  import Badge from "./lib/Badge.svelte";
  import Modal from "./lib/components/Modal.svelte";
  import Content from "./lib/Content.svelte";

  export let content, config;

  let showModal = false;

  export const openModal = () => {
    showModal = true;
  };

  const closeModal = () => {
    showModal = false;
  };
</script>

{#if config.showBadge}
  <Badge badgePosition={config.badgePosition} on:openModal={openModal}/>
{/if}

<Modal show={showModal} on:close={closeModal} title={content[config.language]?.header} support={config.support}>
  <Content sections={content[config.language]?.sections} title={content[config.language]?.title} body={content[config.language]?.body} sectionsHeader={content[config.language]?.sectionsHeader} />
</Modal>
