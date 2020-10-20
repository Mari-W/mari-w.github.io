<template>
  <v-app>
    <app-bar/>

    <v-main>
      <home></home>
    </v-main>

    <app-footer/>
  </v-app>
</template>

<script>

import AppBar from "@/components/AppBar";
import AppFooter from "@/components/AppFooter";
import Home from "@/views/Home"

export default {
  name: "App",

  components: {Home, AppFooter, AppBar},

  data: () => ({
    //
  })
};
</script>

<style>
@font-face {
  font-family: 'JetBrains Mono';
  src: url('https://raw.githubusercontent.com/JetBrains/JetBrainsMono/master/fonts/web/JetBrainsMono-Regular.eot') format('embedded-opentype'),
  url('https://raw.githubusercontent.com/JetBrains/JetBrainsMono/master/fonts/ttf/JetBrainsMono-Regular.ttf') format('truetype');
  font-weight: bold;
  font-style: normal;
}

* {
  -webkit-font-feature-settings: "liga" on, "calt" on;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  font-family: 'JetBrains Mono';
}
</style>
