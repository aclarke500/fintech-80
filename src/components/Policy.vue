<template>
  <div class="parent-container">
    <div class="meta-data-container">
      <button class="swipe" @click="swipe('left')"> < </button>
      <!-- display of the policy high level data -->
      <div class="meta-data">
        <div class="policy-row">
          <h1>The {{ state.title }}</h1>
        </div>

        <div class="photos-container">
          <img v-if="mapTitleToImgUrl(state.title) == 'umbrella'" src="../assets/umbrella.png" alt="plus" @click="openPolicyModal" />
          <img v-if="mapTitleToImgUrl(state.title) == 'cheap'" src="../assets/cheap.png" alt="plus" @click="openPolicyModal" />
          <img v-if="mapTitleToImgUrl(state.title) == 'balance'" src="../assets/balance.png" alt="plus" @click="openPolicyModal" />
        </div>

        <!-- Labeled Policy Details -->
        <div class="policy-row">
          <div class="label">Price:</div>
          <div class="policy-text">{{ state.price }}</div>
        </div>
        <div class="policy-row">
          <div class="label">Deductible:</div>
          <div class="policy-text">{{ state.deductible }}</div>
        </div>
        <div class="policy-row">
          <div class="label">AI Safety Score:</div>
          <div class="policy-text">{{ state.aiSafetyScore }}</div>
        </div>

        <!-- Button Container now inside Meta Data Container -->
        <div class="button-container">
          <button @click="openPolicyModal"><i class="fa-regular fa-file-lines"></i></button>
          <button @click="removePolicyOption"><i class="fa-light fa-x"></i></button>
          <button><i id="heart" class="fa-solid fa-heart"></i></button>
          <button><i class="fa-sharp fa-light fa-ellipsis"></i></button>
        </div>
      </div>
      <button class="swipe" @click="swipe('right')">></button>
    </div>
  </div>
</template>



<script setup>
import { reactive, watch } from 'vue';
import store from '@/store';
const props = defineProps(['policy', 'index']);
const emits = defineEmits(['swipe', 'openModal']);

console.log(store)

const state = reactive({
  m:props.policy.metadata,
  aiSafetyScore: props.policy.AI_safety_score,
  deductible: props.policy.metadata.deductible,
  price: props.policy.metadata.price,
  title: props.policy.section_title,

});


// Watch for changes in props.policy and update state reactively
watch(
  () => props.policy,
  (newPolicy) => {
    state.m = newPolicy.metadata;
    state.aiSafetyScore = newPolicy.metadata?.AI_safety_score || '';
    state.deductible = newPolicy.metadata?.deductible || '';
    state.price = newPolicy.metadata?.price || '';
    state.title = newPolicy.section_title || '';
  },
  { immediate: true }
);


function swipe(direction) {
  if (direction === 'left') {
    emits('swipe', 'left');
  } else {
    emits('swipe', 'right');
  }
}

function openPolicyModal() {
  emits('openModal');
}

function removePolicyOption() {
  emits('remove', props.index);
}


function mapTitleToImgUrl(title) {
  // Convert title to lowercase and trim any extra spaces
  const normalizedTitle = title.trim().toLowerCase();

  // Check for keywords and map accordingly
  if (normalizedTitle.includes("total") || normalizedTitle.includes("umbrella")) {
    return "umbrella";
  } else if (normalizedTitle.includes("economic") || normalizedTitle.includes("cheap")) {
    return "cheap";
  } else if (normalizedTitle.includes("balanced") || normalizedTitle.includes("balance")) {
    return "balance";
  } else {
    return "unknown"; // Fallback if no match is found
  }
}
</script>

<style scoped>

#heart {
  color: red;
}

img {
  width: 150%;
  max-width: 500px;
  max-height: 200px;
  height: auto;
  aspect-ratio: 3 / 2;
  object-fit: cover;
}

.button-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  
  padding: 1.5rem;
  width: 100%;
  height: 10%;
  
}

.button-container button {
  flex: 1;
  max-width: 3rem;
  width: 3rem;
  height: 3rem;
  background-color: white;
 
  color: black;
  font-size: 1.5rem;
  text-align: center;
  cursor: pointer;
  border-radius: 1rem;
  
}

.button-container button:hover {
  background-color: #e0e0e0;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

.sticky-bottom {
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 1rem;
  text-align: center;
}

.meta-data-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%; /* Almost full width */
  max-width: 1100px; /* Optional max width for large screens */
  margin: 1rem auto; /* Center the container with space at the top and bottom */
  padding: 2rem;
  background-color: white;
  border-radius: 20px; /* Rounder corners */
  box-shadow: 0 4px 6px rgba(12, 12, 12, 0.1);
  text-align: center;
  box-sizing: border-box;
}

.meta-data {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.policy-row {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #7357D9;
  word-wrap: break-word;
  width: 100%;
  text-align: center;
  margin: 0.5rem 0;
  font-size: 1.5rem;
}

.label {
  font-weight: bold;
  margin-right: 0.5rem;
  color: #333;
}

.policy-text {
  color: #7357D9;
}

.photos-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  height: 30%;
  max-height: 30%;
}

.parent-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%; /* Full viewport height */
  padding: 1rem; /* Padding around the entire container */
}

/* Arrow buttons styling */
.swipe {
  font-size: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #7357D9;
}

.swipe:hover {
  color: #5743D3;
}
</style>

