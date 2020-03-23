<template>
  <user-form
    :error="error"
    :for-office="true"
    :is-profile="profile.id === id"
    :form-data="patientData"
    sign-up-label="Обновить"
  />
</template>

<script>
import UserForm from "@/components/UserForm";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Patient",
  components: { UserForm },
  props: ["id"],
  data() {
    return {
      patientData: {},
      error: false
    };
  },
  computed: {
    ...mapGetters(["profile"])
  },
  methods: {
    ...mapActions(["getPatientInfo"])
  },
  mounted() {
    this.getPatientInfo(this.id).then(
      data => {
        this.patientData = data;
      },
      error => {
        this.error = error;
      }
    );
  }
};
</script>

<style scoped></style>
