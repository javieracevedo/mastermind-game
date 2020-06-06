<template>
  <section class="container">
    <control-panel />
    <overview-panel />
    <feedback-panel />
  </section>
</template>

<script>


import controlPanel from "@v/controlPanel/";
import overviewPanel from "@v/overviewPanel/";
import feedbackPanel from "@v/feedbackPanel/"

export default {
  name: 'App',
  components: {
    controlPanel,
    overviewPanel,
    feedbackPanel
  }
}
</script>

<style lang="scss">
.container {
  display: grid;
  grid-template-columns: 376px 226px 232px;
  grid-auto-rows: auto;
  justify-content: center;
}

</style>
