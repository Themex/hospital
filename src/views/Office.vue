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
      <li class="nav-item">
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
      <li class="nav-item">
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
      <li class="nav-item">
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
      <li class="nav-item">
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
          :form-data="infoData"
          :method-name="updateInfo"
          :content-start="true"
          sign-up-label="Обновить"
        ></user-form>
      </div>
      <div
        class="tab-pane fade"
        id="patients"
        role="tabpanel"
        aria-labelledby="patients-tab"
      >
        <hospital-table :items="patients"></hospital-table>
      </div>
      <div
        class="tab-pane fade"
        id="schedule"
        role="tabpanel"
        aria-labelledby="schedule-tab"
      >
        <hospital-table :items="appointments"></hospital-table>
      </div>
      <div
        class="tab-pane fade"
        id="appointment"
        role="tabpanel"
        aria-labelledby="appointment-tab"
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
                  <button type="submit" class="btn-lg btn-outline-primary">
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
      >
        <h3 class="my-4">Cerebral paralysing</h3>
      </div>
    </div>
  </div>
</template>

<script>
import UserForm from "@/components/UserForm";
import HospitalTable from "@/components/HospitalTable";
export default {
  components: { HospitalTable, UserForm },
  data() {
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
      },
      appointments: {
        head: {
          id: "#",
          fio: "ФИО",
          datetime: "Дата и время"
        },
        body: [
          {
            id: 1,
            fio: "Mark",
            datetime: "2019-05-22 18:15:22"
          }
        ]
      }
    };
  },
  methods: {
    updateInfo() {}
  }
};
</script>