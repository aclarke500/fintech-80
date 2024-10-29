<template>
  <nav>
    <div class="nav-items">
      <div class="logo-container">
        <div class="logo nav-logo">♛</div>
      </div>
      <div class="links-container">
        <router-link class="router-link" to="/landing-page">Home</router-link> |
        <router-link class="router-link" to="/about">About</router-link> | 
        <router-link class="router-link" to="/create-profile">Create Profile</router-link> | 
        <router-link class="router-link" to="/propose-policy" @click="clear">Propose Policy</router-link> | 
        <router-link class="router-link" to="/dashboard">Dashboard</router-link>
      </div>
      
    </div>
  </nav>
  <router-view/>
</template>
<script setup>
import store from './store';
function clear() {
  store.formClient = null;
}
</script>
<style>


/* Navbar styling */
.nav-items {
  font-size: 1.2rem;
  display: flex;
  align-items: center; /* Center items vertically */
}

.nav-logo {
  margin-right: 1rem;
}

/* Logo styling */
.logo-container {
  display: flex;
  align-items: center;
  
}

.logo {
  background: linear-gradient(to bottom, #7357D9, #fc575e);
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.75rem;
  font-weight: bold;
  color: white;
}

html, body {
  height: 100%;
  margin: 0;
  background-color: #5743D3; /* Ensures the background color extends */
}

#app {
  min-height: 100vh; /* Ensures app container takes at least full viewport height */
  display: flex;
  flex-direction: column;
  font-family: Arial, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* background: rgb(28, 43, 108) url('https://static.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg'); */

  /* background-color: rgb(28, 43, 108); */
}


.router-link {
  color: #5743D3;
  text-decoration: none;
  margin: 0 0.25rem;
}

nav {
  padding: 30px;
  background-color: white; /* Adds background color to the navbar */
  
}

nav a {
  font-weight: bold;
  color: #5743D3;

}

nav a.router-link-exact-active {
  color: #d3549e;
}

.nav-items {
  display: flex;
}
</style>
