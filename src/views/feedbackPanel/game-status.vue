<template>
  <div class="game-status">
    <h3> 
      {{ gameStatusLabel }}
    </h3>
  </div>
</template>

<script>
export default {
  name: "GameStatus",
  props: {
    gameWon: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    gameStatusLabel() {
      return this.gameWon ? "You Won!! :)" : "Guess the Combination."
    }
  }
}
</script>