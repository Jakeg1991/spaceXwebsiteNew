import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedInSuccessfulMsg: false,
    launchesDataFetched:false,
    rocketsDataFetched:false,
    spaceXDataFetched:false,
    darkMode: false,
    loggedIn: false,
    launchesData: "DATA NOT FETCHED",
    rocketsData: "DATA NOT FETCHED",
    spaceXData: "DATA NOT FETCHED",
    userData: "DATA NOT FETCHED",
  },
  mutations: {
    launchesDataFetched(state) {
      state.launchesDataFetched = true;
    },
    rocketsDataFetched(state) {
      state.rocketsDataFetched = true;
    },
    SpaceXDataFetched(state) {
      state.spaceXData = true;
    },

    setUserInfo(state, payload) {
      state.userData = payload;
    },

    setLogin(state) {
      state.loggedIn = true
    },
    setLoginSuccessfulMsg(state) {
      state.loggedInSuccessfulMsg = true
    },
    setLogout(state) {
      state.loggedIn = false
      state.loggedInSuccessfulMsg = false
    },
    setDarkmode(state) {
      state.darkMode = !state.darkMode
    },

    setLaunchesData(state, payload) {
      state.launchesData = payload;
    },
    setRocketsData(state, payload) {
      state.rocketsData = payload;
    },
    setSpaceXData(state, payload) {
      state.spaceXData = payload;
    }
  },
  actions: {
    setUserInfo({
      commit
    }, payload) {
      commit('setUserInfo', payload)
    },


    logout({
      commit
    },) {
      commit('setLogout')
    },

    login({
      commit
    },) {
      commit('setLogin')
    },
    loginSuccessfulMsg({
      commit
    },) {
      commit('setLoginSuccessfulMsg')
    },

    changeDarkMode({
      commit
    },) {
      commit('setDarkmode')
    },

    async fetchLaunchesData({
      commit
    },) {

      try {
        let response = await axios.get(`https://api.spacexdata.com/v3/launches`, {});
        commit('setLaunchesData', response.data);
        commit('launchesDataFetched');
      } catch (error) {
        commit('setLaunchesData', "DATA FETCH FAILED");
      }
    },

    async fetchRocketsData({
      state,
      commit
    }, plan) {
      try {
        let response = await axios.get(`https://api.spacexdata.com/v3/rockets`, {});
        commit('setRocketsData', response.data);
        commit('rocketsDataFetched');
      } catch (error) {
        commit('setRocketsData', "DATA FETCH FAILED");
      }
    },
    async fetchSpaceXData({
      state,
      commit
    }, plan) {
      try {
        let response = await axios.get(`https://api.spacexdata.com/v3/info`, {});
        commit('setSpaceXData', response.data);
        commit('SpaceXDataFetched');
      } catch (error) {
        commit('setSpaceXData', "DATA FETCH FAILED");
      }
    },
  }
})