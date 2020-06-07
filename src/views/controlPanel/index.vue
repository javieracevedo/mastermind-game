<template>
  <div class="control-panel">
    <h1> Controllers </h1>
    <div class="controllers-container">
      <playable-pegs :pegs="playablePegColors" @peg-play="onPegPlay"/>

      <check-win @check-win-clicked="onCheckWinClicked" :is-enabled="canCheckWinningCondition" />
      
      <delete-peg-button @delete-peg-clicked="onDeletePegClicked" :is-enabled="canDeletePlay"/>
    </div>
  </div>
</template>

<script>

import playablePegs from "./playablePegs/"
import checkWin from "./checkWin";
import deletePegButton from "./deletePegButton";
import masterMind from "@/core/mastermind";
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
      ],
      machineCode: []
    }
  },
  created() {
    this.setMachineCode()
  },
  computed: {
    ...mapState({
      currentCode: state => state.currentCode
    }),
    canCheckWinningCondition() {
      return this.currentCode.length >= this.$store.state.codeLimit;
    },
    canDeletePlay() {
      return this.currentCode.length >= 1;
    }
  },
  methods: {
    onCheckWinClicked() {
      if (!this.canCheckWinningCondition) {
        return;
      }

      const userCode = this.currentCode.map(play => play.name);
      const hints = masterMind.getHints(userCode, this.machineCode)
      const hasWon = masterMind.checkWin(hints);
      
      this.$store.dispatch("logCode", this.currentCode);
      this.$store.dispatch("setHints", hints);
      this.$store.commit("SET_HAS_WON", hasWon);
      this.$store.dispatch("clearCurrentCode");

      if (hasWon) {
        this.setMachineCode()
        this.$store.dispatch("clearCodeLog");
      }
    },
    onPegPlay(peg) {
      this.$store.dispatch("makePlay", peg)
    },
    onDeletePegClicked() {
      this.$store.dispatch("deleteLastPlay");
    },
    setMachineCode() {
      this.machineCode = masterMind.generateCode();
    }
  }
}
</script>

<style lang="scss">
.control-panel {
  grid-column-start: 1;
  grid-row-start: 1;

  h1 {
    color: #858585
  }
  
  .controllers-container {
    display: flex;
    flex-direction: column;
  }
}
</style>