<template>
  <div class="container">
    <DashboardSearchUser v-if="!state.user" id="search" @clicked-pill="(c) => clickedPill(c)" />
  </div>


  <div class="container" v-if="state.user">
    <DashboardGraph :client="state.user" />
  </div>
</template>
<script setup>
import { reactive, onMounted } from 'vue';
import DashboardSearchUser from '@/components/DashboardSearchUser.vue';
import DashboardGraph from '@/components/DashboardGraph.vue';

const state = reactive({
  user: null,
})

function clickedPill(client) {
  alert('clicked pill');
  state.user = client;
  console.log(client);
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
  await fetchData();
});


</script>

<style>
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