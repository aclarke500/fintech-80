<template>
  <Policy v-if="state.selectedPolicy" :policy="state.selectedPolicy" :index="state.indexOfSelectedPolicy"
  @swipe="(d)=>swipeCards(d)"/>
</template>
<script setup>
import { onMounted, reactive, computed } from 'vue';
import Policy from '@/components/Policy.vue';

const state = reactive({
  selectedPolicy: null,
  // auto update the index when selected policy changes
  indexOfSelectedPolicy: computed(() => state.policies.indexOf(state.selectedPolicy)), 
  policies: [
    {
      name: 'John A MacDonald',
      carModel: 'Tesla Model Y',
      aiModel: 'Elon Musk FSD',
      policyText: "This is a sample policy text. It will look better soon. On a chilly autumn morning, Sarah was running late for work..."
    },
    {
      name: 'Jane Smith',
      carModel: 'Ford Mustang',
      aiModel: 'Ford Co-Pilot360',
      policyText: "This is another sample policy text. Jane loves her Mustang and uses the Co-Pilot360 to make her drives safer. One evening, a deer suddenly appeared on the road, and the AI-assisted braking saved her just in time."
    },
    {
      name: 'Alice Johnson',
      carModel: 'BMW X5',
      aiModel: 'BMW Driving Assistant Professional',
      policyText: "Alice frequently commutes to the city. Her BMW's Driving Assistant helps her stay relaxed even in heavy traffic. On one particular rainy day, the assistant detected a potential collision and alerted her in advance, avoiding an accident."
    },
    {
      name: 'Bob Williams',
      carModel: 'Audi Q7',
      aiModel: 'Audi Adaptive Cruise Control',
      policyText: "Bob often takes road trips with his family. On a long stretch of highway, the Adaptive Cruise Control maintained a safe distance from vehicles, allowing Bob to enjoy the drive more comfortably and focus on the scenery."
    }
  ]
});


function swipeCards(direction) {
  if (direction === 'left') {
    if (state.indexOfSelectedPolicy === 0) {
      state.selectedPolicy = state.policies[state.policies.length - 1];
    } else {
      state.selectedPolicy = state.policies[state.indexOfSelectedPolicy - 1];
    }
  } else {
    if (state.indexOfSelectedPolicy === state.policies.length - 1) {
      state.selectedPolicy = state.policies[0];
    } else {
      state.selectedPolicy = state.policies[state.indexOfSelectedPolicy + 1];
    }
  }
}



onMounted(() => {
  state.selectedPolicy = state.policies[0]
})
</script>
<style scoped>
p {
  color: red;
}

h1 {
  color: white;
}
</style>