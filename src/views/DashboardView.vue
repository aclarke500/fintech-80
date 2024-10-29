<template>
  <div class="container">
    <DashboardSearchUser v-if="!state.user" id="search" @clicked-pill="(c) => clickedPill(c)" />
  </div>


  <div class="container" v-if="state.user && state.showGraphs">
    <DashboardGraph :client="state.user" :speed="state.speedData" :aggressive="state.aggressivenessData" />
  </div>
  <p>{{ state.speedData }}
    {{ state.aggressivenessData }}</p>

</template>
<script setup>
import { reactive, onMounted } from 'vue';
import DashboardSearchUser from '@/components/DashboardSearchUser.vue';
import DashboardGraph from '@/components/DashboardGraph.vue';

const state = reactive({
  user: null,
  speedData: null,
  aggressivenessData: null,
  showGraphs:false,
})

function clickedPill(client) {
  state.user = client;
  console.log(client);
}


async function getData(urlSuffix) {
  let retValue = null;
  try {
    const url = 'https://dataqueens-webapp-gabybrenhcefegak.canadacentral-01.azurewebsites.net/' + urlSuffix;
    const response = await fetch(url, {
      method: 'POSt',
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


async function fetchData() {
  try {
    const url = 'https://dataqueens-webapp-gabybrenhcefegak.canadacentral-01.azurewebsites.net/aggressive';
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

onMounted(async () => {
  // state.aggressivenessData = await getData('aggressive');

  // state.speedData = await getData('speed');
  state.speedData=[1,2,3,4,5,6,7,8,9,10];
  state.aggressivenessData=[1,2,3,4,5,6,7,8,9,10];
  state.showGraphs = true;
  console.log(state.aggressivenessData. state.speedData);
});


</script>

<style scoped>
#search {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
}


h1,
p {
  color: red;
}
</style>