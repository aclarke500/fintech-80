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
      <!-- Carousel Field -->
      <div class="form-group">
        <label>Select Car Model</label>
        <div class="carousel-container">
          <!-- <button @click="prevItem" class="carousel-control">‹</button> -->
          
          <!-- Display the current car model image -->
          <div class="carousel-item">
            <img :src="carModels[currentIndex].image" :alt="carModels[currentIndex].name" />
          </div>
          
          <!-- <button @click="nextItem" class="carousel-control">›</button> -->
        </div>

        <!-- Car model name below the carousel -->
        <select v-model="currentIndex" @change="updateSelectedCarModel" class="car-select">
          <option v-for="(car, index) in carModels" :value="index" :key="car.name">
            {{ car.name }}
          </option>
        </select>

        <input type="hidden" v-model="form.selectedCarModel" />
      </div>

      <div class="form-group">
        <label>Number of Passengers</label>
        <input type="number" placeholder="Number of Passengers" v-model="form.numofpassengers" required />
      </div>
      <div class="form-group">
        <label>Auto Year</label>
        <input type="text" placeholder="Auto Year" v-model="form.autoyear" required />
      </div>
      <div class="form-group">
        <label>Address</label>
        <input type="text" placeholder="Address" v-model="form.address" required />
      </div>
      <div class="form-group">
        <label>Relationship Status</label>
        <textarea placeholder="Relationship Status" v-model="form.relationship" required></textarea>
      </div>      
      <div class="form-group">
        <label @click="toggleAccidentDetails">
          Describe Previous Accidents
          <span class="toggle-icon">{{ showAccidentDetails ? '-' : '+' }}</span>
        </label>
        <textarea 
          placeholder="Describe Previous Accidents" 
          v-model="form.prevaccidents" 
          required>
        </textarea>
        
        <div v-if="showAccidentDetails" class="accident-details">
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
        </div>
        
      </div>
      <button type="submit" class="submit-button">Send</button>
    </form>
  </div>
</template>

<!-- TODO modify this for all fields -->
<script>
import store from '@/store';

export default {
  data() {
    return {
      accidentSections:[],
      form: {
        fullName: 'Yuanzhu Chen',
        age: '38',
        gender: 'Male',
        selectedCarModel: 'Tesla Model Y',
        numofpassengers: '4',
        autoyear: '2021',
        address: '123 Main St, San Francisco, CA',
        relationship: 'Married',
        //add the select part
        prevaccidents: 'T-boned on the highway while merging',
        conditionsofaccidents: 'Car was written off, but no injuries found to not be at fault',
        crashcause: 'Driver was texting and driving',
        driverless: 'Yes',
        // Additional form fields...
    showAccidentDetails: false, // Variable to control the toggle

      },
      carModels: [
        { name: "Tesla Model X", image: "https://i.ibb.co/VtZHmS5/teslax-Small.jpg" },
        { name: "Wuling Hongguang Mini", image: "https://i.ibb.co/vVKsdbb/wuling-Small.png" },
        { name: "BYD Dolphin", image: "https://i.ibb.co/pPXHdfX/bydSmall.jpg" },
      ], // Array of car objects with names and image URLs // List of items for the carousel
      currentIndex: 0, // Track the current index in the carousel
    };
  },
  computed:{
    showAccidentDetails(){
      // !! casts to boolean, we want to know if there is there
      return !!this.form.prevaccidents.length;
    }
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
      // API CALL WILL GO HERE
      store.formClient = this.form;
      this.$router.push({name:'propose-policy'}); // Ensure routing is working as intended

    },
    prevItem() {
      // Move to the previous item in the carousel
      this.currentIndex = (this.currentIndex - 1 + this.carModels.length) % this.carModels.length;
    },
    toggleAccidentDetails() {
      this.showAccidentDetails = !this.showAccidentDetails;
    },
    addAccidentSection() {
      this.accidentSections.push({
        prevaccidents: '',
        conditionsofaccidents: '',
        crashcause: '',
        driverless: ''
      });
    },
    // add toggleaccident section
    nextItem() {
      // Move to the next item in the carousel
      this.currentIndex = (this.currentIndex + 1) % this.carModels.length;
    }
  }
};

</script>

<style scoped>

label {
  font-size: 1.3rem;
  color: #5743D3; /* Matching color with the submit button */
  font-weight: bold;
  display: block;
  margin-bottom: 0.25rem;
  letter-spacing: 0.05em;
  padding-left: 10px;
}

.contact-form {
  min-width: 60%;
  margin: 30px 20px;
  padding: 30px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(12, 12, 12, 0.1);
  text-align: center;
}

.toggle-icon {
  cursor: pointer;
  margin-left: 5px;
  font-weight: bold;
  color: #031bee;
}

.accident-details {
  margin-top: 1rem;
}

.add-button {
  background-color: #8a4af3;
  color: white;
  padding: 0.5rem;
  border-radius: 25px;
  cursor: pointer;
  margin-top: 1rem;
  border: none;
}

.add-button:hover {
  background-color: #6e38c1;
}
h2 {
  font-size: 1.8rem;
  color: #d3549e;;
  margin-bottom: 1.8rem;
  justify-content: center;
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
  resize: vertical; /* Allows the user to adjust the height of the textarea */
  width: 100%;
  padding: 0.75rem;
  border-radius: 25px;
  border: 1px solid #ddd;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s ease;
  box-sizing: border-box;
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
  background-color: #7357D9;
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
  background-color: #5743D3;
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
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
  text-align: left;
  max-width: 70%;
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
  min-width: 80%;
  text-align: center;
  background-color: #fff;
}

.carousel-item img {
  width: 200px; 
  height: 200px;
  border-radius: 8px;
}

.carousel-text {
  text-align: center;
  margin-top: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: #333;
}

.car-select {
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 25px;
  border: 1px solid #ddd;
  box-sizing: border-box;
  margin-top: 0.5rem;
}
</style>