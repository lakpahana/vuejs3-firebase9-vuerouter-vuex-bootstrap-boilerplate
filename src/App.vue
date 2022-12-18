<template>
   <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">Start Bootstrap</a>
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
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li v-if="$store.state.user" class="nav-item">
              <a @click="$store.dispatch('logout')" class="nav-link" href="#"
                >Logout</a
              >
            </li>
            <li v-else class="nav-item">
              <a @click="$store.dispatch('logout')" class="nav-link" href="#"
                >Login / Register</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
  <div class="container">
    <div v-if="$store.state.loading"  class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <!-- <span class="sr-only">Loading...</span> -->
  </div>
</div>
    <HomePage v-if="!$store.state.user"/>
    <router-view />
 
    
  </div>
  <footer class="footer">
      <div class="container">
        <span class="text-muted">by 22nd</span>
      </div>
    </footer>
</template>

<script>
import { onBeforeMount } from "vue";
import { useStore } from "vuex";
import HomePage from "./components/HomePage.vue";

export default {
  components: {
    HomePage,
  },
  setup() {
    const store = useStore();

    onBeforeMount(() => {
      store.dispatch("fetchUser");
    });
  },
};
</script>

<style>
.footer {
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px; /* Set the fixed height of the footer here */
  line-height: 60px; /* Vertically center the text there */
  background-color: #f5f5f5;
}

</style>