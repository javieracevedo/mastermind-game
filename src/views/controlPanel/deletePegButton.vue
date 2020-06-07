<template>
  <button 
    class="delete-peg-button" 
    @click="$emit('delete-peg-clicked')"
    :disabled="!isEnabled"
  > 
      Delete 
  </button>
</template>

<script>
export default {
  name: "DeletePegButton",
  props: {
    isEnabled: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="scss">
.delete-peg-button {
  width: 328px;
}
</style>