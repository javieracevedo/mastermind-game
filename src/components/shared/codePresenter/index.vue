<template>
  <div class="code-presentation">
    <div v-for="(peg, index) in code" :key="index" class="peg-container">
      <dummy-peg :color="peg.hexCode"/>
    </div>
  </div>
</template>

<script>

import dummyPeg from "./dummy-peg";

export default {
  name: "CodePresenter",
  props: {
    code: {
      type: Array,
      required: true
    }
  },
  components: {
    dummyPeg
  }
}
</script>

<style lang="scss" >
.code-presentation {
  display: flex;
  flex-direction: row;

  .peg-container {
    margin: 10px;
  }
}
</style>