<script>
import { Doughnut } from "vue-chartjs";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

export default {
  name: "DoughnutChart",
  components: {
    Doughnut,
  },
  props: {
    data: {
      type: Array,
      required: true,
    },
    colors: {
      type: Array,
      required: true,
    },
    labels: {
      type: Array,
      required: false,
    },
  },
  computed: {
    chartData() {
      return {
        // labels: this.labels,
        datasets: [
          {
            data: this.data,
            backgroundColor: this.colors,
            borderWidth: 0,
          },
        ],
      };
    },
    chartOptions() {
      return {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          tooltip: {
            enabled: false,
          },
        },
      };
    },
  },
};
</script>
<template>
  <Doughnut id="graph" :options="chartOptions" :data="chartData" />
</template>


<style lang="scss">
@import "./Graph.scss";
</style>