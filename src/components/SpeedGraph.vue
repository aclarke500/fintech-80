<template>
    <div class="chart-container">
      <Line :data="chartData" :options="chartOptions" />
    </div>
  </template>
  
  <script>
  import { Line } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js'
  
  ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale)
  
  export default {
    name: 'LineGraph',
    components: { Line },
    props: {
      labels: {
        type: Array,
        default: () => ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      },
      data: {
        type: Array,
        default: () => [30, 45, 32, 60, 75, 80, 70, 90, 85, 100, 95, 110] // Sample monthly data
      },
      datasetLabel: {
        type: String,
        default: 'Monthly Sales'
      }
    },
    computed: {
      chartData() {
        return {
          labels: this.labels,
          datasets: [
            {
              label: this.datasetLabel,
              data: this.data,
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderWidth: 2,
              pointRadius: 5,
              pointHoverRadius: 7,
              tension: 0.4 // Smooth line
            }
          ]
        }
      }
    },
    data() {
      return {
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
              position: 'top'
            },
            title: {
              display: true,
              text: this.datasetLabel,
              font: {
                size: 18
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Sales ($)'
              }
            },
            x: {
              title: {
                display: true,
                text: 'Month'
              }
            }
          }
        }
      }
    }
  }
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
  