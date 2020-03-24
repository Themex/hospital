<template>
  <div id="app">
    <div
      class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm"
    >
      <h5
        class="my-0 mr-md-auto font-weight-normal pointer"
        @click="$router.push('/')"
      >
        NO-COVID-19 Hospital
      </h5>
      <nav class="my-2 my-md-0 mr-md-3">
        <router-link to="/" class="p-2 text-dark">Главная</router-link>
        <router-link to="/news" class="p-2 text-dark">Новости</router-link>
        <router-link to="/catalog" class="p-2 text-dark"
          >Справочник болезней</router-link
        >
        <router-link to="/office" class="p-2 text-dark" v-if="isAuthenticated"
          >Личный кабинет</router-link
        >
        <router-link to="/signup" class="p-2 text-dark" v-if="!isAuthenticated"
          >Регистрация</router-link
        >
        <a
          href="#"
          v-if="isAuthenticated"
          @click="userLogout"
          class="p-2 text-dark"
          >Выйти</a
        >
      </nav>
      <router-link
        v-if="!isAuthenticated"
        to="/signin"
        class="btn btn-outline-primary"
        >Войти</router-link
      >
    </div>
    <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 class="display-4">Инфекционная больница</h1>
      <p class="lead">№1 в г. Москве</p>
    </div>
    <div class="container">
      <router-view />
      <footer class="pt-4 my-md-5 pt-md-5 border-top">
        <div class="row">
          <div class="col-12 col-md">
            <img class="mb-2" src="./assets/logo.svg" alt="" />
            <small class="d-block mb-3 text-muted">Каменский</small>
            <small class="d-block mb-3 text-muted">Серебренникова</small>
            <small class="d-block mb-3 text-muted">Степанов и партнеры</small>
            <small class="d-block mb-3 text-muted">&copy; 2020</small>
          </div>
          <div class="col-6 col-md">
            <h5>Коронавирус <span class="badge badge-secondary">New</span></h5>
            <ul class="list-unstyled text-small">
              <li>
                <router-link to="/static/spread" class="text-muted"
                  >Распространение</router-link
                >
              </li>
              <li>
                <router-link to="/static/prevent" class="text-muted"
                  >Профилактика</router-link
                >
              </li>
              <li>
                <router-link to="/static/symptoms" class="text-muted"
                  >Симптомы</router-link
                >
              </li>
              <li>
                <a
                  class="text-muted"
                  target="_blank"
                  href="https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6"
                  >Мониторинг</a
                >
              </li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>О компании</h5>
            <ul class="list-unstyled text-small">
              <li>
                <router-link to="/static/contacts" class="text-muted"
                  >Контакты</router-link
                >
              </li>
              <li>
                <router-link to="/static/about" class="text-muted"
                  >О нас</router-link
                >
              </li>
              <li>
                <router-link to="/static/vacancies" class="text-muted"
                  >Вакансии</router-link
                >
              </li>
              <li>
                <router-link to="/static/faq" class="text-muted"
                  >Вопросы</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<style lang="scss"></style>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "App",
  computed: {
    ...mapGetters(["isAuthenticated"])
  },
  methods: {
    ...mapActions(["logout", "getDiseases"]),
    userLogout() {
      this.logout().then(() => {
        this.$router.push("/signin");
      });
    }
  },
  created() {
    this.getDiseases().then(data => {
      console.log(data);
    });
  }
};
</script>
