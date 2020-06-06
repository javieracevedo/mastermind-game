<template>
  <button class="check-win-button" @click="$emit('check-win-clicked')" :disabled="!isEnabled"> Check Win </button>
</template>

<script>
export default {
  name: "CheckWin",
  props: {
    isEnabled: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="scss">
.check-win-button {
  width: 328px;
  margin-bottom: 12px;
}
</style>