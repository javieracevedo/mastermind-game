<template>
  <div class="log-presentation">
    <div v-for="(code, index) in codeLog" :key="index" class="peg-container">
      <code-presentation :code="code"/>
    </div>
  </div>
</template>

<script>

import codePresentation from "@c/shared/codePresenter/";

export default {
  name: "CodePresentation",
  props: {
    codeLog: {
      type: Array,
      required: true
    }
  },
  components: {
    codePresentation
  }
}
</script>

<style lang="scss">
.log-presentation {
  display: flex;
  flex-direction: column;
}
</style>