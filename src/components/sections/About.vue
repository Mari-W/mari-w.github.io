<template>
  <div class="pa-0 ma-0">
    <div style="height: 100px"></div>
    <v-container id="about" fill-height fluid class="pa-0">
      <v-spacer/>
      <v-card flat color="transparent" max-width="50%">
        <v-card-title class="display-2">
          Hi, I'm Marius Weidner
        </v-card-title>
        <v-card-text class="title">
          I'm a Software Engineer studying Computer Science in Germany.
          My passion is to write backend services but I also like doing design and frontend.
          <!--          Mainly I use <span style="color:white">Kotlin, JavaScript and Python</span> but developed stuff in <span-->
          <!--            style="color:white">Rust, Dart and C++</span> as well.-->
          Besides sitting in front of my computer I do play soccer and volunteer as youth worker.
        </v-card-text>
        <v-divider/>
        <v-card-subtitle class="headline white--text">Programming Languages</v-card-subtitle>
        <v-card-text class="title">
          <strong>Kotlin
            - Python
            - JavaScript</strong>
          - Dart
          - Rust
          - C++
          - Java
        </v-card-text>
        <v-divider/>
        <v-card-subtitle class="headline white--text">Frameworks and Tools</v-card-subtitle>
        <v-card-text class="title">
          <strong>Ktor
            - VueJS
            - Android
            - MongoDB
            - MySQL </strong>
          - Tensorflow
          - Selenium
        </v-card-text>
      </v-card>
      <v-img src="@/assets/picture.png" transition max-width="340" max-height="450"
             class="rounded-xl ml-12"></v-img>
      <v-spacer/>
    </v-container>
    <div style="height: 80px"></div>
  </div>
</template>

<script>
export default {
  name: "About",
  props: ['color']
}
</script>

<style scoped>

</style>
