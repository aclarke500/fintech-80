<template>

<AggressiveGraph/>

<div class="meta-data">
  {{ props.client.name }}
  {{ state.speedData }}
  {{ state.aggressivenessData }}
</div>

</template>
<script setup>
import { reactive, onMounted } from 'vue';

import AggressiveGraph from '@/components/AggressiveGraph.vue';
import SpeedGraph from '@/components/SpeedGraph.vue';


const state = reactive({
  speedData: null,
  aggressivenessData: null,
});


const props = defineProps(['client', 'speed', 'aggressive']);
console.log(props.client);
console.log(props.speed);
console.log(props.data);

async function getData(urlSuffix) {
  let retValue = null;
  try {
    const url = 'https://dataqueens-webapp-gabybrenhcefegak.canadacentral-01.azurewebsites.net/' + urlSuffix;
    console.log("url is:",url)
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    retValue = await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
  }
  return retValue;
}


onMounted(async () => {
  debugger
  alert('egg')
  const s = state;
  // state.aggressivenessData = await getData('aggressive');
  debugger
  state.speedData = await getData('speed');
  const speedUrl = 'https://dataqueens-webapp-gabybrenhcefegak.canadacentral-01.azurewebsites.net/speed'
  fetch('https://example.com/api/endpoint')
  .then(response => response.json()) // Convert the response to JSON if it’s in JSON format
  .then(data => {
    state.speedData = data; // Set the data to the state
    console.log(data)
  }) // Handle the data from the response
  .catch(error => console.error('Error:', error)); // Handle any errors
  const x = 5;
});
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