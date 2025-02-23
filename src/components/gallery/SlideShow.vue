<script setup>
defineProps({
    msg: {
        type: String,
        required: true,
    },
})
</script>

<template>
    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow>

        <div class="uk-slideshow-items">
            <div>
                <img src="@/assets/images/1970-01-01 03-00-00_1637866612.jpg" alt="" uk-cover>
            </div>
            <div>
                <img src="@/assets/images/1970-01-01 03-00-00_1637866625.jpg" alt="" uk-cover>
            </div>
            <div>
                <img src="@/assets/images/1970-01-01 03-00-00_1637866628.jpg" alt="" uk-cover>
            </div>
        </div>

        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href uk-slidenav-previous
            uk-slideshow-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href uk-slidenav-next
            uk-slideshow-item="next"></a>

    </div>
</template>

<style scoped></style>
