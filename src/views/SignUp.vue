<template>
  <user-form
    :error="error"
    :method-name="signUp"
    :form-data="formData"
  ></user-form>
</template>

<script>
import UserForm from "@/components/UserForm";
import { mapActions } from "vuex";
export default {
  name: "SignUp",
  components: { UserForm },
  data() {
    return {
      formData: {
        role: false,
        firstName: "",
        lastName: "",
        patronymic: "",
        phone: ""
      },
      error: false
    };
  },
  methods: {
    ...mapActions(["signUpUser"]),
    signUp() {
      this.error = false;
      return this.signUpUser(this.formData).then(
        response => {
          console.log(response);
          this.$router.push("/signin");
        },
        error => {
          this.error = error;
        }
      );
    }
  }
};
</script>
