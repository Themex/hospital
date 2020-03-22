<template>
  <user-form
    :error="error"
    :method-name="signUp"
    :form-data="formData"
  ></user-form>
</template>

<script>
import UserForm from "@/components/UserForm";
import { mapGetters } from "vuex";
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
  computed: {
    ...mapGetters(["api"])
  },
  methods: {
    signUp() {
      this.error = false;
      return this.$http
        .post(
          this.formData.role ? this.api.signUpDoctor : this.api.signUpPatient,
          this.formData
        )
        .then(response => {
          console.log(response);
          this.$router.push("/signin");
        })
        .catch(reason => {
          this.error = reason;
        });
    }
  }
};
</script>
