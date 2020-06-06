<template>
  <div class="control-panel">
    <div class="controllers-container">
      <playable-pegs :pegs="playablePegColors" @peg-play="onPegPlay"/>

      <check-win @check-win-clicked="onCheckWinClicked" :is-enabled="canCheckWinningCondition" />
      
      <delete-peg-button @delete-peg-clicked="onDeletePegClicked"/>
    </div>
  </div>
</template>

<script>

import playablePegs from "./playablePegs/"
import checkWin from "./checkWin";
import deletePegButton from "./deletePegButton";
import masterMind from "@utils/mastermind";
import { mapState } from "vuex";

export default {
  name: "ControlPanel",
  components: {
    playablePegs,
    checkWin,
    deletePegButton
  },
  data() {
    return {
      playablePegColors: [
        { name: 'blue', hexCode: '#1300FF' },
        { name: 'green', hexCode: '#28FF00' },
        { name: 'orange', hexCode: '#FF8600' },
        { name: 'purple', hexCode: '#F300FF' },
        { name: 'red', hexCode: '#FF0000' },
        { name: 'yellow', hexCode: '#FFF900' }
      ]
    }
  },
  computed: {
    ...mapState({
      currentCode: state => state.currentCode
    }),
    canCheckWinningCondition() {
      return this.currentCode.length >= this.$store.state.codeLimit;
    }
  },
  methods: {
    onCheckWinClicked() {
      if (!this.canCheckWinningCondition) {
        return;
      }

      
      const userCode = this.currentCode.map(play => play.name);
      const hints = masterMind.getHints(userCode)
      const hasWon = masterMind.checkWin(hints);
      
      this.$store.dispatch("logCode", this.currentCode);
      this.$store.dispatch("setHints", hints);
      this.$store.commit("SET_HAS_WON", hasWon);
      this.$store.dispatch("clearCurrentCode")
    },
    onPegPlay(peg) {
      this.$store.dispatch("makePlay", peg)
    },
    onDeletePegClicked() {
      this.$store.dispatch("deleteLastPlay");
    }
  }
}
</script>

<style lang="scss">
.control-panel {
  grid-column-start: 1;
  grid-row-start: 1;

  .controllers-container {
    display: flex;
    flex-direction: column;
  }
}
</style>