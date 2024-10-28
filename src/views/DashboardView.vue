<template>
  <div class="container">
    <DashboardSearchUser v-if="!state.user" id="search" @clicked-pill="(c) => clickedPill(c)" />
  </div>


  <div class="container" v-if="state.user">
    <DashboardGraph :client="state.user" />
  </div>
</template>
<script setup>
import { reactive } from 'vue';
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