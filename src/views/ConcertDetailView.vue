<script setup>
  import {ref, onMounted} from "vue";
  import ConcertenService from "../../services/ConcertenService";
  import FoodtrucksService from "../../services/FoodtrucksService";
  import Foodtruck from "@/components/Foodtruck.vue";

  const concert = ref(null)
  // const id = ref(1)
  const props= defineProps({
    id:{
      required:true,
    }
  })
  const foodtrucks = ref(null)


  onMounted(()=>{
    ConcertenService.getConcert(props.id)
        .then((response)=>{
          concert.value = response.data
        })
        .catch((error)=>{
          console.log(error)
        })
    FoodtrucksService.getFoodtrucks()
        .then((response)=>{
          foodtrucks.value = response.data
          console.log(foodtrucks.value)
        })
        .catch((error)=>{
          console.log(error)
        })
  })
</script>
<template>
  <div v-if="concert" class="position-absolute top-50 start-50 translate-middle alert alert-secondary">
    <div class="d-flex justify-content-between">
      <div>
        <h1>{{ concert.title }}</h1>
        <p>{{ concert.time }} - {{ concert.date }} - {{ concert.location }}</p>
        <p>{{ concert.description }}</p>
      </div>

      <div class="">
        <RouterLink to="/" class="btn btn-info text-white fw-bold p-3">TERUG NAAR HOME</RouterLink>
      </div>
    </div>
    <h2>TO EAT</h2>
    <div v-if="foodtrucks" class="d-flex">

      <Foodtruck v-for="foodtruck in foodtrucks" :key="foodtruck.id" :foodtruck="foodtruck" >
      </Foodtruck>
    </div>
  </div>

</template>