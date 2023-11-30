<script setup>
import {onMounted, ref} from 'vue' //REACTIEF COMPONENT, ergens op de pagina aangepast, zal de data overal aangepast zijn
import ConcertenService from "../../services/ConcertenService";
const concerten = ref(null)


onMounted(()=>{
  ConcertenService.getConcerten()
      .then((response)=>{
        concerten.value = response.data
      }).catch((error)=>{
    console.log(error)
  })

})
defineProps({
  concert: {
    type: Object,
    required: true
  }
})



</script>

<template>
  <div class="home d-flex justify-content-center ">
    <ul class="list-group list-group-flush w-25 text-center my-2">
      <li v-for="concert in concerten" :key="concert.id"  class="list-group-item rounded-pill fw-bold ">
        <RouterLink :to="{name:'concert-detail', params:{id:concert.id}}" class="text-decoration-none">
        <p class="text-white fw-bold my-2">
          {{concert.organisator }}
        </p>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
div{
  background-color: lightblue;
}
li{
  background-color: slateblue;
}
li:hover{
  background-color: darkcyan;
}
</style>
