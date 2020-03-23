import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

const defaults = {
  apiLink: "http://84.201.185.226:1488/v1/"
};

let $axios = Vue.axios.create({
  baseURL: defaults.apiLink,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

axios.interceptors.request.use(
  config => config,
  err =>
    new Promise((resolve, reject) => {
      reject(err);
    })
);

export default $axios;
