<template>

<AggressiveGraph/>

<div class="meta-data">
  {{ props.client.name }}
</div>

</template>
<script setup>
import { reactive } from 'vue';
import AggressiveGraph from '@/components/AggressiveGraph.vue';
import SpeedGraph from '@/components/SpeedGraph.vue';


const props = defineProps(['client', 'speed', 'aggressive']);
console.log(props.client);
console.log(props.speed);
console.log(props.data);


</script>
<style>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 50rem; /* Equivalent to 800px */
  margin: 1.5rem auto; /* Reduced margin for less space around the container */
  padding: 1.5rem;
  border-radius: 0.5rem;
  text-align: center;
  box-sizing: border-box;
}

/* Chart container to hold individual graphs */
.chart-container {
  width: 100%;
  max-width: 100%;
  height: auto;
  min-height: 12.5rem; /* Equivalent to 200px */
  margin: 1rem 0; /* Adds vertical spacing between graphs */
}

/* Responsive adjustments for tablets */
@media (max-width: 48rem) {
  .container {
    width: 95%;
    padding: 1rem;
    margin: 1rem auto; /* Slightly reduced margin for tablets */
  }

  .meta-data {
    font-size: 0.9rem;
  }
}

/* Responsive adjustments for mobile screens */
@media (max-width: 30rem) {
  .container {
    width: 100%;
    padding: 0.75rem;
    margin: 0.75rem auto; /* Reduced margin for mobile screens */
  }

  .meta-data {
    font-size: 0.8rem;
  }
}

</style>