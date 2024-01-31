<template>
    <div class="myPostBottom">
        <div class="myPostBottomInner">
            <h4 class="myPostTitle">{{postData.title}}</h4>
            <p class="myPostDescription">{{postData.description}}</p>
        </div>
        <p class="myPostDate">
            <slot/>
        </p>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps(['postData']);
</script>