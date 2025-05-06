<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navBar from "./views/components/navBar.vue"
import Footer from "./views/components/footer.vue"

</script>

<template>

    <navBar></navBar>

    <RouterView />

    <Footer />
</template>
