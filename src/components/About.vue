<script setup>
defineProps({
    landing: {
        type: String,
    },
})
const avatar = "../assets/avatar.jpg"
</script>

<template>

    <div class="uk-section">
        <div class="uk-container">
            <div>
                <div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light"
                    data-src="./avatar.jpg" uk-img sizes="(min-width: 150px) 150px, 10vw">
                </div>
                <div v-if="landing == 'true'"
                    class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
                    <h1 uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; end: 50vh + 50%;">Художник Светлана Насреддин
                    </h1>
                    <p uk-parallax="opacity: 0,1; y: 100,0; scale: 0.5,1; end: 50vh + 50%;">«Моя техника живописи
                        сложилась
                        во
                        время работы в музее Спасо-Андроникова монастыря. Она строится на
                        соединении
                        приемов древнерусской иконописи, русской живописи 18 века, композиционных находок «МИРА
                        ИСКУССТВА» и
                        русского
                        конструктивизма.
                        Подобно художникам прошлого, я использую натуральные пигменты, стертые на желтке.»
                    </p>
                </div>
                <div v-else
                    class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
                    <h1>Художник Светлана Насреддин
                    </h1>
                    <p>«Моя техника живописи
                        сложилась
                        во
                        время работы в музее Спасо-Андроникова монастыря. Она строится на
                        соединении
                        приемов древнерусской иконописи, русской живописи 18 века, композиционных находок «МИРА
                        ИСКУССТВА» и
                        русского
                        конструктивизма.
                        Подобно художникам прошлого, я использую натуральные пигменты, стертые на желтке.»
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped></style>
