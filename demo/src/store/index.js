import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

const state = {
  list: [{
      name: "王小虎",
      age: 12,
      sex: "男",
    },
    {
      name: "王小",
      age: 22,
      sex: "女",
    },
    {
      name: "小虎",
      age: 32,
      sex: "男",
    },
    {
      name: "小小",
      age: 42,
      sex: "女",
    },
  ]
}

// 修改数据
const mutations = {
  //添加
  addlist(state, arr) {
    state.list.push(arr)
  },
  //删除
  removelist(state,id){
    state.list.splice(id,1)
  }
}

// 请求
const actions = {
  //添加
  addList(context,from) {
    context.commit('addlist', from)
  },
  //删除
  removeList(context,id){
    context.commit('removelist',id)
  },
}

// 导出数据
const getters = {
  list(state) {
    return state.list
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
})
