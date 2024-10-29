<template>
  <div class="parent-container">


    <div class="meta-data-container">
      <button class="swipe" @click="swipe('left')">
        < </button>
          <!-- display of the policy high level data -->
          <div class="meta-data">
            <div class="policy-row">
              <!-- +1 to account for 0 based indexing -->
              <h1>The {{ state.title }}</h1>
            </div>

            <div class="photos-container">
              <img v-if="mapTitleToImgUrl(state.title) == 'umbrella'" src="../assets/umbrella.png" alt="plus"
                @click="openPolicyModal" />
              <img v-if="mapTitleToImgUrl(state.title) == 'cheap'" src="../assets/cheap.png" alt="plus"
                @click="openPolicyModal" />
              <img v-if="mapTitleToImgUrl(state.title) == 'balance'" src="../assets/balance.png" alt="plus"
                @click="openPolicyModal" />
            </div>


            <div class="policy-row">
              <div class="policy-text"> {{ state.price }}</div>
            </div>

            <div class="policy-row">
              <div class="policy-text">{{ state.deductible}}</div>
            </div>

            <div class="policy-row">
              <div class="policy-text">{{ state.aiSafetyScore }}</div>
            </div>


          </div>
          <button class="swipe" @click="swipe('right')">></button>

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

#policy-icon {
  color: #7357D9;
  height: 100px;
}

.tinder-button {
  color: #7357D9;
  height: 100px;
}

.button-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgb(27, 42, 59);
  padding: 1rem;
  border-radius: 1rem;
  width: 100%;
  height: 10%;
  border-top: 3px solid #7357D9;
}

.button-container button {
  flex: 1;
  max-width: 3rem;
  aspect-ratio: 1 / 1;
  background-color: white;
  border: black 1px solid;
  color: black;
  font-size: 1.5rem;
  text-align: center;
  padding: 0;
  cursor: pointer;
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
  width: 100%;
  margin: 30px 20px;
  padding: 30px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(12, 12, 12, 0.1);
  text-align: center;
}

.meta-data {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.meta-data-container button {
  flex: 1/4;
  background-color: rgba(255, 0, 0, 0);
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px;
  height: 1rem;
}

.policy-row {
  display: flex;
  flex: 3;
  align-items: center;
  justify-content: center;
  color: #7357D9;
  word-wrap: break-word;
  width: 100%;
  text-align: center;
}

.policy-text {
  color: #7357D9;
  margin: 0.5rem;
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
  margin: 0.5rem;
}

.parent-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
