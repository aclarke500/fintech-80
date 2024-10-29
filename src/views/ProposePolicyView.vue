<template>
  <PolicyModal v-if="state.showPolicyModal" :policy="state.selectedPolicy" :policyText="state.selectedPolicy.policyText"
    :index="state.indexOfSelectedPolicy" @close="state.showPolicyModal = false" />

  <Policy v-if="state.selectedPolicy" :policy="state.selectedPolicy" :index="state.indexOfSelectedPolicy"
    @swipe="(d) => swipeCards(d)" @openModal="() => openPolicyModal()" @remove="(idx) => removePolicyOption(idx)" />
</template>
<script setup>
import { onMounted, reactive, computed } from 'vue';
import { useRouter } from 'vue-router';
import store from '@/store';
import Policy from '@/components/Policy.vue';
import PolicyModal from '@/components/PolicyModal.vue';

const router = useRouter();

const state = reactive({
  showPolicyModal: false,
  selectedPolicy: null,
  // auto update the index when selected policy changes
  indexOfSelectedPolicy: computed(() => state.policies.indexOf(state.selectedPolicy)),
  policies: [
    {
      policyName: 'umbrella',
      name: 'John A MacDonald',
      carModel: 'Tesla Model Y',
      aiModel: 'Elon Musk FSD',
      policyText: "This is a sample policy text. It will look better soon. On a chilly autumn morning, Sarah was running late for work..."
    },
    {
      policyName: 'cheap',
      name: 'Jane Smith',
      carModel: 'Ford Mustang',
      aiModel: 'Ford Co-Pilot360',
      policyText: "This is another sample policy text. Jane loves her Mustang and uses the Co-Pilot360 to make her drives safer. One evening, a deer suddenly appeared on the road, and the AI-assisted braking saved her just in time."
    },
    {
      policyName: 'balance',
      name: 'Alice Johnson',
      carModel: 'BMW X5',
      aiModel: 'BMW Driving Assistant Professional',
      policyText: "Alice frequently commutes to the city. Her BMW's Driving Assistant helps her stay relaxed even in heavy traffic. On one particular rainy day, the assistant detected a potential collision and alerted her in advance, avoiding an accident."
    }
  ]
});

console.log(store.formClient)


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

function removePolicyOption(policyIndex) {
  if (state.policies.length === 1) {
    router.push({ name: 'create-profile' });
    return;
  }
  // Remove the policy from the array
  state.policies.splice(policyIndex, 1);

  // Check if selectedPolicy is still in the array
  if (!state.policies.includes(state.selectedPolicy)) {
    if (state.policies.length > 0) {
      // Set to the next available policy or the last one if none left at the index
      state.selectedPolicy = state.policies[policyIndex % state.policies.length];
    } else {
      // Set to null if no policies are left
      state.selectedPolicy = null;
    }
  }
}

function openPolicyModal() {
  state.showPolicyModal = true;
}


onMounted(async () => {
  state.selectedPolicy = state.policies[0];

  // Handle cases where no data is available
  if (!store.formClient) {
    return;
  }

  // JSON stringify for the call
  const data = JSON.stringify({ 
    term: JSON.stringify(store.formClient)
  });
  console.log(data)
  const url = 'https://dataqueens-webapp-gabybrenhcefegak.canadacentral-01.azurewebsites.net/search';

  // Fetch request with POST method and body
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: data // Move body here
  })
    .then(response => response.json())
    .then(data => {
      console.log("Success:", data);
    })
    .catch(error => {
      console.error("Error:", error);
    });
});

</script>
<style scoped>
p {
  color: red;
}

h1 {
  color: white;
}
</style>