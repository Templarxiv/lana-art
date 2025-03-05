<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import FooterView from './views/FooterView.vue'
</script>

<template>
  <!-- <header> -->
  <!-- </HelloWorld msg="" /> -->
  <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; end: + *; offset: 0">
    <nav class="uk-navbar-container">
      <div class="uk-container">
        <div uk-navbar>
          <div class="uk-navbar-center uk-preserve-color">
            <ul class="uk-navbar-nav uk-dark">
              <div class="uk-navbar-item">
                <div>Вета Насреддин</div>
              </div>
              <li>
                <RouterLink class="aze azr bdk" to="/">Главная</RouterLink>
              </li>
              <li>
                <RouterLink class="aze azr bdk" to="/gallery">Галерея</RouterLink>
              </li>
              <!-- <li class="uk-parent">
                <RouterLink class="aze azr bdk" to="/about">Обо мне</RouterLink>
              </li> -->
              <li>
                <RouterLink class="aze azr bdk" to="/contacts">Контакты</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
  <router-view v-slot="{ Component }">
    <transition name="slide-fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <!-- <RouterView></RouterView> -->
</template>

<style scoped>
/*
Enter and leave animations can use different
durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.4s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(50px);
  opacity: 0;
}
</style>
