import Vue from "vue";
import Vuex from "vuex";
import { codeLimit } from "../core/utils/mastermind";
Vue.use(Vuex);



const state = {
  currentCode: [],
  codeLimit: codeLimit,
  hasWon: false,
  codeLog: [],
  hints: []
}

const mutations = {
  SET_CURRENT_CODE(state, currentCode) {
    state.currentCode = currentCode;
  },
  SET_HAS_WON(state, hasWon) {
    state.hasWon = hasWon;
  },
  SET_CODE_LOG(state, codeLog) {
    state.codeLog = codeLog;
  },
  SET_HINTS(state, hints) {
    state.hints = hints;
  }
}

const actions = {
  makePlay({ commit, state }, pegPlay) {
    const canPlay = state.currentCode.length < state.codeLimit;
    if (!canPlay) {
      return;
    }
    
    const clonedCode = [...state.currentCode];
    clonedCode.push(pegPlay);
    commit("SET_CURRENT_CODE", clonedCode);
  },
  deleteLastPlay({ commit, state }) {
    const isCurrentCodeEmpty = state.currentCode.length == 0;
    if (isCurrentCodeEmpty) {
      return;
    }

    const clonedCode = [...state.currentCode];
    const deletedCode = clonedCode.pop();
    // TODO: remove
    console.log(deletedCode);
    commit("SET_CURRENT_CODE", clonedCode);
  },
  logCode({ commit, state }, code) {
    const isLogFull = state.codeLog.length == 10;
    if (isLogFull) {
      return;
    }

    const clonedCodeLog = [...state.codeLog];
    clonedCodeLog.push(code);
    // TODO: remove
    console.log(clonedCodeLog);
    commit("SET_CODE_LOG", clonedCodeLog);
  },
  clearCurrentCode({ commit }) {
    commit("SET_CURRENT_CODE", []);
  },
  setHints({ commit }, hints) {
    const pegHints = hints.map((hint) => {
      return {
        name: hint,
        hexCode: hint
      }
    })    
    commit("SET_HINTS", pegHints)
  }
}

const getters = {

}

export default new Vuex.Store({
  namespaced: true,
  state,
  mutations,
  actions,
  getters
});