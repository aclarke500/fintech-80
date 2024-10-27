<template>
  <div class="create-profile">
    <h1>Create Profile</h1>
    <form @submit.prevent="submitForm">
      <div class="form-row">
        <label class="label-name" for="name">Name:</label>
        <input type="text" id="name" v-model="form.name" required>
      </div>
      <div class="form-row">
        <label class="label-email" for="email">Email:</label>
        <input type="email" id="email" v-model="form.email" required>
      </div>
      <div class="form-row">
        <label class="label-password" for="password">Password:</label>
        <input type="password" id="password" v-model="form.password" required>
      </div>
      <div class="form-row">
        <label class="label-address" for="address">Address:</label>
        <input type="text" id="address" v-model="form.address" required>
      </div>
      <div class="form-row">
        <label class="label-phone" for="phone">Phone:</label>
        <input type="tel" id="phone" v-model="form.phone" required>
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
  password: '',
  address: '',
  phone: ''
});

const submitForm = () => {
  // Handle form submission
  console.log('Form submitted:', form);
};
</script>

<style scoped>

/* the create profile box */
.create-profile {
  max-width: 100%;
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 5px;
  background-color: #2e2e2e;
  color: rgb(243, 239, 244);
  display: flex;
  flex-direction: column;
}

/*  max-width */
/* .create-profile {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 5px;
  background-color: #2e2e2e;
  color: antiquewhite;
  display: flex;
  flex-direction: column;
} */

.create-profile h1 {
  text-align: center;
}

.create-profile .form-row {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}



.create-profile label {
  flex: 1;
  margin-right: 10px;
}

.create-profile input {
  flex: 2;
  padding: 8px 0;
  background-color: transparent;
  color: white;
  border: none;
  border-bottom: 2px solid #ccc;
  box-sizing: border-box;
  width: 100%;
  transition: border-color 0.3s;
}

.create-profile input:focus {
  outline: none;
  border-bottom-color: #1f74cf;
}

.label-name {
  color: #ff5733;
}

.label-email {
  color: #33c1ff;
}

.label-password {
  color: #28a745;
}

.label-address {
  color: #ff33a2;
}

.label-phone {
  color: #ffbb33;
}

.create-profile button {
  padding: 15px;
  background: linear-gradient(135deg, #1f74cf, #1c38ce);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  transition: background 0.3s, transform 0.2s;
  margin-top: 20px;
}

.create-profile button:hover {
  background: linear-gradient(135deg, #1c38ce, #1f74cf);
  transform: scale(1.05);
}

.create-profile button:active {
  transform: scale(0.98);
}
</style>
