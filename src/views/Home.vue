<template>
  <div class="busca">
    <div class="titulo">Github <span class="italic">Search</span></div>
    <form>
      <input name="busca" id="busca" type="text" v-model="user">
      <input value="Buscar" id="lupa" type="submit" @click.prevent="getUser">
  </form>
  </div>
</template>

<script>
//import axios from 'axios'
import {mapActions} from 'vuex'

export default {
  name: "Home",
  data() {
    return {
      user: [],
      repos: []
    }
  },
  methods: {
    ...mapActions({getUserAction: "getUser", getReposAction: "getRepos"}),
    getUser() {

      this.getUserAction(this.user)
      this.getReposAction(this.user)
      this.$router.push({name: "result"})
    }
  }
}
</script>

<style scoped >
.titulo {
  font-family: 'Roboto', sans-serif;
  font-size: 64px;
}
.italic {
  font-weight: 300;
  font-style: italic;
}
input {
  height: 50px;
}
.busca {
  text-align: center;
  margin-top: 200px;
}
#busca {
  border: 2px solid #000000;
  width: 60vw;
}
#lupa{
background: url('../assets/search.svg') no-repeat center center;
border: none;
text-indent: -150px;
width: 100px;
background-color: #000;
}
</style>