<template>
  <div class="holder">
    <div class="container">
      <div class="client-pill" v-for="(client) in state.clients" :key="client"
      @click="clickedPill(client)"
      >
        <div class="photo"></div>
        <div class="name">{{ client.name }}</div>
        <div class="car">{{ client.car }}</div>
        <div class="plate">{{ client.plate }}</div>
        <div class="plan">{{ client.plan }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
const emits = defineEmits(['clickedPill']);

const state = reactive({
  clients: [
    {
      name: 'John Doe',
      car: 'Toyota',
      plate: 'ABC123',
      plan: 'Balanced',
    },
    {
      name: 'Jane Smith',
      car: 'Honda',
      plate: 'XYZ789',
      plan: 'Premium',
    },
    {
      name: 'Alice Johnson',
      car: 'Ford',
      plate: 'LMN456',
      plan: 'Basic',
    },
    {
      name: 'Bob Williams',
      car: 'BYD',
      plate: 'DEF321',
      plan: 'Balanced',
    },
    {
      name: 'Charlie Brown',
      car: 'Tesla',
      plate: 'GHI654',
      plan: 'Premium',
    }
  ],

})


function clickedPill(client){
  // console.log(client)
  emits("clickedPill",client);
}


</script>

<style scoped>
.holder {
width: 98%;
}

.container {
  font-size: 1.3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: white;
  height: 100%;
  min-width: 10rem;
  width: 100%;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  /* Optional shadow for style */
  border-radius: 8px;
  /* Optional rounded corners */
}


.client-pill{
  color: #5743D3;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: #f0f0f0;
  padding: 1rem;
  border-radius: 8px;
  width: 100%;
}

.client-pill:hover{
  background-color: #e0e0e0;
}
</style>