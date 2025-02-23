<script setup>
const props = defineProps({
    name: {
        type: String,
        required: true,
    },
})
const url = import.meta.env.PROD ? `./images/${props.name}` : `./public/images/${props.name}`;
</script>
<template>
    <div>
        <a class="uk-flex uk-flex-center uk-flex-middle" :href="url" data-caption="Caption 1">
            <img :src="url" alt="">
        </a>
    </div>
</template>