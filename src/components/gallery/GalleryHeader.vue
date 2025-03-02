<script setup>
import GalleryHeaderItem from './GalleryHeaderItem.vue';
const publicPath = import.meta.env.BASE_URL;
const url = import.meta.env.PROD ? `./images/thumbs/` : `./public/images/thumbs/`;
let imagesBlob = null;
if (import.meta.env.PROD) {
    imagesBlob = import.meta.glob('/public/images/thumbs/*.{png,jpe?g,JPG,svg}');
} else {
    imagesBlob = import.meta.glob('/public/images/thumbs/*.{png,jpe?g,JPG,svg}');
}
// const images = Object.values(imagesBlob);
let images = Object.keys(imagesBlob).map(function (key) {
    return key;
});
const animP = (index) => {
    if (index == images.length - 1) {
        return "img-wrapper slower last";
    }
    let anims = ["slower", "slower vertical", "slower slower-down", "faster1", "slower slower2"];
    var anim = anims[Math.floor(Math.random() * anims.length)];
    return "img-wrapper " + anim;
}
const pointerScroll = (elem) => {

    const dragStart = (ev) => elem.setPointerCapture(ev.pointerId);
    const dragEnd = (ev) => elem.releasePointerCapture(ev.pointerId);
    const drag = (ev) => elem.hasPointerCapture(ev.pointerId) && (elem.scrollLeft -= ev.movementX);

    elem.addEventListener("pointerdown", dragStart);
    elem.addEventListener("pointerup", dragEnd);
    elem.addEventListener("pointermove", drag);
};

document.querySelectorAll(".external").forEach(pointerScroll);
</script>

<template>
    <div class="external">
        <div class="horizontal-scroll-wrapper">
            <!-- <div class="col-md-12" v-for="(image, index) in images" :key="index">
                <GalleryHeaderItem class="img-wrapper slower" v-for="(image, index) in images" :name="index" />
            </div> -->
            <GalleryHeaderItem :class="animP(key)" v-for="(image, key, index) in images" :name="image" />
            <GalleryHeaderItem :class="animP(key)" v-for="(image, key, index) in images" :name="image" />
            <GalleryHeaderItem :class="animP(key)" v-for="(image, key, index) in images" :name="image" />
        </div>
    </div>
</template>
<style scoped>
/* Inspired by this pen by Pieter Biesemans https://codepen.io/pieter-biesemans/pen/BQBWXX and My Mother Before Me project http://mymotherbeforeme.com/ */

.external {
    overflow: hidden;
    height: 100vh;
    /* touch-action: none; */
    /* Add also this */
    /* user-select: none; */
    /* width: 300px; */
}

.parent {
    width: 300px;
    border: 5px solid red;

    /* Prevent text highlighting */
}

/* .child {
    width: 1000px;
    padding: 10px;
} */

* {
    /* box-sizing: border-box; */
}

/* hide scrollbar */
::-webkit-scrollbar {
    width: 1px;
    height: 1px;
}

::-webkit-scrollbar-button {
    width: 1px;
    height: 1px;
}


.horizontal-scroll-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vh;
    transform: rotate(-90deg) translate3d(0, -100vh, 0);
    transform-origin: right top;
    /* overflow-y: auto;
    overflow-x: hidden; */
    padding: 0;
    height: 100vw;
    perspective: 1px;
    transform-style: preserve-3d;
    padding-bottom: 10rem;

    animation: slide infinite 15s alternate;
    /* width: 1000px;
    padding: 10px; */
}

#horizontal-scroll-wrapper:hover>div {
    animation-play-state: paused;
}

@keyframes slide {
    0% {
        margin-left: 0px;
    }

    /* 
    10% {
        margin-left: -100px;
    }

    30% {
        margin-left: -300px;
    }

    40% {
        margin-left: -400px;
    }

    50% {
        margin-left: -500px;
    } */
    100% {
        margin-left: -1500px;
    }
}

.img-wrapper {
    transform: rotate(90deg);
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 40vh;
    transform-origin: 50% 50%;
    transform: rotate(90deg) translateZ(.1px) scale(0.9) translateX(0px) translateY(-3vh);
    transition: 1s;
}

.img-wrapper:hover {
    min-height: 65vh;
}

.slower {
    transform: rotate(90deg) translateZ(-.2px) scale(1.1) translateX(0%) translateY(-10vh);
}

.slower1 {
    transform: rotate(90deg) translateZ(-.25px) scale(1.05) translateX(0%) translateY(8vh);
}

.slower2 {
    transform: rotate(90deg) translateZ(-.3px) scale(1.3) translateX(0%) translateY(2vh);
}

.slower-down {
    transform: rotate(90deg) translateZ(-.2px) scale(1.1) translateX(0%) translateY(16vh);
}

.faster {
    transform: rotate(90deg) translateZ(.15px) scale(0.8) translateX(0%) translateY(14vh);
}

.faster1 {
    transform: rotate(90deg) translateZ(.05px) scale(0.8) translateX(0%) translateY(10vh);
}

.fastest {
    transform: rotate(90deg) translateZ(.22px) scale(0.7) translateX(-10vh) translateY(-15vh);
}

.vertical {
    transform: rotate(90deg) translateZ(-.15px) scale(1.15) translateX(0%) translateY(0%);
}

.last {
    transform: rotate(90deg) translateZ(-.2px) scale(1.1) translateX(25vh) translateY(-8vh);
}

.scroll-info,
header {
    position: absolute;
    left: 1rem;
}


header {
    bottom: 1rem;
}

.scroll-info {
    top: 1rem;
}

a {
    color: inherit;
    font-weight: 500;

}

h1 {
    font-weight: 300;
    font-size: 1rem;
}

.img-wrapper a {
    overflow: hidden;
    display: block;
    padding: 1vh;
    background: #efecdb;
    box-shadow: 0 10px 50px #5f2f1182;
}

img {
    max-width: 45vh;
    max-height: 50vh;
    transition: .5s;
    vertical-align: top;
    /* filter: saturate(40%) sepia(30%) hue-rotate(5deg); */
}

a:hover img {
    filter: none;
}

p {
    margin: 0;
}

.scroll-info {
    display: flex;
    align-items: center;
}

.icon svg {
    width: 50px;
    fill: currentcolor;
}
</style>