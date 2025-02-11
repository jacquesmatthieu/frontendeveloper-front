<template>
    <div class="bg-black text-white min-h-screen">
        <main class="container mx-auto">
            <AppHeader />
            <slot />
            <AppFooter />
        </main>
    </div>
  </template>
<script setup lang="ts">
import AppHeader from '~/components/organisms/AppHeader.vue'
import AppFooter from '~/components/organisms/AppFooter.vue'

</script>