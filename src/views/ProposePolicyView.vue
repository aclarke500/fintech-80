<template>
  <h1>Policy</h1>
  <p>{{ state.policyText }}</p>
</template>
<script setup>
import { reactive } from 'vue';
const state = reactive({
  name: '',
  policyText:"This is a sample policy text. It will look better soon. On a chilly autumn morning, Sarah was running late for work. She quickly grabbed her keys, rushed out the door, and hopped into her car. The roads were slick from an early morning rain, and a fog had settled over the streets. As she approached an intersection, a sudden movement on her left caught her eye—a truck was speeding through a red light, barreling toward her. On a chilly autumn morning, Sarah was running late for work. She quickly grabbed her keys, rushed out the door, and hopped into her car. The roads were slick from an early morning rain, and a fog had settled over the streets. As she approached an intersection, a sudden movement on her left caught her eye—a truck was speeding through a red light, barreling toward her.On a chilly autumn morning, Sarah was running late for work. She quickly grabbed her keys, rushed out the door, and hopped into her car. The roads were slick from an early morning rain, and a fog had settled over the streets. As she approached an intersection, a sudden movement on her left caught her eye—a truck was speeding through a red light, barreling toward her."
})

</script>
<style scoped>
p{
  color: red;
}
  </style>