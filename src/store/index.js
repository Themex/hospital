import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
const ls = new SecureLS({ isCompression: false });

Vue.use(Vuex);

const defaults = {
  apiLink: "http://84.201.185.226:1488/v1/"
};

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
      loginPatient: defaults.apiLink + "login/patient",
      loginDoctor: defaults.apiLink + "login/doctor",
      signUpDoctor: defaults.apiLink + "signup/doctor",
      signUpPatient: defaults.apiLink + "signup/patient"
    },
    profile: {
      data: undefined,
      isDoctor: false
    }
  },
  getters: {
    api: state => state.api,
    profile: state => state.profile,
    isAuthenticated: state => !!state.profile.data
  },
  mutations: {
    updateProfile(state, payload) {
      state.profile = payload;
    }
  },
  actions: {
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
