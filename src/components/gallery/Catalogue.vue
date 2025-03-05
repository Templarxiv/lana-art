<script setup>
import CatalogueItem from './CatalogueItem.vue';
const publicPath = import.meta.env.BASE_URL;
</script>

<template>
    <div>
        <div class="uk-flex-center" uk-grid>
            <div></div>
            <div class="uk-flex-first uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l">

            </div>
        </div>
        <div class="uk-grid-small uk-child-width-expand@s uk-child-width-expand@m " uk-grid>
            <CatalogueItem name="portrait.jpg" label="Портрет" />
            <CatalogueItem name="flowers.jpg" label="Цветы" />
            <CatalogueItem name="etuds.jpg" label="Этюд" />
            <CatalogueItem name="graphics.jpg" label="Графика" />
            <CatalogueItem name="all.jpg" label="Каталог работ" />
        </div>
    </div>
</template>

<style scoped></style>