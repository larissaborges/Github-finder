<template>
     <div class="perfil">
         <div>
            <img class="img-fluid" :src="user.avatar_url" alt="Avatar Usuário">
            <div class="name">{{user.name}}</div>
             <div class="n">{{user.login}}</div>
        </div>
        <div>
            <ul>
                <li>
                   <span class="company-icon"></span> {{user.company}}
                 </li>
                <li >
                    <span class="loc-icon"></span> {{user.location}}
                 </li>
                 <li >
                   <span class="stars-icon"></span> {{user.stargazers_count}}
                 </li>
                 <li >
                   <span class="repos-icon"></span> {{user.public_repos}}
                </li>
                <li >
                   <span class="followers-icon"></span> {{user.followers}}
                </li>
            </ul>
         </div>
    </div>
</template>

<script>
export default {
    name: "Profile",
    props: ["user", "repos"],
}
</script>

<style scoped>
img{
    max-width: 300px;
}
.perfil {
    font-family: 'Rubik', sans-serif;
}
.name {
    font-size: 36px;
}
ul {
    list-style: none;
    padding: 0px;
    margin-top: 20px;
}
li {
    display: flex;
    margin: 10px;
}
img{
    width: 100%;
}
span{
  background-size: cover;
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
.company-icon {
  background: url('../assets/organization.svg') no-repeat center center;
}
.loc-icon {
  background: url('../assets/location.svg') no-repeat center center;
}
.stars-icon {
  background: url('../assets/star.svg') no-repeat center center;
}
.repos-icon {
  background: url('../assets/icon.svg') no-repeat center center;
}
.followers-icon {
  background: url('../assets/followers.svg') no-repeat center center;
}
</style>