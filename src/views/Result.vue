<template>
<div class="container-fluid">
   <div class="busca">
    <div class="titulo">Github <span class="italic">Search</span></div>
    <form>
      <input name="busca" id="busca" type="text" v-model.lazy="userGithub">
      <input value="Buscar" id="lupa" type="submit" @click.prevent="getUser">
    </form>
  </div>
  <div class="row mt-3" v-if="user.length !== 0">
    <div class="col-md-3 ml-3">
      <Profile :user="user"/>
    </div>
    <div class="cml-md-9 ml-5 repos">
      <Repo v-for="(repo, index) in repos" :key="index" :repo="repo"/>
    </div>
  </div>
  <div v-else-if="user && user.length === 0"> Busca sem resultados :( Tente buscar por outro usuário. </div>
  <Loading v-else />
</div>

</template>

<script>
// import axios from 'axios'
import Profile from '../components/Profile'
import Repo from '../components/Repo'
import Loading from '../components/Loading'
import {mapActions} from 'vuex'

export default {
  components: {Profile, Repo, Loading},
  name: "Result",
  data() {
    return {
      userGithub: ""
    }
  },
  computed: {
    user() {
        return this.$store.state.user
      },    
    repos() {
      let data = this.$store.state.repos
      let arr = []
      for(let key in data) {
        data[key]["key"] = key
        arr.push(data[key])
      }
    arr.sort(function(a,b) { return (b.stargazers_count)-(a.stargazers_count)});
    return arr
    }
  },
  methods: {
     ...mapActions({getUserAction: "getUser", getReposAction: "getRepos"}),
     getUser() {
      this.getUserAction(this.user)
      this.getReposAction(this.user)
      this.userGithub = ""
    }
  },
  watch: {
    userGithub(val) {
      this.$store.state.user = val
    }
  }
}
</script>

<style scoped>


form, .titulo {
  display: flex;
}
.titulo {
  font-family: 'Roboto', sans-serif;
  font-size: 42px;
}
.italic {
  font-weight: 300;
  font-style: italic;
  margin-left: 10px;
}
input{
  height: 50px;
}
.busca {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}
#busca {
  border: 2px solid #000000;
  width: 600px;
}
#lupa{
background: url('../assets/search.svg') no-repeat center center;
border: none;
text-indent: -150px;
width: 100px;
background-color: #000;
}
.repos {
  max-width: 800px;
}
@media (max-width: 768px) {
  .repos {
  max-width: 500px;
}
#busca{
  width: 300px;
}
}
@media (max-width: 767px){
  .busca{
    display: block;
    text-align: center;
  }
}
</style>