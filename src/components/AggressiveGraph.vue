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
      <div class="indicator-section" v-for="(value, index) in indicatorValues" :key="index">
        <div class="circular-indicator">
          <Doughnut :data="getIndicatorData(value)" :options="indicatorOptions" />
          <div class="indicator-center-text">{{ value }}</div>
        </div>
        <div class="indicator-text">
          <h4 class="indicator-title">Autonomy Score</h4>
          <p class="indicator-description">
            Measure of how often driver intiates autonomy
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
      percentage: 25,
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

      // Data and options for the line chart
      lineChartData: {
        labels: this.speedData.speeds,
        datasets: [
          {
            label: 'Monthly Sales',          // First line label
            data: this.speedData.balanced,    // First line data
            borderColor: '#5743D3',           // Color of the first line
            backgroundColor: 'rgba(87, 67, 211, 0.2)', 
            borderWidth: 2,
            pointBackgroundColor: '#5743D3',
            pointBorderColor: '#5743D3',
            tension: 0.4,
          },
          {
            label: 'Economic Data',           // Second line label
            data: this.speedData.economic,    // Second line data
            borderColor: '#43D38D',           // Color of the second line
            backgroundColor: 'rgba(67, 211, 141, 0.2)', 
            borderWidth: 2,
            pointBackgroundColor: '#43D38D',
            pointBorderColor: '#43D38D',
            tension: 0.4,
          }
          ,
          {
            label: 'Total Coverage',          // Third line label
            data: this.speedData.total, // Third line data
            borderColor: '#D34343',           // Color of the third line
            backgroundColor: 'rgba(211, 67, 67, 0.2)', 
            borderWidth: 2,
            pointBackgroundColor: '#D34343',
            pointBorderColor: '#D34343',
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

.indicator-source,
.indicator-leader {
  font-size: 12px;
  color: #9a9a9a;
  margin: 0;
}
</style>