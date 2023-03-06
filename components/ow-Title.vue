<template>
  <div><h1>{{ title }}</h1></div>
</template>
<script setup lang="ts">
defineProps({title: {type: String, required: false, default: 'The Title'}});
</script>