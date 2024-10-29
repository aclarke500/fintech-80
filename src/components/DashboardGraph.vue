<template>
<div class="container">
<div class="meta-data">
  {{ props.client.name }}
  {{ state.speedData }}
  {{ state.aggressivenessData }}
</div>

</div>
</template>
<script setup>
import { reactive, onMounted } from 'vue';

const props = defineProps(['client']);
const state = reactive({
  speedData: null,
  aggressivenessData: null,
});
console.log(props.client);

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