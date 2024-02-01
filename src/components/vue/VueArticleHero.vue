<template>
     <img v-if="heroImage" class="heroImgItem" width="1903" height="400" :src="heroImage" :alt="title"/>
     <VuePostThumbnail v-else-if="!heroImage"/>
</template>

<script setup>
import { defineProps } from 'vue';
import VuePostThumbnail from './VuePostThumbnail.vue';

const props = defineProps(['heroImage','title']);
</script>