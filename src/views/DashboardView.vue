<template>
    <div class="chart-container">
        <Bar
            id="my-chart-id"
            :options="chartOptions"
            :data="chartData"
        />
    </div>
    
  </template>

<style scoped>
.chart-container {
    margin: 80px 20px; /* Adds space around the chart container */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Optional: Adjust the height as needed */
    background-color: white;
    padding: 20px; /* Optional: Adds some padding around the chart */
    border-radius: 8px; /* Optional: Rounds the corners */
}
</style>
  
  <script>
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  export default {
    name: 'BarChart',
    components: { Bar },
    data() {
      return {
        chartData: {
          labels: [ 'January', 'February', 'March' ],
          datasets: [ { data: [40, 20, 12] } ]
        },
        chartOptions: {
          responsive: true
        }
      }
    }
  }
  </script>