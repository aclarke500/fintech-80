<template>
  <div class="chart-container">
    <div class="title-wrapper">
      <h2 class="chart-title">Safety Score</h2>
      <p class="chart-subtitle">Insights tailored to generate more efficient pricing based off driving data</p>
    </div>

    <!-- Doughnut chart -->
    <div class="doughnut-wrapper">
      <Doughnut id="my-doughnut-chart" :options="doughnutChartOptions" :data="doughnutChartData" />
      <div class="doughnut-center-text">{{ doughnutChartData.datasets[0].data[0] }}%</div>
    </div>

    <!-- Circular Indicator Section -->
    <div class="indicator-container">
      <div class="indicator-section" v-for="(indicator, index) in indicators" :key="index">
        <div class="circular-indicator">
          <Doughnut :data="getIndicatorData(indicator.value)" :options="indicatorOptions" />
          <div class="indicator-center-text">{{ indicator.value }}</div>
        </div>
        <div class="indicator-text">
          <h4 class="indicator-title">{{ indicator.title }}</h4>
          <p class="indicator-description">{{ indicator.description }}</p>
          <p class="indicator-source">{{ indicator.source }}</p>
          <p class="indicator-leader">{{ indicator.leader }}</p>
        </div>
      </div>
    </div>

    <!-- Line Chart 1 -->
    <div class="line-chart-wrapper">
      <Line id="my-line-chart" :options="lineChartOptions" :data="lineChartData" />
    </div>

    <!-- Line Chart 2 -->
    <div class="line-chart-wrapper">
      <Line id="my-line-chart2" :options="lineChartOptions2" :data="lineChartData2" />
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
  name: 'LineAndDoughsnutChart',
  components: { Line, Doughnut },
  props: {
    speedData: Object,
    a: Object,
  },
  mounted() {
    console.log(this.speedData)
  },

  data() {
    return {
      // Set the initial percentage value for the main doughnut chart
      percentage: Math.floor(Math.random() * 98) + 1,
      // percentage: Math.min(this.data.speeds[0],this.data.speeds[1]) / Math.max(this.data.speeds[0],this.data.speeds[1]) * 100,
      // DATA FOR SPEED
      speedVector: this.speedData.speeds,
      // speedVector: [20, 40, 60, 80, 100],
      balanceVector: this.speedData.balanced,
      // balanceVector: [50, 420, 42, 300, 250],
      economicVector: this.speedData.economic,
      // TODO there's nothing in total coverage
      totalVector: this.speedData.totalCoverage,
      // DATA FOR AGGRESSIVE
      /**
       * This represents the price paid relatice to how aggressive they are (ratio,
       * with 0 being not aggressive and 1 being the most aggressive)
       */
      aggressiveBalanceVector: this.a.balanced,
      aggressiveEconomicVector: this.a.economic,
      aggressiveTotalVector: this.a.totalCoverage,
      aggressiveRatioVector: this.a.ratios,

      // Values for each indicator (as percentages)
      indicatorValues: [30, 50, 70], // Each value represents a unique percentage for each indicator

      // data and options for line chart 1 
      lineChartData: {
        labels: this.speedData.speeds,
        datasets: [
          {
            label: 'Balanced',          // First line label
            data: this.speedData.balanced,    // First line data
            borderColor: '#5743D3',           // Color of the first line
            backgroundColor: '#5743D3', 
            borderWidth: 2,
            pointBackgroundColor: '#5743D3',
            pointBorderColor: '#5743D3',
            tension: 0.4,
          },
          {
            label: 'Economic Data',           // Second line label
            data: this.speedData.economic,    // Second line data
            borderColor: '#d3549e',           // Color of the second line
            backgroundColor: '#d3549e', 
            borderWidth: 2,
            pointBackgroundColor: '#d3549e',
            pointBorderColor: '#d3549e',
            tension: 0.4,
          }
          ,
          {
            label: 'Total Coverage',          // Third line label
            data: this.speedData.total, // Third line data
            borderColor: '#A378FC',           // Color of the third line
            backgroundColor: '#A378FC', 
            borderWidth: 2,
            pointBackgroundColor: '#A378FC',
            pointBorderColor: '#A378FC',
            tension: 0.4,
          }
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
            beginAtZero: false,
            min: Math.min(this.speedData.speeds),
            max: Math.max(this.speedData.totalCoverage),
          },
        },
      },

      // Data and options for line chart 2
      lineChartData2: {
        labels: this.a.ratios,
        datasets: [
          {
            label: 'Balanced',          // First line label
            data: this.a.balanced,    // First line data
            borderColor: '#5743D3',           // Color of the first line
            backgroundColor: '#5743D3', 
            borderWidth: 2,
            pointBackgroundColor: '#5743D3',
            pointBorderColor: '#5743D3',
            tension: 0.4,
          },
          {
            label: 'Economic Data',           // Second line label
            data: this.a.economic,    // Second line data
            borderColor: '#d3549e',           // Color of the second line
            backgroundColor: '#d3549e', 
            borderWidth: 2,
            pointBackgroundColor: '#d3549e',
            pointBorderColor: '#d3549e',
            tension: 0.4,
          }
          ,
          {
            label: 'Total Coverage',          // Third line label
            data: this.a.totalCoverage, // Third line data
            borderColor: '#A378FC',           // Color of the third line
            backgroundColor: '#A378FC', 
            borderWidth: 2,
            pointBackgroundColor: '#A378FC',
            pointBorderColor: '#A378FC',
            tension: 0.4,
          }
        ],
      },

      lineChartOptions2: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
          },
        },
        scales: {
          y: {
            beginAtZero: false,
            min: Math.min(this.a.balanced),
            max: Math.max(this.a.totalCoverage),
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
      // INDICATOR STUFF
      indicators: [
        {
          value: Math.floor(Math.random() * 70) + 1,
          title: 'Autonomy Score',
          description: 'Measure of how often driver initiates autonomy',
        },
        {
          value: Math.floor(Math.random() * 98) + 1,
          title: 'Efficiency Score',
          description: 'Shows driver efficiency in various conditions',
        },
        {
          value: Math.floor(Math.random() * 98) + 1,
          title: 'Risk Assessment',
          description: 'Risk level based on recent driving data',
        },
      ],

      // Options for the circular indicators
      indicatorOptions: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '80%',
        rotation: -90,
        circumference: 360,
        plugins: {
          tooltip: { enabled: false },
          legend: { display: false },
        },
      },
    };
  },
  computed: {
    // aggressiveBalanceVector() {
    //   return this.aggressiveData ? this.aggressiveData.balanced : [];
    // },
    // aggressiveEconomicVector() {
    //   return this.aggressiveData ? this.aggressiveData.economic : [];
    // },
    // aggressiveTotalVector() {
    //   return this.aggressiveData ? this.aggressiveData.totalCoverage : [];
    // },
    // aggressiveRatioVector() {
    //   return this.aggressiveData ? this.aggressiveData.ratios : [];
    // },
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
  margin: 2.5rem;
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
  align-items: center; /* Aligns items vertically in the center */
  margin-top: 20px;
}

.circular-indicator {
  position: relative;
  width: 60px;
  height: 60px;
  margin-right: 15px; /* Space between the circle and text */
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
  max-width: 250px; /* Optional: limit text width */
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

.indicator-leader {
  font-size: 12px;
  color: #9a9a9a;
  margin: 0;
}
</style>