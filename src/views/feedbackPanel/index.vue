<template>
  <div class="feedback-panel">
    <code-presenter :code="hintPegs" class="code-presenter"/> 
  </div>
</template>

<script>

import codePresenter from "@c/shared/codePresenter/"
import { mapState } from 'vuex'
export default {
  name: "FeedbackPanel",
  computed: {
    ...mapState({
      hintPegs: state => state.hints,
      hasWon: state => state.hasWon
    })
  },
  components: {
    codePresenter
  }
}
</script>

<style lang="scss">
.feedback-panel {
  grid-column-start: 3;
  grid-row-start: 1;
  margin-left: 20px;

  .code-presenter {
    background: gray;
    border-radius: 10px;
  }
}
</style>