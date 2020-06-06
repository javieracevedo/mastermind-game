<template>
  <div class="feedback-panel">
    <h1> Feedback </h1>
    <div class="feedback-container">
      <code-presenter :code="hintPegs" class="code-presenter"/> 
      <game-status :game-won="hasWon" />
    </div>
  </div>
</template>

<script>

import codePresenter from "@c/shared/codePresenter/"
import gameStatus from "./game-status";
import { mapState } from 'vuex';

export default {
  name: "FeedbackPanel",
  computed: {
    ...mapState({
      hintPegs: state => state.hints,
      hasWon: state => state.hasWon
    })
  },
  components: {
    codePresenter,
    gameStatus
  }
}
</script>

<style lang="scss">
.feedback-panel {
  grid-column-start: 3;
  grid-row-start: 1;
  margin-left: 50px;
  
  h1 {
    color: #858585
  }

  .feedback-container {
    display: flex;
    flex-direction: column;
    
    .code-presenter {
      background: gray;
      border-radius: 10px;
    }
  }
}
</style>