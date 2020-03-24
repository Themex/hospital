<template>
  <div>
    <ul class="nav nav-tabs" id="officeTab" role="tablist">
      <li class="nav-item">
        <a
          class="nav-link active"
          id="home-tab"
          data-toggle="tab"
          href="#home"
          role="tab"
          aria-controls="home"
          aria-selected="true"
          >Личная информация</a
        >
      </li>
      <li class="nav-item" v-if="profile.isDoctor">
        <a
          class="nav-link"
          id="patients-tab"
          data-toggle="tab"
          href="#patients"
          role="tab"
          aria-controls="patients"
          aria-selected="false"
          >Пациенты</a
        >
      </li>
      <li class="nav-item" v-if="profile.isDoctor">
        <a
          class="nav-link"
          id="schedule-tab"
          data-toggle="tab"
          href="#schedule"
          role="tab"
          aria-controls="schedule"
          aria-selected="false"
          >График приемов</a
        >
      </li>
      <li class="nav-item" v-if="!profile.isDoctor">
        <a
          class="nav-link"
          id="appointment-tab"
          data-toggle="tab"
          href="#appointment"
          role="tab"
          aria-controls="appointment"
          aria-selected="false"
          >Запись на прием</a
        >
      </li>
      <li class="nav-item" v-if="!profile.isDoctor">
        <a
          class="nav-link"
          id="diagnose-tab"
          data-toggle="tab"
          href="#diagnose"
          role="tab"
          aria-controls="diagnose"
          aria-selected="false"
          >Диагноз</a
        >
      </li>
    </ul>
    <div class="tab-content" id="officeContent">
      <div
        class="tab-pane fade show active"
        id="home"
        role="tabpanel"
        aria-labelledby="home-tab"
      >
        <user-form
          class="my-4"
          :form-data="userData"
          :method-name="updateInfo"
          :for-office="true"
          :is-profile="true"
          :content-start="true"
          sign-up-label="Обновить"
        ></user-form>
      </div>
      <div
        class="tab-pane fade"
        id="patients"
        role="tabpanel"
        aria-labelledby="patients-tab"
        v-if="profile.isDoctor"
      >
        <hospital-table :items="patients"></hospital-table>
      </div>
      <div
        class="tab-pane fade"
        id="schedule"
        role="tabpanel"
        aria-labelledby="schedule-tab"
        v-if="profile.isDoctor"
      >
        <hospital-table :items="appointments"></hospital-table>
      </div>
      <div
        class="tab-pane fade"
        id="appointment"
        role="tabpanel"
        aria-labelledby="appointment-tab"
        v-if="!profile.isDoctor"
      >
        <div class="row align-items-center justify-content-center my-4">
          <div class="col-sm-8 offset-sm-4">
            <div class="hospital-form-container">
              <form autocomplete="on" method="post">
                <div class="form-group">
                  <label for="doctor">
                    Врач
                  </label>
                  <select
                    v-model="appointmentData.doctor_id"
                    id="doctor"
                    class="custom-select custom-select-lg mb-3"
                  >
                    <option selected>Валера!</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="datetime">
                    Время
                  </label>
                  <input
                    id="datetime"
                    type="text"
                    v-model="appointmentData.datetime"
                    placeholder="2019-05-15 13:30:00"
                    required
                    class="form-control"
                  />
                </div>
                <input type="hidden" :value="patientId" />
                <div class="form-group mt-3 text-center">
                  <button type="submit" class="btn btn-lg btn-outline-primary">
                    Записаться
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="diagnose"
        role="tabpanel"
        aria-labelledby="diagnose-tab"
        v-if="!profile.isDoctor"
      >
        <h3 class="my-4">{{ profile.data.diagnose }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import UserForm from "@/components/UserForm";
import HospitalTable from "@/components/HospitalTable";
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  components: { HospitalTable, UserForm },
  data: () => {
    return {
      infoData: {},
      patientId: 1,
      appointmentData: {},
      patients: {
        head: {
          id: "#",
          fio: "ФИО",
          diagnose: "Диагноз"
        },
        body: [
          {
            id: 1,
            fio: "Mark",
            diagnose: "Cerebral paralysing"
          }
        ]
      }
    };
  },
  computed: {
    ...mapGetters(["profile", "doctorAppointments"]),
    appointments() {
      const appointments = this.doctorAppointments;
      return {
        head: {
          id: "#",
          patientFirstName: "Имя пациента",
          patientLastName: "Фамилия пациента",
          time: "Дата и время"
        },
        body: appointments
      };
    },
    userData: {
      get() {
        return this.profile.data || this.infoData;
      },
      set(n) {
        this.infoData = n;
      }
    }
  },
  methods: {
    ...mapMutations(["updateProfile"]),
    ...mapActions(["getDoctorAppointments"]),
    updateInfo() {
      this.updateProfile({
        isDoctor: this.profile.isDoctor,
        data: this.infoData
      });
      console.log(this.profile);
    }
  },
  mounted() {
    if (this.profile.isDoctor) {
      console.log(this.profile);
      this.getDoctorAppointments(this.profile.data.id).then(data => {
        console.log(data);
      });
    }
  }
};
</script>
