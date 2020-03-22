<template>
  <div class="row align-items-center justify-content-center">
    <div class="col-sm-8 offset-sm-4">
      <div class="hospital-form-container">
        <form autocomplete="on" @submit.prevent="auth" method="post">
          <div v-if="error" class="alert alert-danger" role="alert">
            {{ error }}
          </div>
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
          <div class="form-group form-check">
            <input
              v-model="formData.isDoctor"
              type="checkbox"
              class="form-check-input"
              id="role"
            />
            <label class="form-check-label" for="role">Я врач</label>
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
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      formData: {
        email: "",
        password: "",
        isDoctor: false
      },
      error: ""
    };
  },
  computed: {
    ...mapGetters(["api"])
  },
  methods: {
    ...mapMutations(["updateProfile"]),
    auth() {
      this.error = "";
      return this.$http
        .post(
          this.formData.isDoctor ? this.api.loginDoctor : this.api.loginPatient,
          this.formData
        )
        .then(response => {
          this.updateProfile({
            isDoctor: this.formData.isDoctor,
            data: { role: this.formData.isDoctor, ...response.data }
          });
          this.$router.push("/office");
        })
        .catch(reason => {
          this.error = reason;
        });
    }
  }
};
</script>
