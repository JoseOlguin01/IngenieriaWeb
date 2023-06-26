import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      count: 0,
      role: 'usuario',
      isLoggedIn: false, 
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    setRole(state, role) {
      state.role = role;
    },
    setLoggedIn(state, isLoggedIn) { 
      state.isLoggedIn = isLoggedIn;
    },
  },
  actions: {
    increment(context) {
      context.commit('increment');
    },
    setRole({ commit }, role) {
      commit('setRole', role);
    },
    setLoggedIn({ commit }, isLoggedIn) { 
      commit('setLoggedIn', isLoggedIn);
    },
  },
  getters: {
    getCount(state) {
      return state.count;
    },
    getRole(state) {
      return state.role;
    },
    isLoggedIn(state) { 
      return state.isLoggedIn;
    },
    isAdmin(state) {
      return state.role === 'admin'; 
    },
  },
});

export default store;



