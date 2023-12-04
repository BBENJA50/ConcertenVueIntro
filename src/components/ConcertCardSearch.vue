<script setup>
defineProps({
  concert: {
    type: Object,
    required: true
  }
})


</script>

<template>
  <RouterLink class="text-decoration-none mb-2 mx-2" :to="{name:'concert-detail', params:{id:concert.id}}">
    <div class="card h-75 m-2" style="width: 7rem;">
      <img :src="concert.img" class="h-50  card-img-top" alt="...">
        <div class="card-body p-2">
          <h6 class="card-title">{{ concert.title }}</h6>
<!--          <p>{{concert.time}}</p>-->
        </div>
    </div>
  </RouterLink>
</template>

<style scoped>
p{
  text-decoration: none;
}
.card{
  cursor: pointer;
  text-decoration: none;
  &.card:hover{
    transform:scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0,0,0,0.2);
  }
}
</style>
