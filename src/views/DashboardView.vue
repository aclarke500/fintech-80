<template>
    <div class="chart-container">
      <div class="doughnut-wrapper">
        <Doughnut
          id="my-doughnut-chart"
          :options="doughnutChartOptions"
          :data="doughnutChartData"
        />
        <div class="doughnut-center-text">{{ doughnutChartData.datasets[0].data[0] }}</div>
      </div>
      <div class="bar-chart-wrapper">
        <Bar
          id="my-bar-chart"
          :options="barChartOptions"
          :data="barChartData"
        />
      </div>
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
          maintainAspectRatio: false, // Adjusts the chart size based on container
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
              data: [92, 8],
              backgroundColor: ['#3b82f6', '#e5e7eb'],
              borderWidth: 0,
            },
          ],
        },
        doughnutChartOptions: {
          responsive: true,
          maintainAspectRatio: false, // Adjusts the chart size based on container
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
      };
    },
  };
  </script>
  
  <style scoped>
  .chart-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: white;
    border-radius: 8px;
  }
  
  .doughnut-wrapper {
    position: relative;
    width: 100%;
    max-width: 600px;
    aspect-ratio: 2 / 1; /* Makes the doughnut chart half as tall as it is wide */
    margin-bottom: 40px;
  }
  
  .doughnut-center-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 24px;
    color: #2c3e50;
  }
  
  .bar-chart-wrapper {
    width: 100%;
    max-width: 800px;
    aspect-ratio: 2 / 1; /* Ensures the bar chart scales properly */
  }
  
  @media (max-width: 768px) {
    .doughnut-wrapper, .bar-chart-wrapper {
      max-width: 90%; /* Makes charts more compact on smaller screens */
      aspect-ratio: 1.5 / 1; /* Adjusts aspect ratio for smaller screens */
    }
  
    .doughnut-center-text {
      font-size: 20px; /* Reduces text size for better fit */
    }
  }
  
  @media (max-width: 480px) {
    .doughnut-wrapper, .bar-chart-wrapper {
      max-width: 100%;
      aspect-ratio: 1 / 1; /* Further adjusts aspect ratio for very small screens */
    }
  
    .doughnut-center-text {
      font-size: 16px; /* Further reduces text size for mobile */
    }
  }
  </style>
  