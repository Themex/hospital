<template>
  <div class="home">
    <h1>Ситуация по COVID-19</h1>
    <chart-container
      ref="cont"
      :api-link="api.neuralPrediction"
      :options="options"
    ></chart-container>
  </div>
</template>

<script>
import ChartContainer from "@/components/ChartContainer";
import { mapGetters } from "vuex";
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
  computed: {
    ...mapGetters(["api"])
  }
};
</script>
