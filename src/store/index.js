import {fetchValute} from "../api/requests/fetchValute";

export const state = () => ({
  valutes: []
})

export const mutations = {
  SET_VALUTES_TO_STATE (state, valutes) {
    state.valutes = valutes;
  }
}
export const actions = {
  getValutes({ commit }) {
    fetchValute().then(({data}) => {
      commit('SET_VALUTES_TO_STATE', data.Valute)
    })
  }
}
