<template>
  <div class="row align-items-center justify-content-center">
    <div class="col-sm-8 offset-sm-4">
      <div class="hospital-form-container">
        <form autocomplete="on" @submit.prevent="auth" method="post">
          <div class="form-group">
            <label for="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              v-model="formData.email"
              placeholder="user@example.com"
              required
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="password">
              Пароль
            </label>
            <input
              id="password"
              type="password"
              v-model="formData.password"
              placeholder="введите пароль"
              required
              class="form-control"
            />
          </div>
          <div class="form-group mt-4 text-center">
            <button type="submit" class="btn-lg btn-outline-primary">
              Войти
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    auth() {
      return this.$http
        .post("http://84.201.185.226:1488/v1/login/doctor", this.formData)
        .then(response => {
          console.log(response);
        });
    }
  }
};
</script>
