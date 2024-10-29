<template>
<div class="container">
<div class="meta-data">
  {{ props.client.name }}
</div>

</div>
</template>
<script setup>
import { reactive } from 'vue';

const props = defineProps(['client', 'speed', 'aggressive']);
console.log(props.client);
console.log(props.speed);
console.log(props.data);


</script>
<style scoped>

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: white;
  height: 30rem;
  min-width: 10rem;
  width: 70%;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  /* Optional shadow for style */
  border-radius: 8px;
  /* Optional rounded corners */
}
</style>