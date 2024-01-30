<template>
     <img v-if="heroImage" class="heroImgItem" width="1903" height="400" :src="heroImage" :alt="title" />
     <div :class="`heroImgBackground ${$backgroundColor}`" v-else-if="!heroImage">
        <span class="hidden">해당 글은 썸네일이 없습니다.</span>
     </div>
</template>

<script setup>
import { defineProps, onMounted } from 'vue';
import { useStore } from '@nanostores/vue';
import { backgroundColor } from '../../stores/store';

const props = defineProps(['heroImage','title']);

let $backgroundColor = useStore(backgroundColor);
console.log('ArticleHero.vue',$backgroundColor);
</script>