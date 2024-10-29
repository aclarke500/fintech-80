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
        <div class="doughnut-center-text">{{ doughnutChartData.datasets[0].data[0] }}%</div>
      </div>
  
      <!-- Circular Indicator Section -->
      <div class="indicator-container">
        <div
          class="indicator-section"
          v-for="(value, index) in indicatorValues"
          :key="index"
        >
          <div class="circular-indicator">
            <Doughnut :data="getIndicatorData(value)" :options="indicatorOptions" />
            <div class="indicator-center-text">{{ value }}</div>
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
        <Line id="my-line-chart" :options="lineChartOptions" :data="lineChartData" />
      </div>
      
      <!-- Line Chart 2 -->
      <div class="line-chart-wrapper">
        <Line id="my-line-chart" :options="lineChartOptions" :data="lineChartData" />
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
        // Set the initial percentage value for the main doughnut chart
        percentage: 25,
  
        // Values for each indicator (as percentages)
        indicatorValues: [30, 50, 70], // Each value represents a unique percentage for each indicator
  
        // Data and options for the line chart
        lineChartData: {
          labels: ['January', 'February', 'March'],
          datasets: [
            {
              label: 'Monthly Sales',
              data: [40, 20, 12],
              borderColor: '#5743D3',
              backgroundColor: 'rgba(87, 67, 211, 0.2)',
              borderWidth: 2,
              pointBackgroundColor: '#5743D3',
              pointBorderColor: '#5743D3',
              tension: 0.4,
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
    computed: {
      // Compute the doughnut chart data for the main chart
      doughnutChartData() {
        return {
          labels: ['Score', 'Remaining'],
          datasets: [
            {
              data: [this.percentage, 100 - this.percentage],
              backgroundColor: ['#5743D3', '#e5e7eb'],
              borderWidth: 0,
            },
          ],
        };
      },
    },
    methods: {
      // Generate data for each circular indicator based on its value
      getIndicatorData(value) {
        return {
          labels: ['Progress', 'Remaining'],
          datasets: [
            {
              data: [value, 100 - value],
              backgroundColor: ['#5743D3', '#e5e7eb'],
              borderWidth: 0,
            },
          ],
        };
      },
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
  