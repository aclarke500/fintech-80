<template>
  <div class="container">
    <DashboardSearchUser v-if="!state.user" id="search" @clicked-pill="(c) => clickedPill(c)" />
  </div>


  <div class="container" v-if="state.user">
    <DashboardGraph :client="state.user" />
  </div>
  <p>{{ state.speedData }}
    {{ state.aggressivenessData }}</p>

</template>
<script setup>
import { reactive } from 'vue';
import DashboardSearchUser from '@/components/DashboardSearchUser.vue';
import DashboardGraph from '@/components/DashboardGraph.vue';

const state = reactive({
  user: null,
  speedData: null,
  aggressivenessData: null,
})

function clickedPill(client) {
  state.user = client;
}

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