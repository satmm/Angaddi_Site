<template>
    <div>
      <div @click="toggle">
        <h3>{{ question }}</h3>
      </div>
      <div v-if="isOpen">
        <p>{{ answer }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      question: String,
      answer: String
    },
    data() {
      return {
        isOpen: false
      };
    },
    methods: {
      toggle() {
        this.isOpen = !this.isOpen;
      }
    }
  };
  </script>
  
  <style>
  /* Add your custom styles here */
  </style>
  