<template>
  <div>
    <div
      id="carouselExampleCaptions"
      class="carousel slide mb-4"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleCaptions"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/44.jpg" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Мойте руки!</h5>
            <p>Очень важно, чтобы возбудители не попали на слизистые!</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../assets/coronavirus-trump-response-promo-1584053410445-superJumbo.png"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Карантин</h5>
            <p>Будем дома для сокращения нагрузки на больницы.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/banner2.png" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Опасен, но не страшен</h5>
            <p>
              Пандемия не пройдет!
            </p>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <div class="card-deck mb-3 text-center">
      <topic
        v-for="piece of news"
        v-bind:key="piece.id"
        :title="piece.createdTime | moment('calendar')"
        :subtitle="piece.title"
        :link-msg="'Посмотреть'"
        :msg="piece.description"
        :is-first="piece.isFirst"
        :link="{ name: 'SingleNews', params: { id: piece.id } }"
      ></topic>
    </div>
  </div>
</template>

<script>
import Topic from "../components/Topic";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "News",
  computed: {
    ...mapGetters(["news"])
  },
  methods: {
    ...mapActions(["getNews"])
  },
  components: {
    topic: Topic
  },
  mounted() {
    this.getNews().then(data => {
      console.log(data);
    });
  }
};
</script>

<style scoped></style>
