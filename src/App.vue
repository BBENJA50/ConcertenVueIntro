<script setup>
import {onMounted, ref, watchEffect} from "vue";
import { RouterLink, RouterView } from "vue-router";
import ConcertCardSearch from "@/components/ConcertCardSearch.vue";
import ConcertenService from "../services/ConcertenService";

const searchQuery = ref("");
const concerts = ref([]);

const handleSearch = () => {
  const filteredConcerts = concerts.value.filter((concert) =>
      concert.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
  concerts.value = filteredConcerts;
};

const clearSearch = () => {
  searchQuery.value = "";
  getConcertData();
};

const getConcertData = () => {
  ConcertenService.getAllConcerten()
      .then((response) => {
        concerts.value = response.data;
      }).catch((error) => {
    console.log(error)
  });
};

onMounted(() => {
  watchEffect(() => {
    getConcertData();
  })
})

</script>

<template>
  <div class="d-flex">
    <nav class="navbar navbar-expand-lg bg-body-tertiary ps-5 d-flex justify-content-center align-items-center">
      <div class="container-fluid d-flex justify-content-center align-items-center">
        <a class="navbar-brand" href="#">Concerten</a>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink class="nav-link active" to="/">
                HOME
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link " to="/organisatoren">
                ORGANISATOREN
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/about">
                ABOUT
              </RouterLink>
            </li>
          </ul>
        </div>
        <!-- Search Bar -->
        <div class="input-group">
          <input
              type="text"
              class="form-control"
              placeholder="Search"
              v-model="searchQuery"
              @input="handleSearch"
          />
          <button class="btn btn-outline-secondary" @click="clearSearch">
            Clear
          </button>
        </div>
      </div>
    </nav>
    <!-- Display filtered concerts -->

  </div>
  <div v-if="searchQuery" id="wrapper" class="d-flex justify-content-center align-items-center bg-secondary flex-wrap my-2">
    <ConcertCardSearch
        v-for="concert in concerts"
        :key="concert.id"
        :concert="concert"
    />
  </div>
  <RouterView />
</template>

<style scoped>
main {
  background-color: #181818;
}
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
