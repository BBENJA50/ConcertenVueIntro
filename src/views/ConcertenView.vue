<script setup>
  import ConcertCard from "@/components/ConcertCard.vue";
  import {onMounted, ref} from 'vue' //REACTIEF COMPONENT, ergens op de pagina aangepast, zal de data overal aangepast zijn
  import ConcertenService from "../../services/ConcertenService";
  import {watchEffect} from "vue";

  const concerten = ref(null)
  const isLaatstePagina = ref(false)
  const concertenPerPagina = ref(3)
  const totaalAantalPaginas=ref(0)
  const totaalAantalConcerten = ref(0)
  const props = defineProps({
    page: Number
  })
  const updateConcerten = () => {
    ConcertenService.getConcerten(concertenPerPagina.value, props.page)
        .then((response) => {
          concerten.value = response.data;
          isLaatstePagina.value = response.data.length < concertenPerPagina.value;
          totaalAantalPaginas.value = Math.ceil(totaalAantalConcerten.value / concertenPerPagina.value);
        })
        .catch((error) => {
          console.log(error);
        });
  };

  onMounted(() => {
    ConcertenService.getAllConcerten()
        .then((response) => {
          totaalAantalPaginas.value = Math.ceil(response.data.length / concertenPerPagina.value)
          totaalAantalConcerten.value = response.data.length
        }).catch((error) => {
      console.log(error)
    });
    watchEffect(() => {
      updateConcerten();
    })
  })

  const selectAantal = (aantal) => {
    concertenPerPagina.value = aantal;
    props.page = 1;
    updateConcerten();
  }
</script>

<template>
  <div class="home mx-5 d-flex flex-column justify-content-between">
    <div id="wrapper" class="d-flex justify-content-center flex-wrap my-2">
      <ConcertCard v-for="concert in concerten" :key="concert.id" :concert="concert" />

    </div>
    <div class="d-flex justify-content-center flex-wrap my-2">
      <div class="dropup-center dropup pe-4">
        <button class="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Items per pagina: {{ concertenPerPagina }}
        </button>
        <ul class="dropdown-menu">
          <li v-for="items in totaalAantalConcerten" :key="items">
            <a class="dropdown-item" @click.prevent="selectAantal(items)">{{items}}</a>
          </li>
        </ul>
      </div>
      <ul class="pagination">
        <li class="page-item" v-if="page!==1">
          <RouterLink class="page-link" :to="{name:'concerten',query:{page:page-1}}">VORIGE</RouterLink>
        </li>
        <li class="page-item" v-for="pageNum in totaalAantalPaginas" :key="pageNum">
          <RouterLink class="page-link" :class="{'active' : page === pageNum}" :to="{name:'concerten',query:{page:pageNum}}">{{ pageNum }}</RouterLink>
        </li>
        <li class="page-item" v-if="page !== totaalAantalPaginas">
          <RouterLink class="page-link" :to="{name:'concerten',query:{page:page+1}}">VOLGENDE</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>
