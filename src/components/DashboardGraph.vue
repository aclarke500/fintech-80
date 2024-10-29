<template>

<AggressiveGraph  :speed-data="state.speedData" :a="state.aggressivenessData"
v-if="state.speedData && state.aggressivenessData"/>
<LoadingWheel class="wheel" :messages="true" v-else/>


</template>
<script setup>
import { reactive, onMounted } from 'vue';
import { cleanSpeed, cleanAggressive } from '@/utils/clean';
import AggressiveGraph from '@/components/AggressiveGraph.vue';
import LoadingWheel from './LoadingWheel.vue';
import SpeedGraph from '@/components/SpeedGraph.vue';


const state = reactive({
  speedData: null,
  aggressivenessData: null,
});


const props = defineProps(['client']);


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
  const aggressivenessRetObj = await getData('aggressive');
  state.aggressivenessData = cleanAggressive(aggressivenessRetObj);
  const s = state;
  console.log(state.aggressivenessData)
  console.log(aggressivenessRetObj)
  const speedRetObj = await getData('speed');

  state.speedData = cleanSpeed(speedRetObj);
  const speedUrl = 'https://dataqueens-webapp-gabybrenhcefegak.canadacentral-01.azurewebsites.net/speed'
  fetch('https://example.com/api/endpoint')
  .then(response => response.json()) // Convert the response to JSON if it’s in JSON format
  .then(data => {
    state.speedData = data; // Set the data to the state

  }) // Handle the data from the response
  .catch(error => console.error('Error:', error)); // Handle any errors

});
</script>
<style>
.wheel-container{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #f2f2f2;
}
.wheel {
  margin-top: 15rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
}

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