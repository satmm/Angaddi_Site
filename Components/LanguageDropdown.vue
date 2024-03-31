<template>
    <div class="language-dropdown">
      <button @click="toggleDropdown">{{ buttonText }}</button>
      <ul v-show="isDropdownOpen" @click.away="closeDropdown">
        <li v-for="option in options" :key="option.text">
          <a :href="option.link">{{ option.text }}</a>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isDropdownOpen: false,
        buttonText: 'Switch Language', // Default button text
        options: [] // Array to store language options
      };
    },
    methods: {
      toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen;
      },
      closeDropdown() {
        this.isDropdownOpen = false;
      }
    },
    mounted() {
      // Set button text and options from YAML front matter
      const { actions } = this.$frontmatter.hero;
      const languageAction = actions.find(action => action.dropdown);
      if (languageAction) {
        this.buttonText = languageAction.text;
        this.options = languageAction.options;
      }
    }
  };
  </script>
  
  <style scoped>
  .language-dropdown {
    position: relative;
    display: inline-block;
  }
  
  .language-dropdown button {
    background-color: #4caf50;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
  }
  
  .language-dropdown ul {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #f9f9f9;
    min-width: 160px;
    padding: 5px 0;
    margin: 0;
    list-style-type: none;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  .language-dropdown ul li {
    padding: 10px;
  }
  
  .language-dropdown ul li a {
    color: black;
    text-decoration: none;
  }
  
  .language-dropdown ul li a:hover {
    background-color: #ddd;
  }
  </style>
  