<template>
  <user-form :method-name="signUp" :form-data="formData"></user-form>
</template>

<script>
import UserForm from "@/components/UserForm";
export default {
  name: "SignUp",
  components: { UserForm },
  data() {
    return {
      formData: {
        isDoctor: false,
        firstName: "",
        lastName: "",
        patronymic: "",
        phone: ""
      }
    };
  },
  methods: {
    signUp() {}
  }
};
</script>
