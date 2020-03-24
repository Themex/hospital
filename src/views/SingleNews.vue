<template>
  <div>
    <div class="row justify-content-center align-items-center">
      <div v-if="newsData" class="col-sm-6 text-left">
        <p class="text-muted">
          {{ newsData.createdTime | moment("calendar") }}
        </p>
        <h2>{{ newsData.title }}</h2>
        <hr />
        <p v-html="newsData.description"></p>
      </div>
      <div class="col-sm-6" v-else>
        <div class="alert alert-danger" role="alert">
          Новость не найдена!
        </div>
      </div>
    </div>
    <div class="mt-4">
      <button
        @click="$router.go(-1)"
        type="button"
        class="btn btn-lg btn-outline-primary"
      >
        Назад
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "SingleNews",
  props: ["id"],
  data() {
    return {
      newsData: undefined
    };
  },
  methods: {
    ...mapActions(["getSingleNews"])
  },
  mounted() {
    this.getSingleNews(this.id).then(data => {
      this.newsData = data;
    });
  }
};
</script>

<style scoped></style>
