<template>
    <div class="">
        <div class="row">
            <div class="">
                <div class="name">{{repo.name}}</div>
                <div class="description">{{repo.description}}</div>
                <div class="stars mt-2"><span class="star-icon mr-2"></span>{{repo.stargazers_count}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["repo"],
    name: "Repo"
}
</script>

<style scoped>
.name {
  font-family: 'Rubik', sans-serif;
  font-size: 36px;
}
.description, .stars {
  font-family: 'Rubik', sans-serif;
  color: #757575;
}
.stars {
    display: flex;
}
.star-icon{
  background: url('../assets/star.svg') no-repeat center center;
  background-size: cover;
  width: 20px;
  height: 20px;
}
</style>