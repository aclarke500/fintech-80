<template>
  <div class="parent-container">
    <div class="meta-data-container">
      <!-- Left arrow button -->
      <button class="swipe left" @click="swipe('left')">&lt;</button>
      
      <!-- Policy high-level data -->
      <div class="meta-data">
        <div class="policy-row">
          <h1>The Choices</h1>
        </div>

        <div class="photos-container">
          <img v-if="props.policy.title == 'total_insurance'" src="../assets/umbrella.png" alt="plus" @click="openPolicyModal" />
          <img v-if="props.policy.title== 'economy'" src="../assets/cheap.png" alt="plus" @click="openPolicyModal" />
          <img v-if="props.policy.title == 'balanced'" src="../assets/balance.png" alt="plus" @click="openPolicyModal" />
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

      <!-- Right arrow button -->
      <button class="swipe right" @click="swipe('right')">&gt;</button>
    </div>
  </div>
</template>



<script setup>
import { reactive, watch, } from 'vue';
import store from '@/store';
const props = defineProps(['policy', 'index']);
const emits = defineEmits(['swipe', 'openModal']);

console.log(store)

const state = reactive({
  m:props.policy.metadata,
  aiSafetyScore: props.policy.AI_safety_score,
  deductible: props.policy.metadata.deductible,
  price: props.policy.metadata.price,
  // title: props.policy.section_title,
  title:props.policy.title,
  // name:computed(()=>{
  //   if(props.title=='total_insurance') return 'Umbrella';
  //   if(props.title=='economy') return 'Economy';
  //   if(props.title=='balanced') return 'Compromise';
  // })

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

.photos-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  margin: 1rem 0;
}

.photos-container img {
  width: 20rem;  /* Fixed width for all images */
  height: 20rem; /* Fixed height for all images */
  object-fit: cover; /* Ensures images cover the given area without distortion */
  border-radius: 8px; /* Optional rounding for consistent styling */
}

.meta-data-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
  width: 95%;
  max-width: 1100px;
  margin: 1rem auto;
  padding: 2rem;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(12, 12, 12, 0.1);
  text-align: center;
  box-sizing: border-box;
}

.meta-data {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
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

.button-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1.5rem;
  width: 100%;
}

.button-container button {
  flex: 1;
  max-width: 4rem;
  width: 4rem;
  height: 4rem;
  background-color: white;
  color: black;
  font-size: 1.5rem;
  text-align: center;
  cursor: pointer;
  border-radius: 50%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.button-container button:hover {
  background-color: #e0e0e0;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

.parent-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 1rem;
}

/* Arrow buttons styling */
.swipe {
  font-size: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #7357D9;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.swipe.left {
  left: 1rem;
}

.swipe.right {
  right: 1rem;
}

.swipe:hover {
  color: #5743D3;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .meta-data-container {
    padding: 1rem;
    width: 100%;
  }

  .policy-row {
    font-size: 1.2rem;
  }

  .button-container {
    padding: 1rem;
  }

  .button-container button {
    max-width: 3rem;
    width: 3rem;
    height: 3rem;
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .meta-data-container {
    padding: 0.5rem;
  }

  .policy-row {
    font-size: 1rem;
    flex-direction: column;
  }

  .button-container button {
    max-width: 2.5rem;
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1rem;
  }
}
</style>