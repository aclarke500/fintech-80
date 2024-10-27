<template>
  <div class="contact-form">
    <h2>User Profile Builder</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label>Full Name</label>
        <input type="text" placeholder="Full Name" v-model="form.fullName" required />
      </div>
      <div class="form-group">
        <label>Age</label>
        <input type="number" placeholder="Age" v-model="form.age" required />
      </div>
      <div class="form-group">
        <label>Gender</label>
        <input type="text" placeholder="Gender" v-model="form.gender" required />
      </div>
      <div class="form-group">
        <label>Select Car Model</label>
        <div class="carousel-container">
          <button @click="prevItem" class="carousel-control">‹</button>
          <div class="carousel-item">
            <img :src="carModels[currentIndex].image" :alt="carModels[currentIndex].name" />
            <p>{{ carModels[currentIndex].name }}</p>
          </div>
          <button @click="nextItem" class="carousel-control">›</button>
        </div>
        <input type="hidden" v-model="form.selectedCarModel" />
      </div>
      <div class="form-group">
        <label>Describe Previous Accidents</label>
        <textarea placeholder="Describe Previous Accidents" v-model="form.prevaccidents" required></textarea>
      </div>
      <div class="form-group">
        <label>Conditions of Accidents</label>
        <textarea placeholder="Conditions of Accidents" v-model="form.conditionsofaccidents" required></textarea>
      </div>
      <div class="form-group">
        <label>Crash Cause</label>
        <textarea placeholder="Crash Cause" v-model="form.crashcause" required></textarea>
      </div>
      <div class="form-group">
        <label>Driverless?</label>
        <textarea placeholder="Driverless?" v-model="form.driverless" required></textarea>
      </div>
      <div class="form-group">
        <label>Number of Passengers</label>
        <textarea placeholder="Number of Passengers" v-model="form.numofpassengers" required></textarea>
      </div>
      <div class="form-group">
        <label>Auto Year</label>
        <textarea placeholder="Auto year" v-model="form.autoyear" required></textarea>
      </div>
      <div class="form-group">
        <label>Address</label>
        <textarea placeholder="Address" v-model="form.address" required></textarea>
      </div>
      <div class="form-group">
        <label>Relationship Status</label>
        <textarea placeholder="Relationship Status" v-model="form.relationship" required></textarea>
      </div>
      <button type="submit" class="submit-button">Send</button>
    </form>
  </div>
</template>

<!-- TODO modify this for all fields -->
<script>
export default {
  data() {
    return {
      form: {
        fullName: '',
        email: '',
        phone: '',
        message: '',
      },
      carModels: [
        { name: "Tesla Model S", image: "https://th.bing.com/th/id/R.76c882edad7141df823d9a41b8c7820e?rik=NAn9mL%2fpwz%2fLNw&pid=ImgRaw&r=0" },
        { name: "Ford Mustang", image: "src\assets\bmwfront.png" },
        { name: "Chevrolet Camaro", image: "src\assets\bmwfront.png" },
        { name: "BMW i8", image: "src\assets\bmwfront.png" },
        { name: "Audi R8", image: "src\assets\bmwfront.png" }
      ], // Array of car objects with names and image URLs // List of items for the carousel
      currentIndex: 0, // Track the current index in the carousel
    };
  },
  watch: {
    currentIndex(newIndex) {
      // Update the selected car model when the current index changes
      this.form.selectedCarModel = this.carModels[newIndex];
    }
  },
  methods: {
    handleSubmit() {
      console.log("Form submitted", this.form);
      // Add your form submission logic here
    },
    prevItem() {
      // Move to the previous item in the carousel
      this.currentIndex = (this.currentIndex - 1 + this.carModels.length) % this.carModels.length;
    },
    nextItem() {
      // Move to the next item in the carousel
      this.currentIndex = (this.currentIndex + 1) % this.carModels.length;
    }
  }
};
</script>

<style scoped>
label {
  font-size: 0.85rem;
  color: black; /* Matching color with the submit button */
  font-weight: bold;
  display: block;
  margin-bottom: 0.25rem;
  letter-spacing: 0.05em;
  padding-left: 10px;
}
.contact-form {
  max-width: 400px;
  margin: 30px 20px;
  padding: 30px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h2 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1.8rem;
}

.form-group {
  margin-bottom: 1rem;
  text-align: left;
}

input[type="text"],
input[type="email"],
input[type="number"],
textarea {
  width: 100%;
  padding: 0.75rem;
  border-radius: 25px;
  border: 1px solid #ddd;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s ease;
  box-sizing: border-box;
}

textarea {
  resize: none;
  height: 100px;
}

input::placeholder,
textarea::placeholder {
  color: #b3b3b3;
}

input:focus,
textarea:focus {
  border-color: rgb(28, 43, 108);
}

.submit-button {
  width: 100%;
  padding: 0.75rem;
  border-radius: 25px;
  background-color: rgb(28, 43, 108);
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.submit-button:hover {
  background-color: rgb(28, 43, 108);
}

.submit-button::before {
  content: '🚀';
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
}

.contact-form {
  max-width: 400px;
  margin: 30px auto;
  padding: 40px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: left;
}

.carousel-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
}

.carousel-control {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #8a4af3;
  padding: 0 1rem;
}

.carousel-item {
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  border-radius: 25px;
  min-width: 150px;
  text-align: center;
  background-color: #fff;
}

.carousel-item img {
  width: 100px; 
  height: auto;
  border-radius: 8px;
}
</style>