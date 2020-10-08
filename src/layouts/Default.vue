<template>
  <div id="app" class="bg-gray-100">
    <slot/>
  </div>
</template>

<script>
import config from "~/.temp/config.js";

export default {
  computed: {
    config() {
      return config;
    }
  }
};
</script>

<style src="~/assets/css/main.css"></style>
