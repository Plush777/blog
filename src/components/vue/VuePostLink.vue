<template>
   <a :href="`/posts/${postSlug}/`" class="myPostLink">
        <div class="myPostTopBox">
            <slot name="top"/>
        </div>
        <slot name="bottom"/>
    </a>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps(['postSlug']);
</script>