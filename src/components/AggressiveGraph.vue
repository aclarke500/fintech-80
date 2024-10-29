<template>
    <div class="doughnut-wrapper">
        <Doughnut
          id="my-doughnut-chart"
          :options="doughnutChartOptions"
          :data="doughnutChartData"
        />
        <div class="doughnut-center-text">{{ doughnutChartData.datasets[0].data[0] }}</div>
      </div>
  </template>
  
  <script>
   import { Bar, Doughnut } from 'vue-chartjs';
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    ArcElement,
    CategoryScale,
    LinearScale,
  } from 'chart.js';
  
  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    ArcElement,
    CategoryScale,
    LinearScale
  );
  
  export default {
    name: 'BarAndDoughnutChart',
    components: { Bar, Doughnut },
    data() {
      return {
        // Data and options for the bar chart
        barChartData: {
          labels: ['January', 'February', 'March'],
          datasets: [
            {
              label: 'Monthly Sales',
              data: [40, 20, 12],
              backgroundColor: '#3b82f6',
            },
          ],
        },
        barChartOptions: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
            },
          },
        },
        // Data and options for the doughnut (gauge) chart
        doughnutChartData: {
          labels: ['Score', 'Remaining'],
          datasets: [
            {
              data: [90, 8],
              backgroundColor: ['#3b82f6', '#e5e7eb'],
              borderWidth: 0,
            },
          ],
        },
        doughnutChartOptions: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '80%',
          rotation: -90,
          circumference: 180,
          plugins: {
            tooltip: {
              enabled: false,
            },
            legend: {
              display: false,
            },
          },
        },
        // Data and options for the circular indicator
        indicatorData: {
          labels: ['Progress', 'Remaining'],
          datasets: [
            {
              data: [4, 6],
              backgroundColor: ['#3b82f6', '#e5e7eb'], // Blue for progress, light gray for remaining
              borderWidth: 0,
            },
          ],
        },
        indicatorOptions: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '80%', // Makes it circular with a hole in the center
          rotation: -90,
          circumference: 360, // Full circle for the indicator
          plugins: {
            tooltip: {
              enabled: false,
            },
            legend: {
              display: false,
            },
          },
        },
      };
    },
  };
  </script>
  
  <style scoped>
  .chart-container {
    width: 100%;
    max-width: 100%;
    height: 100%;
    min-height: 19rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  canvas {
    max-width: 100%;
    height: auto;
  }
  </style>
  