<template>
  <div
    class="dummy-peg" 
    :style="`background:${color}`" 
  />
</template>

<script>
export default {
  name: "DummyPeg",
  props: {
    color: {
      type: String,
      defaults: "transparent"
    }
  }
}
</script>

<style lang="scss">
.dummy-peg {
    width: 35px;
    height: 35px;
    border-radius: 50%;
}
</style>