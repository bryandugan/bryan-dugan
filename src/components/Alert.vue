<template>
  <div class="p-4 mb-12 leading-normal md:mx-6" role="alert">
    <slot>This is an alert, you should probably pass it some text...</slot>
  </div>
</template>

<script>
export default {
  name: "Alert"
};
</script>
