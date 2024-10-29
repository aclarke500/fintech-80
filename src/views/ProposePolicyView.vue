<template>
  <PolicyModal v-if="state.showPolicyModal" :policy="state.selectedPolicy" :index="state.indexOfSelectedPolicy"
    @close="state.showPolicyModal = false" />
  <LoadingWheel v-if="state.isLoading" :messages="true"/>
  <Policy v-if="state.selectedPolicy" :policy="state.selectedPolicy" :index="state.indexOfSelectedPolicy"
    @swipe="(d) => swipeCards(d)" @openModal="() => openPolicyModal()" @remove="(idx) => removePolicyOption(idx)" />
</template>
<script setup>
import { onMounted, reactive, computed } from 'vue';
import { useRouter } from 'vue-router';
import store from '@/store';
import Policy from '@/components/Policy.vue';
import PolicyModal from '@/components/PolicyModal.vue';
import LoadingWheel from '@/components/LoadingWheel.vue';

const router = useRouter();

const state = reactive({
  isLoading: false,
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
  // mock data
  if (!store.formClient) {
    const localPolicy = {
      metadata: {
        AI_safety_score: 90,
        deductible: 750,
        driver_behaviour: "Highly educated and generally safe, but has a history of high-speed accidents.",
        price: 200
      },
      section_title: "Total Insurance",
      sections: [
        {
          section_content: "Comprehensive coverage including collision, liability, underinsured motorist coverage, and AV-specific clauses for autonomous operations. Includes personal injury protection with high limits for medical expenses and lost wages.",
          section_title: "Coverage and Clauses"
        },
        {
          section_content: "Full liability coverage with high limits per person and per accident. The policy covers all autonomous and manual operations with no distinction in responsibility, ensuring peace of mind for the user.",
          section_title: "Liability and Responsibilities"
        },
        {
          section_content: "Premium pricing with flexible payment options including Monthly, Quarterly, Semi-Annually, and Annually with a 5% discount on annual payments. Additional discounts for safe driving, multi-vehicle, and educational achievements.",
          section_title: "Pricing and Payment"
        }
      ]
    };
    state.isLoading = false;
    state.selectedPolicy = localPolicy;
    state.policies = [localPolicy];
    return;
  }
  //
  state.isLoading = true;
  const data = JSON.stringify({
    term: JSON.stringify(store.formClient)
  });

  //   state.isLoading = false;



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
      alert('backend worked')
      // we got the data
      state.isLoading = false;
      state.selectedPolicy = data.sections[0];
      state.policies = data.sections;
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