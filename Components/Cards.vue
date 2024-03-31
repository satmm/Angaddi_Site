<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String
  },
  mounted() {
    this.adjustCardHeight();
    window.addEventListener('resize', this.adjustCardHeight);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.adjustCardHeight);
  },
  methods: {
    adjustCardHeight() {
      const cards = document.querySelectorAll('.card');
      let maxHeight = 0;
      cards.forEach(card => {
        card.style.height = 'auto'; // Reset height to auto to recalculate height based on content
        const height = card.offsetHeight;
        maxHeight = Math.max(maxHeight, height);
      });
      cards.forEach(card => {
        card.style.height = maxHeight + 'px'; // Set height based on the maximum height among all cards
      });
    }
  }
}
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  width: calc(50% - 20px);
  max-width: 400px;
  box-sizing: border-box;
  overflow: hidden;
  display: inline-block; /* Display the cards inline */
}

@media screen and (max-width: 1024px) {
  .card {
    width: calc(50% - 20px); /* Display two cards per row on tablets */
  }
}

@media screen and (max-width: 768px) {
  .card {
    width: calc(100% - 20px); /* Display one card per row on mobile devices */
  }
}
</style>
