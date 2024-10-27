<template>
  <div class="parent-container">

    <div class="meta-data-container">
      <button @click="swipe('left')"><</button>
    <!-- display of the policy high level data -->
     <div class="meta-data">
    <div class="policy-row">
      <!-- +1 to account for 0 based indexing -->
      <h1>Policy {{ props.index + 1 }}</h1>
    </div>

    <div class="policy-row">
      <h3>Name: {{ props.policy.name }}</h3>
    </div>

    <div class="policy-row">
      <h3>Car Model: {{ props.policy.carModel }}</h3>
    </div>

    <div class="policy-row">
      <h3>AI Model: {{ props.policy.aiModel }}</h3>
    </div>
    <div class="photos-container">
      <img src="../assets/plus.png" alt="Tesla Model Y" width="200" height="200">
    </div>
  </div>
    <button @click="swipe('right')">></button>

  </div>
    <div class="letter-container">
      <p>{{ props.policy.policyText }}</p>
      <!-- Your content here -->
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const state = reactive({
  src: '../assets/plus.png'
});

const props = defineProps(['policy', 'index']);
const emits = defineEmits(['swipe']);


function swipe(direction) {
  if (direction === 'left') {
    emits('swipe', 'left');
  } else {
    emits('swipe', 'right');
  }
}
</script>

<style scoped>

.meta-data-container {
  display: flex;
  flex-direction: row; /* Change to row to align items horizontally */
  justify-content: center;
  align-items: center;
  margin: 1rem;
}

.meta-data {
  display: flex;
  flex-direction: column;
  flex: 5;
}

.meta-data-container button {
  flex: 1; /* Adjusts button to occupy space on either side */
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px;
}

/* .meta-data-container button{

} */



.meta-data-container button:active {
  background-color: #1f4317;
}

.policy-row {
  color: white;
}

.photos-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 1rem;
}

.policy-row h1,
h2,
h3,
h4,
h5,
h6,
p {
  /* color: white; */
  margin: 0.5rem;
}

.parent-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.letter-container {
  /* center it */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  /* styling */
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: black;
  /* sizing (important shit) */
  margin-top: 5px;
  margin: 10px;
  /* height: 20rem; */
  height: auto;
  width: 20rem;
  min-width: 40%;
  max-width: 80%;
}
</style>
