<template>
  <div class="landing-page">
    <!-- Hero Bubble -->
    <div
      class="bubble bubble-hero"
      @click="setActiveSection('hero')"
      :class="{ active: activeSection === 'hero', inactive: activeSection && activeSection !== 'hero' }"
      style="background-image: url('@/assets/cars.jpg');"
    >
      <h2>Insure your journey</h2>
      <div v-if="activeSection === 'hero'" class="bubble-content">
        <div class="hero-content">
          <h1>Your Future of Driving</h1>
          <p>Protect your autonomous vehicle with customized insurance plans designed for autonomous science.</p>
          <button class="btn btn-warning" @click="openForm()">Get a Quote</button>
        </div>
      </div>
    </div>

    <!-- Features Bubble -->
    <div
      class="bubble bubble-features"
      @click="setActiveSection('features')"
      :class="{ active: activeSection === 'features', inactive: activeSection && activeSection !== 'features' }"
    >
      <h2>Why Choose us?</h2>
      <div v-if="activeSection === 'features'" class="bubble-content">
        <h2>Best policy management</h2>
        <div class="row">
          <div class="col feature">
            <i class="fas fa-car-crash"></i>
            <h3>lots of training data</h3>
            <p>The best algorithm in the whole world!!</p>
          </div>
          <div class="col feature">
            <i class="fas fa-shield-alt"></i>
            <h3>You gotna give yourself an opportunity</h3>
            <h2>Now!!</h2>
          </div>
        </div>
      </div>
    </div>

    <!-- How It Works Bubble -->
    <div
      class="bubble bubble-how-it-works"
      @click="setActiveSection('howItWorks')"
      :class="{ active: activeSection === 'howItWorks', inactive: activeSection && activeSection !== 'howItWorks' }"
    >
      <h2>How it works</h2>
      <div v-if="activeSection === 'howItWorks'" class="bubble-content">
        <h2>1. Get a quote</h2>
        <div class="steps">
          <div class="step">
            <h2>2. Contact us</h2>
            <p>But you can do step 2 first, and we will help you complete step 1.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Testimonials Bubble -->
    <div
      class="bubble bubble-testimonials"
      @click="setActiveSection('testimonials')"
      :class="{ active: activeSection === 'testimonials', inactive: activeSection && activeSection !== 'testimonials' }"
    >
      <h2>Testimony</h2>
      <div v-if="activeSection === 'testimonials'" class="bubble-content">
        <h2>What Our Customers Say</h2>
        <div class="testimonials-content">
          <div class="testimonial">
            <p>"Data queens are the best"</p>
            <span>- We Won</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import router from '@/router';

const activeSection = ref('hero'); // Set the default active bubble

const setActiveSection = (section) => {
  activeSection.value = activeSection.value === section ? '' : section;
};

function openForm(){
  router.push({ name: 'create-profile' });
}
</script>

<style scoped>
/* Basic reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Landing page container */
.landing-page {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
}

/* Bubble Styles */
.bubble {
  border: 2px solid #1c38ce;
  border-radius: 50%;
  padding: 30px;
  width: 200px;
  height: 200px;
  text-align: center;
  cursor: pointer;
  margin: 20px;
  position: absolute;
  transition: transform 0.3s, width 0.3s, height 0.3s;
  background-color: rgba(182, 100, 220, 0.712);
  background-size: cover;
  background-position: center;
  color: #fff;
}

.bubble.active {
  width: 350px;
  height: 350px;
  z-index: 10;
}

.bubble.inactive {
  width: 100px;
  height: 100px;
  opacity: 0.6;
}

.bubble:hover {
  transform: scale(1.05);
}

.bubble-content {
  margin-top: 20px;
}

/* Uneven Bubble Positions */
.bubble-hero {
  top: 50px;
  left: 20%;
}

.bubble-features {
  top: 200px;
  right: 30%;
}

.bubble-how-it-works {
  top: 400px;
  left: 15%;
}

.bubble-testimonials {
  top: 600px;
  right: 25%;
}

/* Responsive Design */
@media (max-width: 768px) {
  .bubble {
    position: static;
    margin: 10px auto;
    width: 150px;
    height: 150px;
  }
}
</style>
