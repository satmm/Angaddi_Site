<template>
  <div class="image-description">
    <!-- Display image on the left -->
    <div class="image-container">
      <img :src="imageSrc" alt="Image" class="image">
    </div>

    <!-- Display description on the right -->
    <div class="description-container">
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
  // Define props
  const props = defineProps(['imageSrc', 'description']);
</script>

<style scoped>
  .image-description {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  .image-container {
    flex: 1;
    margin-right: 2px; /* Reduce the margin-right to 2px */
  }

  .image {
    max-width: 250px;
    width: 100%;
    height: 480px;
    display: block;
  }

  .description-container {
    flex: 1;
  }
</style>
