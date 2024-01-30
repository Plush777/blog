<template>
    <div :class="`myPostTop ${$backgroundColor}`" v-if="!postsData.heroImage">
        <span class="hidden">해당 글은 썸네일이 없습니다.</span>
    </div>
    <div class="myPostTop" v-else-if="postsData.heroImage">
        <img class="myPostThumbnail" width="768" height="400" :src="postsData.heroImage" 
        :alt="`${postsData.title} 글 썸네일`"/>
    </div>
</template>

<script setup>
import { defineProps, onMounted } from 'vue';
import { useStore } from '@nanostores/vue';
import { backgroundColor } from '../../stores/store';
import getRandomColor from '../../utils/getRandomColor';

const props = defineProps(['postsData']);

let $backgroundColor = useStore(backgroundColor);

onMounted(() => {
    //hydration mismatch 방지 setTimeout
    setTimeout(() => {
        backgroundColor.set(getRandomColor());
    }, 1);
});

console.log('PostTop.vue',$backgroundColor);
</script>