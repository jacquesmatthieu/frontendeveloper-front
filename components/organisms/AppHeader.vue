<template>
    <div>
        <header class="flex justify-between py-4 items-center">
            <div>
                <LogoWhite class="!h-20 !w-auto"/>
            </div>
            <nav>
                <ul class="flex flex-row justify-between">
                    <li>
                        <nuxt-link to="/about" class="p-4">À propos</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/experience" class="p-4">Expérience</nuxt-link>
                    </li>
                </ul>
            </nav>
            <div>
                <nuxt-link to="https://github.com/jacquesmatthieu" external target="_blank">
                    <font-awesome :icon="['fab', 'github']" />
                </nuxt-link>
                <nuxt-link to="https://www.linkedin.com/in/jacquesmatthieu/" external target="_blank">
                    <font-awesome :icon="['fab', 'linkedin']" />
                </nuxt-link>
            </div>
        </header>
    </div>
</template>

<script setup lang="ts">
import LogoWhite from '~/assets/icons/logo-white.svg';
</script>

<style scoped>

</style>