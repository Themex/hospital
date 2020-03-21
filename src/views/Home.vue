<template>
  <div class="home">
    <chart-container
      ref="cont"
      :default-data="chartData"
      api_link="http://localhost:8080"
      :options="options"
    ></chart-container>
  </div>
</template>

<script>
import ChartContainer from "@/components/ChartContainer";
export default {
  name: "Home",
  components: { ChartContainer },
  data() {
    return {
      chartData: null,
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.chartData = {
        labels: [this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [this.getRandomInt(), this.getRandomInt()]
          },
          {
            label: "Data One",
            backgroundColor: "#4c8df8",
            data: [this.getRandomInt(), this.getRandomInt()]
          }
        ]
      };
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    }
  }
};
</script>
