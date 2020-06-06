<template>
  <div
    class="interactive-peg" 
    :style="`background:${peg.hexCode}`" 
    @click="$emit('peg-clicked', peg)"
  />
</template>

<script>
export default {
  name: "InteractivePeg",
  props: {
    peg: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.interactive-peg {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    cursor: pointer;
}
</style>