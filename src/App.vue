<template>
  <nav>
    <router-link class="router-link" to="/">Home</router-link> |
    <router-link class="router-link" to="/about">About</router-link> | 
    <router-link class="router-link" to="/create-profile">Create Profile</router-link> | 
    <router-link class="router-link" to="/propose-policy">Propose Policy</router-link>
  </nav>
  <router-view/>
</template>

<style>
html, body, #app {
  height: 100%;
  margin: 0;
}
.router-link {
  color: white;
  text-decoration: none;
  margin: 0 1/4rem 0 1/4rem;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: rgb(28, 43, 108) url('https://th.bing.com/th/id/R.ef9e86e9dccc6897b7cb42cdb1d432cb?rik=Lk5mNetJWhJOWA&pid=ImgRaw&r=0');

  /* background-color: rgb(28, 43, 108); */
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
