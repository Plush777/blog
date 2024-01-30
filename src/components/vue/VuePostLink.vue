<template>
   <a :href="`/posts/${postsData.slug}/`" class="myPostLink">
        <div class="myPostTopBox">
            <slot/>
        </div>
    </a>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps(['postsData']);
</script>