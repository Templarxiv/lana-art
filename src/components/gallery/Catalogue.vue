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
        <div class="uk-grid-small uk-child-width-expand@s " uk-grid>
            <CatalogueItem name="1970-01-01 03-00-00_1637866612.jpg" label="Портрет" />
            <CatalogueItem name="1970-01-01 03-00-00_1637866625.jpg" label="Цветы" />
            <CatalogueItem name="1970-01-01 03-00-00_1637866628.jpg" label="Этюд" />
            <CatalogueItem name="1970-01-01 03-00-00_1637866681.jpg" label="Графика" />
            <CatalogueItem name="1970-01-01 03-00-00_1637866712.jpg" label="Каталог работ" />
        </div>
    </div>
</template>

<style scoped></style>