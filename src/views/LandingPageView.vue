<template>
  <div class="banking-page">
    <!-- Logo and title -->
    <div class="content">
      <div class="logo-container">
        <div class="logo">♛</div>
      </div>
      <h1 class="title">Policy Royale</h1>
      <h2 class="subtitle">Welcome back</h2>
      <p class="description">
        Your AI-Powered Underwriting Agent
      </p>

      <!-- Pagination dots -->
      <div class="pagination-dots" @click="increasePage()">
        <span 
          v-for="(dot, index) in descriptions.length" 
          :key="index" 
          class="dot" 
          :class="{ active: currentPage === index }" 
          @click="setPage(index)"
        ></span>
      </div>

      <!-- Create Profile Button -->
      <button class="prf-create-btn" @click="goToCreateProfile">Create Profile</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SmartBankingView',
  data() {
    return {
      currentPage: 0,
      descriptions: [
        "Your all in one policy creation and management solution.",
        "Data Queens, always reliable!!",
        "The BEST AI generation policy for AV insurance in the world."
      ]
    };
  },
  computed: {
    currentDescription() {
      return this.descriptions[this.currentPage];
    }
  },
  methods: {
    increasePage(){
      if (this.currentPage < 2){
        this.currentPage++;
      } else{
        this.currentPage = 0;
      }
    },
    setPage(index) {
      this.currentPage = index;
    },
    goToCreateProfile() {
      this.$router.push('/create-profile');
    }
  }
};
</script>

<style scoped>
/* Gradient background for the main container */
.banking-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  color: #5743D3;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
}

/* Top bar styling */
.top-bar {
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 0.9rem;
  color: white;
  margin-bottom: 20px;
}

.close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
}

/* Logo styling */
.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}

.logo {
  background: linear-gradient(to bottom, #7357D9, #fc575e);
  width: 7rem;
  height: 7rem;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4.5rem;
  font-weight: bold;
  color: white;
}

/* Title and subtitle */
.title {
  font-family: Helvetica, Arial, sans-serif;
  padding-bottom: 4rem;
  color: white;
  font-size: 3.8rem;
  font-weight: 750;
  margin: 20px 0 10px;
}

.subtitle {
  font-size: 1.2rem;
  margin-bottom: 1.2rem;
}

/* Description text */
.description {
  font-size: 1.5rem;
  padding: 0 20px;
  color: rgba(255, 255, 255, 0.8);
}

/* Pagination dots */
.pagination-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 20px 0;
}

.dot {
  width: 8px;
  height: 8px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  cursor: pointer;
}

.dot.active {
  background-color: white;
}

/* create profile button styling */
.prf-create-btn {
  font-family: Arial, Helvetica, sans-serif;
  background: linear-gradient(to right, #7357D9, #fc575e);
  border: none;
  border-radius: 25px;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  padding: 1rem 3rem;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease;
}

.prf-create-btn:hover {
  background: linear-gradient(to right, #fc575e, #f7b42c);
}
</style>
