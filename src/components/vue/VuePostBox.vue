<template>
    <VuePostSlot>
        <VuePostLink :postSlug="post.slug">
            <template #top>
                <VuePostTop :postData="post.data" />
            </template>

            <template #bottom>
                <VuePostBottom :postData="post.data">
                    <slot/>
                </VuePostBottom>
            </template>
        </VuePostLink>
    </VuePostSlot>
</template>

<script setup>
import VuePostSlot from './VuePostSlot.vue';
import VuePostLink from './VuePostLink.vue';
import VuePostBottom from './VuePostBottom.vue';
import VuePostTop from './VuePostTop.vue';
import { defineProps } from 'vue';

const props = defineProps(['post']);
</script>