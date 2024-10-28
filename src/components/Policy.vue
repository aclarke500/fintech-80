<template>
  <div class="parent-container">

    <div class="meta-data-container">
      <button class="swipe"@click="swipe('left')"><</button>
    <!-- display of the policy high level data -->
     <div class="meta-data">
    <div class="policy-row">
      <!-- +1 to account for 0 based indexing -->
      <h1>The {{ props.policy.policyName }}</h1>
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

      <img v-if="props.policy.policyName == 'umbrella'" src="../assets/umbrella.png" alt="plus" @click="openPolicyModal" />
      <img v-if="props.policy.policyName == 'cheap'" src="../assets/cheap.png" alt="plus" @click="openPolicyModal" />
      <img v-if="props.policy.policyName == 'balance'" src="../assets/balance.png" alt="plus" @click="openPolicyModal" />


</div>

  </div>
    <button class="swipe"@click="swipe('right')">></button>

  </div>

  
  <div class="button-container sticky-bottom">
    <button @click="openPolicyModal">
      <i class="fa-regular fa-file-lines"></i>
    </button>
    <button @click="removePolicyOption">
      <i class="fa-light fa-x"></i>
    </button>
    <button>
      <i id="heart" class="fa-solid fa-heart"></i>
    </button>
    <button>
      <i class="fa-sharp fa-light fa-ellipsis"></i>
    </button>
  </div>
    <div v-if="0" class="letter-container">
      <!-- <font-awesome-icon :icon="['fass', 'file-lines']" /> -->
      
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
const emits = defineEmits(['swipe', 'openModal']);


function swipe(direction) {
  if (direction === 'left') {
    emits('swipe', 'left');
  } else {
    emits('swipe', 'right');
  }
}

function openPolicyModal(){
  emits('openModal');
}

function removePolicyOption(){
  emits('remove', props.index);
}


</script>

<style scoped>

#heart{
  color: red;
  /* background-color: red; */
}


img{
  width: 150%;
  max-width: 500px;
  max-height: 200px;
  height: auto;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  /* height: 30%; */
}

#policy-icon{
  color: white;
  height: 100px;
}

.tinder-button {
  color: black;
  height: 100px;
}

.button-container {
  display: flex;
  justify-content: space-evenly; /* Evenly distributes buttons across the container */
  align-items: center;
  background-color: rgb(27 42 59);
  padding: 1rem;
  border-radius: 1rem;
  width: 100%;
  height: 10%; /* Adjusts to content size */
  border-top: 3px solid black;
}

.button-container button {
  flex: 1; /* Allows each button to grow equally */
  max-width: 3rem; /* Sets max width for square shape */
  aspect-ratio: 1 / 1; /* Keeps buttons square */
  background-color: white;
  border: black 1px solid;
  color: black;
  font-size: 1.5rem;
  text-align: center;
  padding: 0;
  cursor: pointer;
}

.button-container button:hover {
  background-color: #e0e0e0; /* Slightly darker background */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Adds shadow */
}


.sticky-bottom {
  position: fixed;
  bottom: 0;
  width: 100%; /* Optional: make it full width */
  padding: 1rem; /* Optional: padding for space */
  text-align: center; /* Optional: center-align content */
}

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
.egg{
  color: white;
  height: 100px;
}
.meta-data-container button {
  flex: 1/4; /* Adjusts button to occupy space on either side */
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
;
}

/* .meta-data-container button{

} */



.meta-data-container button:active {
  background-color: #1f4317;
}

.policy-row {
  color: white;
  word-wrap: break-word;
  max-width: 80%;
}

.photos-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 1rem;
}

.parent-container font-awesome-icon {
  color: white;
  height: 100px;
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
