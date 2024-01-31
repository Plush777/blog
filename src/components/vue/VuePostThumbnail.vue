<template>
    <div class="heroImgBackground primary1">
        <span class="hidden">해당 글은 썸네일이 없습니다.</span>
        <span class="heroImgBackgroundName" v-if="name === 'true'">Plush</span>
     </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps(['name']);
</script>