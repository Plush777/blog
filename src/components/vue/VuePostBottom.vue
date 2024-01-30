<template>
    <div class="myPostBottom">
        <h4 class="myPostTitle">{{postsData.title}}</h4>
        <p class="myPostDescription">{{postsData.description}}</p>
        <p class="myPostDate">
            <slot/>
        </p>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps(['postsData']);
</script>