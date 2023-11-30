<script setup>
defineProps({
  foodtruck: {
    type: Object,
    required: true
  }
})


</script>

<template>
  <div class="card" style="width: 18rem;">

      <img :src="foodtruck.img" class="card-img-top " alt="...">



      <div class="card-body">
        <h5 class="card-title">{{ foodtruck.title }}</h5>
        <p class="card-text">{{ foodtruck.description }}</p>
      </div>

        <ul class="list-group list-group-flush">
          <li class="list-group-item">{{ foodtruck.openinghours }}</li>
          <li class="list-group-item">{{ foodtruck.location }}</li>
          <li class="list-group-item">{{ foodtruck.owner }}</li>
        </ul>


  </div>
</template>

<style scoped>

</style>
