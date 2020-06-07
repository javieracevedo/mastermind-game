<template>
  <div class="playable-pegs">
    <div v-for="(peg, index) in pegs" :key="index" class="peg-container">
      <interactive-peg :peg="peg" @peg-clicked="onPegClicked"/>
    </div>
  </div>
</template>

<script>

import interactivePeg from "./interactivePeg";

export default {
  name: "PlayablePegs",
  components: {
    interactivePeg
  },
  props: {
    pegs: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      pegColor: {
        name: "yellow",
        hexCode: "#FFFF00"
      }
    }
  },
  methods: {
    onPegClicked(peg) {
      this.$emit("peg-play", peg);
    }
  }
}
</script>

<style lang="scss">
.playable-pegs {
  display: flex;
  flex-direction: row;
  margin-bottom: 12px;
  
  .peg-container {
    margin: 10px;
  }


}
</style>