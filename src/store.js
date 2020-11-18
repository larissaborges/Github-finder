import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        github: {
            url: 'https://api.github.com/users',
            client_id: 'bcfa59adb0b1d795',
            client_secret: 'd442ddd61bce8b995b92033774cdb29ea4dbcff0',
            count: 100,
            sort: 'created: asc'
          },
          user: [],
          repos: []
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
        },
        setRepos(state, payload) {
            state.repos = payload
        }
    },
    actions: {
        getUser(state, user) {
             const {url, client_id, client_secret} = this.state.github
            axios.get(`${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`)
            .then(response => {
              state.commit("setUser", response.data) 
            })
        },
        getRepos(state, user) {
             const {url, client_id, client_secret, count, sort} = this.state.github
            axios.get(`${url}/${user}/repos?per_page=${count}&sort=${sort}&client_id=${client_id}&client_secret=${client_secret}`)
            .then(response => {
                state.commit("setRepos", response.data) 
            })
        }
    }
})

export default store