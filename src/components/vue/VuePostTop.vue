<template>
    <VuePostThumbnail name="true" v-if="!postData.heroImage"/>
    <img class="myPostThumbnail" width="768" height="400" :src="postData.heroImage" v-else-if="postData.heroImage"
    :alt="`${postData.title} 글 썸네일`"/>
</template>

<script setup>
import { defineProps } from 'vue';
import VuePostThumbnail from './VuePostThumbnail.vue';

const props = defineProps(['postData']);
</script>