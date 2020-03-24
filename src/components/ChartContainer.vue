<template>
  <bar-chart
    v-if="loaded"
    :options="options"
    :chart-data="chartData"
  ></bar-chart>
</template>

<script>
import BarChart from "./Chart";
export default {
  name: "ChartContainer",
  components: { BarChart },
  props: {
    api_link: {
      type: String,
      default: ""
    },
    defaultData: Object,
    options: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      loaded: false,
      chartData: null
    };
  },
  async mounted() {
    this.loaded = false;
    try {
      if (this.api_link) {
        const { list } = await this.$http.get(this.api_link).then(response => {
          return typeof response.data === "object" ? response.data : {};
        });
        this.chartData = list ? list : this.defaultData;
      } else {
        this.chartData = await this.defaultData;
      }
      this.loaded = true;
    } catch (e) {
      console.log(e);
    }
  }
};
</script>

<style scoped></style>
