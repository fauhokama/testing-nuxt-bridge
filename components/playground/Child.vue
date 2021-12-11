<script setup>
const props = defineProps({
  message: String,
});
</script>

<template>
  <div>
    <h1>Hello, Im child</h1>
    <p>{{ message }}</p>
  </div>
</template>
