<template>
  <div class="container" v-if="!state.user">
    <DashboardSearchUser  id="search" @clicked-pill="(c) => clickedPill(c)" />
  </div>


  <div class="container" v-if="state.user && state.showGraphs">
    <DashboardGraph :client="state.user"/>
  </div>

</template>
<script setup>
import { reactive, onMounted } from 'vue';
import DashboardSearchUser from '@/components/DashboardSearchUser.vue';
import DashboardGraph from '@/components/DashboardGraph.vue';

const state = reactive({
  user: null,
  // speedData: null,
  // aggressivenessData: null,
  showGraphs:false,
})

function clickedPill(client) {
  state.user = client;
}


onMounted(async () => {
  // state.aggressivenessData = await getData('aggressive');

  // state.speedData = await getData('speed');
  // state.speedData=[1,2,3,4,5,6,7,8,9,10];
  // state.aggressivenessData=[1,2,3,4,5,6,7,8,9,10];
  state.showGraphs = true;
  // console.log(state.aggressivenessData. state.speedData);
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