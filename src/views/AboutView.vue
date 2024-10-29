<template>
  <div class="landing-page">
    <div
      v-for="section in sections"
      :key="section.name"
      :class="['card', { active: activeSection === section.name, inactive: activeSection && activeSection !== section.name }]"
      :style="{ backgroundImage: `linear-gradient(135deg, #7357D9, #fc575e), url(${section.image})` }"
      @click="setActiveSection(section.name)"
    >
      <h2 :class="['card-title', { 'active-title': activeSection === section.name }]">{{ section.title }}</h2>
      <div v-if="activeSection === section.name" class="card-content">
        <h3>{{ section.heading }}</h3>

        <!-- Use v-for to loop over the array of descriptions -->
        <h4 v-for="(desc, index) in section.description" :key="index">{{ desc }}</h4>

        <button v-if="section.button" class="btn btn-cta" @click="openForm()">{{ section.button }}</button>
      </div>
    </div>
  </div>
</template>



<script setup>
import { ref } from 'vue';
import router from '@/router';

const activeSection = ref('');
const sections = ref([
  {
    name: 'hero',
    title: 'Insure your journey',
    heading: 'You are our priority',
    description: ['Your autonomous vehicle with best customized insurance plans designed for autonomous science.'],
    button: 'Get a Quote',
    // image: '@/assets/cars.jpg'
  },
  {
    name: 'features',
    title: 'Why Choose us?',
    // heading: 'Best Policy Management',discard the heading 
    description: [
      'AI-Powered Policy Generation',
      'Dynamic Premiums for Pricing Smart',
      'Simplified Customer Journey'
    ],
    // image: '@/assets/features.jpg'
  },
  {
    name: 'howItWorks',
    title: 'How it Works',
    heading: 'AI For Dynamic Policy',
    description: ['Every driver, vehicle, and journey is unique, and our dynamic policy will help you figure that out.'],
    // image: '@/assets/how_it_works.jpg'
  },
  {
    name: 'testimonials',
    title: 'Testimonials',
    heading: 'What Our Customers Say',
    description: [
      '"Love their risk assessment, easy and safe!"',
      '"Flexible coverage is buget friendly!"',
      '"Cool quick claims management"'
    ],
    // image: '@/assets/testimonials.jpg'
  },
  {
    name: 'aboutUs',
    title: 'About Us',
    heading: 'Policy Royale',
    description: [
      'We are Data Queens, and our Policy Royale is designed to empower clients worldwide with data-driven insights and solutions.',
      'Contact us at service@dataqueens.com and 20vpp@queensu.ca'
    ],
    // image: '@/assets/about_us.jpg'
  }
]);

const setActiveSection = (section) => {
  activeSection.value = activeSection.value === section ? '' : section;
};

function openForm() {
  router.push({ name: 'create-profile' });
}
</script>

<style scoped>
/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Landing Page Layout */
.landing-page {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
}

/* Card Style */
.card {
  position: relative;
  background-size: cover;
  background-position: center;
  border: 2px solid #1c38ce;
  color: white;
  display: flex;
  border-radius: 16px;
  flex-direction: column; /* Change to column to stack title and content */
  align-items: center;
  justify-content: center;
  padding: 25px; /* Increase padding for more space */
  height: 250px; /* Adjust height for better spacing */
  cursor: pointer;
  transition: all 0.3s ease;
  background-blend-mode: overlay; /* Ensures image blends with gradient */
}

/* Card Title Styling */
.card-title {
  font-size: 1.2rem;
  transition: font-size 0.3s ease;
  margin-bottom: 5px; /* Add space below title */
}

/* Enlarge title when card is active */
.card-title.active-title {
  font-size: 2rem;
}

.card-content {
  text-align: center;
  opacity: 0.9;
  font-size: 1rem;
  margin-top: 10px; /* Add space above the content */
}

.card.active {
  height: 400px; /* Increase height for active card */
  z-index: 10;
}

.card.inactive {
  opacity: 0.6;
  height: 200px; /* Adjust height for inactive card */
}

/* Responsive Font Adjustment */
.card-title,
.card-content {
  font-size: clamp(1rem, 1.2vw, 1.5rem);
}

.card-content h3 {
  margin-top: 10px;
  font-size: 1.3rem;
  margin-bottom: 35px;
}
.card-content h4 {
  font-size: 1rem;
  margin-top: 15px; 
}

.card-content p {
  font-size: 1rem;
  margin: 20 px 0; /* Add margin for spacing */
}

.card-content button {
  margin-top: 25px;
}

/* Media Queries */
@media (max-width: 768px) {
  .landing-page {
    grid-template-columns: 1fr;
  }

  .card {
    height: 200px; /* Adjust height for smaller screens */
  }

  .card.active {
    height: 350px; /* Adjust height for active card */
  }
}

.btn-cta {
    display: inline-block;
    padding: 15px 30px;
    font-size: 1.2rem;
    background-color: rgb(134, 64, 70);
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.2s, background-color 0.2s;
}

.btn-cta:hover {
    background-color: #ff9b21;
    transform: scale(1.05);
}

@media (max-width: 768px) {
    .btn-cta {
        font-size: 1rem;
        padding: 12px 24px;
    }
}

</style>
