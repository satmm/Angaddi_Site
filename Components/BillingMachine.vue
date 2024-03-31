<script setup>
  // Import props
  import { defineProps } from 'vue';

  // Define props
  const props = defineProps(['imageSrc', 'altText', 'description']);
</script>

<template>
  <div class="billing-machine">
    <div class="image-container">
      <!-- Display image -->
      <img :src="imageSrc" :alt="altText" class="image" />
    </div>

    <!-- Display description -->
    <p class="description">{{ description }}</p>
  </div>
</template>

<style scoped>
  .billing-machine {
    display: flex;
    align-items: center;
  }

  .image-container {
    margin-right: 10px;
  }

  .image-container img {
    max-width: 100%;
    height: auto;
    border: none;
  }

  .description {
    text-align: center;
  }

  /* Media query for mobile devices */
  @media screen and (max-width: 768px) {
    .billing-machine {
      flex-direction: column;
      align-items: center;
    }

    .image-container {
      margin-right: 0; /* Remove margin-right in mobile view */
    }

    .description {
      margin-top: 10px; /* Add space between image and description in mobile view */
    }
  }
</style>
