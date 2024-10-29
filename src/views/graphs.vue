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
      <!-- New Section for Circular Indicator -->
      <div class="indicator-container">
        <!-- Indicator 1 -->
        <div class="indicator-section">
            <div class="circular-indicator">
            <Doughnut
                :data="indicatorData"
                :options="indicatorOptions"
            />
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
        <!-- Indicator 2 -->
        <div class="indicator-section">
            <div class="circular-indicator">
            <Doughnut
                :data="indicatorData"
                :options="indicatorOptions"
            />
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
        <!-- Indicator 3 -->
        <div class="indicator-section">
            <div class="circular-indicator">
            <Doughnut
                :data="indicatorData"
                :options="indicatorOptions"
            />
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
      

      <!-- bar chart -->
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
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    background-color: white;
    border-radius: 8px;
  }
  
  .title-wrapper {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .chart-title {
    font-size: 24px;
    color: #2c3e50;
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
    color: #2c3e50;
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
    color: #2c3e50;
    font-weight: bold;
  }
  
  .indicator-text {
    color: #2c3e50;
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
  