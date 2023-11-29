<script setup>
  import ConcertCard from "@/components/ConcertCard.vue";
  import {onMounted, ref} from 'vue' //REACTIEF COMPONENT, ergens op de pagina aangepast, zal de data overal aangepast zijn
  import ConcertenService from "../../services/ConcertenService";
  const concerten = ref(null)

  onMounted(()=>{
    ConcertenService.getConcerten()
        .then((response)=>{
          concerten.value = response.data.concerten
        }).catch((error)=>{
          console.log(error)
    })
  })

</script>

<template>
  <div class="home">
    <div id="wrapper" class="d-flex justify-content-evenly my-2">
      <ConcertCard v-for="concert in concerten" :key="concert.id" :concert="concert" />
    </div>
  </div>
</template>
