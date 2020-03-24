<template>
  <form autocomplete="off" @submit.prevent="methodName" method="post">
    <div
      v-if="error"
      :class="[
        'alert',
        'alert-danger',
        contentStart ? 'text-left' : 'text-center'
      ]"
      role="alert"
    >
      {{ error }}
    </div>
    <div
      :class="[
        'row',
        contentStart ? 'justify-content-start' : 'justify-content-center'
      ]"
    >
      <div class="col-sm-4">
        <div class="form-group">
          <label for="firstName">
            Имя
          </label>
          <input
            id="firstName"
            type="text"
            v-model="formData.firstName"
            placeholder="Иван"
            class="form-control"
            required
          />
        </div>
        <div class="form-group">
          <label for="lastName">
            Фамилия
          </label>
          <input
            id="lastName"
            type="text"
            v-model="formData.lastName"
            placeholder="Иванов"
            class="form-control"
            required
          />
        </div>
        <div class="form-group">
          <label for="patronymic">
            Отчество
          </label>
          <input
            id="patronymic"
            type="text"
            v-model="formData.patronymic"
            placeholder="Иванович"
            class="form-control"
            required
          />
        </div>
        <div class="form-group">
          <label for="phone">
            Телефон
          </label>
          <input
            id="phone"
            type="text"
            v-model="formData.phone"
            placeholder="8800553535"
            class="form-control"
            required
          />
        </div>
      </div>
      <div class="col-sm-4">
        <div class="form-group">
          <label for="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            v-model="formData.email"
            placeholder="user@example.com"
            class="form-control"
            required
          />
        </div>

        <div class="form-group">
          <label for="password">
            Пароль
          </label>
          <input
            id="password"
            type="text"
            v-model="formData.password"
            placeholder="123456"
            class="form-control"
            required
          />
        </div>
        <div v-if="formData.role" class="form-group">
          <label for="specialization">
            Специализация
          </label>
          <select
            id="specialization"
            v-model="formData.specializationId"
            class="custom-select custom-select-lg mb-2"
          >
            <option
              v-for="spec in specializations"
              :key="spec.id"
              :value="spec.id"
              >{{ spec.title }}</option
            >
          </select>
        </div>
        <div v-else-if="forOffice && !isProfile" class="form-group">
          <label for="user_diagnose">
            Диагноз
          </label>
          <select
            id="user_diagnose"
            v-model="formData.diagnose"
            class="custom-select custom-select-lg mb-2"
          >
            <option
              v-for="disease in diseases"
              :key="disease.id"
              :value="disease.id"
              >{{ disease.title }}</option
            >
          </select>
        </div>
        <div class="form-group form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="role"
            v-model="formData.role"
            :disabled="forOffice"
          />
          <label class="form-check-label" for="role">Я врач</label>
        </div>
        <div class="form-group mt-4 text-center">
          <button type="submit" class="btn btn-lg btn-outline-primary">
            {{ signUpLabel }}
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "UserForm",
  props: {
    formData: Object,
    methodName: Function,
    error: Boolean,
    forOffice: {
      type: Boolean,
      default: false
    },
    isProfile: Boolean,
    signUpLabel: {
      type: String,
      default: "Регистрация"
    },
    contentStart: Boolean
  },
  computed: {
    ...mapGetters(["diseases", "specializations"])
  }
};
</script>

<style scoped></style>
