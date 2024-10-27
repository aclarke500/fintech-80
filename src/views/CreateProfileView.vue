<template>
  <div class="create-profile">
    <h1>Create Profile</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="form.name" required>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email" required>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="form.password" required>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const form = reactive({
  name: '',
  email: '',
  password: ''
});

const submitForm = () => {
  // Handle form submission
  console.log('Form submitted:', form);
};
</script>

<style scoped>
.create-profile {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: antiquewhite;
}

.create-profile h1 {
  text-align: center;
}

.create-profile form div {
  margin-bottom: 15px;
}

.create-profile label {
  display: block;
  margin-bottom: 5px;
}

.create-profile input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

.create-profile button {
  width: 100%;
  padding: 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.create-profile button:hover {
  background-color: #0056b3;
}
</style>
