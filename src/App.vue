<template>
  <nav>
    <router-link class="router-link" to="/landing-page">Home</router-link> |
    <router-link class="router-link" to="/about">About</router-link> | 
    <router-link class="router-link" to="/create-profile">Create Profile</router-link> | 
    <router-link class="router-link" to="/propose-policy">Propose Policy</router-link> | 
    <router-link class="router-link" to="/dashboard">Dashboard</router-link>
  </nav>
  <router-view/>
</template>

<style>
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
</style>
