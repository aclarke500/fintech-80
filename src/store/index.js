import { reactive } from "vue";

// global state of the entire app, do not abuse this
const store = reactive({
  formClient:null,
});


export default store;