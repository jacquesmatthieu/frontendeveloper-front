<template>
  <div>
    <Header />
    <main class="tw-container tw-mx-auto">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import Header from "@components/Header/index.vue";
export default {
  name: "defaultLayout",
  components: Header,
};
</script>
