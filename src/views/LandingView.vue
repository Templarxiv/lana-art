<script setup>
import About from '../components/About.vue'
import GalleryHeader from '../components/gallery/GalleryHeader.vue'
// import SlideShow from '../components/gallery/SlideShow.vue'
import GalleryMain from '../components/gallery/GalleryMain.vue'
import Contacts from '../components/Contacts.vue'
import Catalogue from '../components/gallery/Catalogue.vue'
</script>

<template>
    <div class="">
        <GalleryHeader />
        <div style="background: white;">
            <div class="uk-container">
                <h2>Обо мне</h2>
                <About landing="true" />
            </div>
        </div>
        <div class="uk-section" style="background: #b3b3b3;">
            <div class="uk-container">
                <h2>Галерея</h2>
                <Catalogue />
            </div>
        </div>
        <div style="background: white;">
            <div class="uk-section">
                <div class="uk-container">
                    <h2>Контакты</h2>
                    <Contacts />
                </div>
            </div>
        </div>
    </div>
</template>

<style>
@media (min-width: 1024px) {
    .landingpage {
        margin: 0 auto;
        padding: 0 80px;
        position: relative;
        max-width: 1100px;
        overflow-y: auto;
        overflow-x: hidden;
        background-color: #1F1D2B;
    }

    .landingpage::before {
        content: "";
        position: absolute;
        width: 123px;
        height: 123px;
        left: 60%;
        top: 138px;
        filter: blur(90px);
        background-color: #FB37FF;
    }

    .landingpage::after {
        content: "";
        position: absolute;
        width: 123px;
        height: 123px;
        left: 80%;
        top: 550px;
        background-color: #18B2DE;
        filter: blur(80px);
    }

    .landingpage .navbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 0;
        width: 100%;
    }

    .landingpage .box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 80px;
    }

    .landingpage .auction {
        margin-top: 100px;
    }

    .landingpage .discover {
        display: flex;
        flex-direction: column;
    }

    .landingpage .footer {
        margin: 50px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .landingpage .footer2 {
        display: flex;
        justify-content: space-between;
        padding-bottom: 30px;
        border-top: 1px solid #F2F2F2;
    }
}
</style>