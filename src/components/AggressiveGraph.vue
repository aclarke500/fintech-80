<template>
    <div class="chart-container">
      <div class="title-wrapper">
        <h2 class="chart-title">Safety Score</h2>
        <p class="chart-subtitle">Insights tailored to generate more efficient pricing based off driving data</p>
      </div>
      <!-- Doughnut chart -->
      <div class="doughnut-wrapper">
        <Doughnut
          id="my-doughnut-chart"
          :options="doughnutChartOptions"
          :data="doughnutChartData"
        />
        <div class="doughnut-center-text">{{ doughnutChartData.datasets[0].data[0] }}</div>
      </div>
      <!-- Circular Indicator Section -->
      <div class="indicator-container">
        <div class="indicator-section" v-for="(indicator, index) in 3" :key="index">
          <div class="circular-indicator">
            <Doughnut :data="indicatorData" :options="indicatorOptions" />
            <div class="indicator-center-text">4.0</div>
          </div>
          <div class="indicator-text">
            <h4 class="indicator-title">Reducing Pressure Sores</h4>
            <p class="indicator-description">
              Reduce the proportion of patients with pressure sores by 50% in 12 months
            </p>
            <p class="indicator-source">Bayhealth General</p>
            <p class="indicator-leader">Led by Kevin McDiarmid and Bayhealth General Hospital</p>
          </div>
        </div>
      </div>
      <!-- Line Chart 1 -->
      <div class="line-chart-wrapper">
        <Line
          id="my-line-chart"
          :options="lineChartOptions"
          :data="lineChartData"
        />
      </div>
      <!-- Line Chart 2 -->
      <div class="line-chart-wrapper">
        <Line
          id="my-line-chart"
          :options="lineChartOptions"
          :data="lineChartData"
        />
      </div>
    </div>
  </template>
  
  
  <script>
  import { Line, Doughnut } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  ArcElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  ArcElement,
  CategoryScale,
  LinearScale
);

export default {
  name: 'LineAndDoughnutChart',
  components: { Line, Doughnut },
  data() {
    return {
      // Data and options for the line chart
      lineChartData: {
        labels: ['January', 'February', 'March'],
        datasets: [
          {
            label: 'Monthly Sales',
            data: [40, 20, 12],
            borderColor: '#5743D3', // Purple line color
            backgroundColor: 'rgba(87, 67, 211, 0.2)', // Light purple fill
            borderWidth: 2,
            pointBackgroundColor: '#5743D3',
            pointBorderColor: '#5743D3',
            tension: 0.4 // Smooths out the line
          },
        ],
      },
      lineChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
      // Data and options for the doughnut chart (remains unchanged)
      doughnutChartData: {
        labels: ['Score', 'Remaining'],
        datasets: [
          {
            data: [90, 8],
            backgroundColor: ['#5743D3', '#e5e7eb'],
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
      // Data and options for the circular indicators (remains unchanged)
      indicatorData: {
        labels: ['Progress', 'Remaining'],
        datasets: [
          {
            data: [4, 6],
            backgroundColor: ['#5743D3', '#e5e7eb'],
            borderWidth: 0,
          },
        ],
      },
      indicatorOptions: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '80%',
        rotation: -90,
        circumference: 360,
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
  .line-chart-wrapper {
    width: 100%;
    max-width: 800px;
    aspect-ratio: 2 / 1;
  }
  .chart-container {
    padding: 1.5rem 0.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* NOTE add padding to remove the purple border edges */
    background-color: white;
    border-radius: 8px;
  }
  
  .title-wrapper {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .chart-title {
    font-size: 24px;
    color: #5743D3;
    margin: 0;
  }
  
  .chart-subtitle {
    font-size: 16px;
    color: #7a7a7a;
    margin: 0;
    max-width: 600px;
  }
  
  .doughnut-wrapper {
    position: relative;
    width: 100%;
    max-width: 600px;
    aspect-ratio: 2 / 1;
  }
  
  .doughnut-center-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 24px;
    color: #5743D3;
  }
  
  .bar-chart-wrapper {
    width: 100%;
    max-width: 800px;
    aspect-ratio: 2 / 1;
  }
  
  /* New Styles for Circular Indicator Section */
  .indicator-container {
    margin-bottom: 60px;
    
  }

  .indicator-section {
    display: flex;
    align-items: center;
    margin-top: 30px;
  }
  
  .circular-indicator {
    position: relative;
    width: 60px;
    height: 60px;
    margin-right: 15px;
  }
  
  .indicator-center-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 16px;
    color: #5743D3;
    font-weight: bold;
  }
  
  .indicator-text {
    color: #5743D3;
  }
  
  .indicator-title {
    font-size: 16px;
    font-weight: bold;
    margin: 0;
  }
  
  .indicator-description {
    font-size: 14px;
    color: #7a7a7a;
    margin: 0;
  }
  
  .indicator-source, .indicator-leader {
    font-size: 12px;
    color: #9a9a9a;
    margin: 0;
  }
  </style>
  