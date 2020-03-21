<template>
  <form autocomplete="off" @submit.prevent="methodName" method="post">
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
            v-model="formData.specialization"
            class="custom-select custom-select-lg mb-2"
          >
            <option :value="1">Анусолог</option>
          </select>
        </div>
        <div v-else class="form-group">
          <label for="user_diagnose">
            Диагноз
          </label>
          <select
            id="user_diagnose"
            v-model="formData.diagnose"
            class="custom-select custom-select-lg mb-2"
          >
            <option :value="1">Анус болит</option>
          </select>
        </div>
        <div class="form-group form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="role"
            v-model="formData.role"
          />
          <label class="form-check-label" for="role">Я врач</label>
        </div>
        <div class="form-group mt-4 text-center">
          <button type="submit" class="btn-lg btn-outline-primary">
            {{ signUpLabel }}
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "UserForm",
  props: {
    formData: Object,
    methodName: Function,
    signUpLabel: {
      type: String,
      default: "Регистрация"
    },
    contentStart: Boolean
  }
};
</script>

<style scoped></style>
