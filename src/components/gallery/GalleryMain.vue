<script setup>
import GalleryMainItem from './GalleryMainItem.vue';
const publicPath = import.meta.env.BASE_URL;
</script>

<template>
    <div class="" style="padding: 20px;">

        <div class="uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l uk-light js-grid-masonry uk-grid uk-flex-top uk-flex-wrap-top"
            uk-grid="parallax: 0" masonry="pack" style="height: 1160px;" uk-lightbox=" animation: fade">
            <GalleryMainItem name="1970-01-01 03-00-00_1637866612.jpg"/>
            <GalleryMainItem name="1970-01-01 03-00-00_1637866625.jpg"/>
            <GalleryMainItem name="1970-01-01 03-00-00_1637866628.jpg"/>
            <GalleryMainItem name="1970-01-01 03-00-00_1637866681.jpg"/>
            <GalleryMainItem name="1970-01-01 03-00-00_1637866712.jpg"/>
            <GalleryMainItem name="1970-01-01 03-00-00_1637866612.jpg"/>
            <GalleryMainItem name="1970-01-01 03-00-00_1637866612.jpg"/>
            <GalleryMainItem name="1970-01-01 03-00-00_1637866612.jpg"/>
            <GalleryMainItem name="1970-01-01 03-00-00_1637866612.jpg"/>
            <GalleryMainItem name="1970-01-01 03-00-00_1637866612.jpg"/>
        </div>
    </div>
</template>

<style scoped></style>