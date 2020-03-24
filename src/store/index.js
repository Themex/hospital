import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
const ls = new SecureLS({ isCompression: false });
import $axios from "@/axios";

Vue.use(Vuex);

const parceArrayToObjectByIdWithTime = (arr, time) =>
  arr.reduce((acc, curr) => {
    acc[curr.id] = {
      ...curr,
      [time]: new Date(curr[time].replace(/-/g, "/"))
    };
    return acc;
  }, {});

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: key => ls.remove(key)
      }
    })
  ],
  state: {
    api: {
      loginPatient: "login/patient",
      loginDoctor: "login/doctor",
      signUpDoctor: "signup/doctor",
      signUpPatient: "signup/patient",
      patientInfo: "info/patient",
      diseasesList: "diseases/list",
      newsList: "news/list",
      singleNews: "news/get",
      doctorAppointments: "appointment/list/doctor",
      patientDiagnoses: "diagnosis/list/patient",
      neuralPrediction: "neural/predict",
      specialization: "specialization/list",
      doctorList: "doctor/list"
    },
    filters: {
      catalogFilter: ""
    },
    profile: {
      data: undefined,
      isDoctor: false
    },
    diseasesList: {},
    newsList: {},
    appointmentsDoctor: {},
    specializations: {},
    doctorList: {}
  },
  getters: {
    api: state => state.api,
    apiLink: state => state.apiLink,
    profile: state => state.profile,
    doctorAppointments: state => state.appointmentsDoctor,
    filters: state => state.filters,
    diseases: state => state.diseasesList,
    doctors: state => state.doctorList,
    specializations: state => state.specializations,
    news: state => state.newsList,
    isAuthenticated: state => !!state.profile.data
  },
  mutations: {
    updateProfile(state, payload) {
      state.profile = payload;
    },
    updateFilter(state, payload) {
      state.filters[payload.key] = payload.value;
    },
    updateDiseases(state, payload) {
      state.diseasesList = payload;
    },
    updateAppointmentsDoctor(state, payload) {
      state.appointmentsDoctor = payload;
    },
    updateNews(state, payload) {
      state.newsList = payload;
    },
    updateSpecializations(state, payload) {
      state.specializations = payload;
    },
    updateDoctorList(state, payload) {
      state.doctorList = payload;
    },
    addDiagnoses(state, payload) {
      if (state.profile.data) {
        state.profile.data.diagnose = payload;
      }
    }
  },
  actions: {
    getDoctors({ state, commit }) {
      return new Promise(resolve => {
        $axios.post(state.api.doctorList).then(response => {
          const data = response.data.reduce((acc, curr) => {
            acc[curr.id] = curr;
            return acc;
          }, {});
          commit("updateDoctorList", data);
          resolve(data);
        });
      });
    },
    getSpecializations({ state, commit }) {
      return new Promise(resolve => {
        $axios.post(state.api.specialization).then(response => {
          const data = response.data.reduce((acc, curr) => {
            acc[curr.id] = curr;
            return acc;
          }, {});
          commit("updateSpecializations", data);
          resolve(data);
        });
      });
    },
    getPatientInfo({ state }, payload) {
      return new Promise((resolve, reject) => {
        $axios
          .post(state.api.patientInfo, payload)
          .then(response => {
            resolve(response.data);
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    getDoctorAppointments({ state, commit }, payload) {
      return new Promise(resolve => {
        $axios
          .post(state.api.doctorAppointments, { doctorId: payload })
          .then(response => {
            const data = parceArrayToObjectByIdWithTime(response.data, "time");
            commit("updateAppointmentsDoctor", data);
            resolve(data);
          });
      });
    },
    getDiseases({ state, commit }) {
      return new Promise(resolve => {
        $axios.post(state.api.diseasesList).then(response => {
          const data = response.data.reduce((acc, curr) => {
            acc[curr.id] = curr;
            return acc;
          }, {});
          commit("updateDiseases", data);
          resolve(data);
        });
      });
    },
    getSingleNews({ state }, id) {
      return new Promise(resolve => {
        $axios.post(state.api.singleNews, { id: id }).then(response => {
          resolve({
            ...response.data,
            createdTime: new Date(response.data.createdTime.replace(/-/g, "/"))
          });
        });
      });
    },
    getPatientDiagnoses({ state, commit }, id) {
      return new Promise(resolve => {
        $axios
          .post(state.api.patientDiagnoses, { patientId: id })
          .then(response => {
            const data = response.data.reduce((acc, curr) => {
              acc[curr.id] = curr;
              return acc;
            }, {});
            commit("addDiagnoses", data);
            resolve(data);
          });
      });
    },
    signUpUser({ state }, payload) {
      return new Promise((resolve, reject) => {
        $axios
          .post(
            payload.role ? state.api.signUpDoctor : state.api.signUpPatient,
            payload
          )
          .then(response => {
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    signInUser({ state, commit }, payload) {
      console.log(payload);
      return new Promise((resolve, reject) => {
        $axios
          .post(
            payload.isDoctor ? state.api.loginDoctor : state.api.loginPatient,
            payload
          )
          .then(response => {
            commit("updateProfile", {
              isDoctor: payload.isDoctor,
              data: { role: payload.isDoctor, ...response.data }
            });
            resolve(response);
          })
          .catch(reason => {
            reject(reason);
          });
      });
    },
    getNews({ state, commit }) {
      return new Promise(resolve => {
        $axios.post(state.api.newsList).then(response => {
          const data = parceArrayToObjectByIdWithTime(
            response.data,
            "createdTime"
          );
          commit("updateNews", data);
          resolve(data);
        });
      });
    },
    logout({ commit }) {
      return new Promise(resolve => {
        commit("updateProfile", {
          isDoctor: false,
          data: undefined
        });
        resolve();
      });
    }
  }
});
