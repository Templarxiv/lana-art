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
  <!-- </header> -->
  <RouterView />
  <FooterView />
</template>

<style scoped></style>
