<template>
<div class="container">

<SpeedGraph/>
<AggressiveGraph/>

<div class="meta-data">
  {{ props.client.name }}
</div>

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
<style scoped>

.container {
  display: flex;
  flex-direction: column;
  min-width: 60%;
  margin: 1rem 1rem;
  padding: 30px;
  background-color: #eae0e0;
  border-radius: 8px;
  box-shadow: 0 4px 4px rgba(12, 12, 12, 0.1);
  text-align: center;
}
</style>