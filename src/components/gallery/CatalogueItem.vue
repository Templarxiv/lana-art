<script setup>
const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    label: {
        type: String,
        required: true,
    },
})
const url = import.meta.env.PROD ? `./images/${props.name}` : `./public/images/${props.name}`;
</script>
<template>
    <a href="/gallery" class="uk-card uk-card-small uk-card-default uk-card-hover uk-card-body" style="width: 200px; margin: 5px; padding: 2px;">
        <div class="uk-card-body" style="height: 200px; padding: 0;">
            <div style="max-height: 100%;"  class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light"
                :data-src="url"
                uk-img>
            </div>

            <!-- <img :src="url" alt="" style="height: 100%; width: 100%;"> -->
        </div>
        <!-- <div class="uk-card-media-top">
            <img :src="url" alt="" height="150">
        </div> -->
        <div class="uk-card-footer uk-text-center" style="height: 30px;">{{ label }}</div>
    </a>
</template>