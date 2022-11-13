import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    carListing: [],
    baseUrl: 'http://sandbox.arabamd.com/api/v1/listing?&take=50',
  },
  mutations: {
    SET_CAR_LISTING(state, payload) {
      state.carListing = payload;
    },
  },
  actions: {
    async SET_CAR_LISTING(store) {
      const response = await axios.get(store.state.baseUrl);
      store.commit('SET_CAR_LISTING', response.data);
    },
  },
  modules: {
  },
});
