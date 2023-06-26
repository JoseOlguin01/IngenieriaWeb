import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      count: 0,
      role: '',
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    setRole(state, role) {
      state.role = role;
    },
  },
  actions: {
    increment(context) {
      context.commit('increment');
    },
    setRole({ commit }, role) {
      commit('setRole', role);
    },
  },
  getters: {
    getCount(state) {
      return state.count;
    },
    getRole(state) {
      return state.role;
    },
  },
});

export default store;

