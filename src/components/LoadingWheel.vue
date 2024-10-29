<script setup>
import { reactive, onMounted, onUnmounted } from 'vue';
const props = defineProps(['messages']);
const state = reactive({
  message: 'Fetching data...',
});

const messages = [
  'Loading...',
  'Still loading...',
  'Almost there...',
  'Pandas are hard at work...',
  'Just a few more seconds...',
];

async function  getRandomMessage() {
  const min = 0;
  const max = messages.length - 1;
 
  const randomDelay = Math.floor(Math.random() * 4) * 1000;
  // wait for the random delay
  await wait(randomDelay);
  return messages[Math.floor(Math.random() * (max - min + 1))];
}

async function load() {
  // Simulate loading process
  await wait(5000); // Replace with actual loading logic
}

let interval;
onMounted(async () => {
  // state.message = getRandomMessage();
  
  // Change message every 2 seconds
  interval = setInterval(async () => {
    state.message = await getRandomMessage();
  }, 2000);

  load().then(() => {
    clearInterval(interval);
  });
});

onUnmounted(() => {
  clearInterval(interval);
});

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
</script>

<template>
  <div class="spinner">
    <i class="fa fa-spinner fa-spin"></i>
  </div>
  <div id="message"v-if="props.messages">{{ state.message }}</div>
</template>

<style scoped>
div.spinner {
  font-size: 30px;
  text-align: center;
  color: #aaa;
  padding-top: 20px;
}
#message {
  font-size: 20px;
  text-align: center;
  color: #f2f2f2;
  padding-top: 20px;
}
</style>
