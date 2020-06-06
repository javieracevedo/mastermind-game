<template>
  <button class="delete-peg-button" @click="$emit('delete-peg-clicked')"> Delete </button>
</template>

<script>
export default {
  name: "DeletePegButton"
}
</script>

<style lang="scss">
.delete-peg-button {
  width: 328px;
}
</style>