<template>
  <div id="policyModal" class="modal">
    <div class="modal-content">
      <div class="modal-top">
        <div class="title">{{ props.policy.section_title }} Policy</div>
        <div class="close" @click="closeModal">&times;</div>
      </div>
      <div class="modal-body">
        <div class="section" v-for="(section) in props.policy.sections" :key="section">
          <div class="section-title">
            <h2>{{section.section_title}}</h2>
          </div>
          <div class="section-content">

            <p>{{ section.section_content }}</p>
          </div>
        </div>
        <!-- <p>{{ props.policy.sections }}</p> -->
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive } from 'vue';
const props = defineProps(['policyText', 'index', 'policy']);
const emits = defineEmits(['close']);

function closeModal() {
  emits('close');
}

</script>
<style scoped>
/* The Modal (background) */
.modal {
  /* display: none; */
  /* Hidden by default */
  position: fixed;
  /* Stay in place */
  z-index: 1;
  /* Sit on top */
  left: 0;
  top: 0;
  width: 100%;
  /* Full width */
  height: 100%;
  /* Full height */
  overflow: auto;
  /* Enable scroll if needed */
  background-color: rgb(0, 0, 0);
  /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4);
  /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  /* 15% from the top and centered */
  padding: 1.5em;
  border: 1px solid #888;
  border-radius: 1rem;
  width: 80%;
  /* Could be more or less, depending on screen size */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  animation-name: animatetop;
  animation-duration: 0.4s;
}

.modal-top {
  display: flex;
  margin-bottom: 30px;
  font-size: 20px;
}

.modal-top .title {
  padding-top: 10px;
  color: #2c3e50;
  text-transform: uppercase;
}

.modal-top>div:first-of-type {
  flex: 1;
}

.modal-top .close {
  color: #aaa;
}

.modal-top .close:hover {
  color: #673ab7;
  cursor: pointer;
}

/* Add Animation */
@keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }

  to {
    top: 0;
    opacity: 1;
  }
}


</style>