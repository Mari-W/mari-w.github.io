<template>
  <div class="pa-0 ma-0" :style="'background-color:' + color">
    <v-container id="work" fill-height fluid class="pa-0">
      <v-spacer/>
      <span :class="this.$isMobile ? 'display-1 text-center mt-6' : 'display-3'">Work Experience and Career</span>
      <v-spacer/>
    </v-container>
    <div style="height: 100px"></div>
    <v-container fill-height fluid class="pa-0">
      <v-spacer v-if="!this.$isMobile"/>
      <v-spacer/>
      <v-img
          src="@/assets/ptw.png"
          max-width="280"
          max-height="300"
          class="rounded-xl"
      ></v-img>
      <v-spacer/>
      <v-card flat color="transparent" :max-width="this.$isMobile ? '90%' : '35%'">
        <v-card-title v-if="!this.$isMobile" class="display-2">
          PTW Dosimetry
        </v-card-title>
        <v-card-text :class="this.$isMobile ?'title text-center mt-4 ml-4' : 'title'">
          As part-time job besides my studies I work as Software Engineer at
          <a
              href="https://www.ptwdosimetry.com/"
              target="_blank"
              style="color:white; text-decoration: none;"
          >PTW Dosimetry</a
          >. PTW focuses on radiation therapy, diagnostic radiology, metrology
          and radiation monitoring. My main tasks are software testing in C# and
          JS as well as verification and validation. I've been working there
          since 2019.
        </v-card-text>
      </v-card>
      <v-spacer/>
      <v-spacer v-if="!this.$isMobile"/>
    </v-container>
    <div style="height: 50px"></div>
    <v-divider/>
    <div style="height: 50px"></div>
    <v-container id="projects" fill-height fluid class="pa-0">
      <v-spacer/>
      <v-spacer/>
      <v-img
          v-if="this.$isMobile"
          src="@/assets/laby.png"
          max-width="280"
          max-height="320"
          class="rounded-lg "
      ></v-img>
      <v-spacer v-if="this.$isMobile"/>
      <v-card flat color="transparent" :max-width="this.$isMobile ? '90%' : '35%'">
        <v-card-title class="display-2" v-if="!this.$isMobile">
          LabyMedia
        </v-card-title>
        <v-card-text :class="this.$isMobile ?'title text-center mt-4 ml-4' : 'title'">
          From 2015-2019 I helped building one of the largest Minecraft modifications worldwide at
          <a
              href="https://www.labymedia.de/"
              target="_blank"
              style="color:white; text-decoration: none;"
          >LabyMedia</a>.
          More than 3 million people are using
          <a
              href="https://www.labymod.net/"
              target="_blank"
              style="color:white; text-decoration: none;"
          >LabyMod</a>
          today and I have to thank all the people at Laby to kick off my
          programming career.
        </v-card-text>
      </v-card>
      <v-spacer/>
      <v-img
          v-if="!this.$isMobile"
          src="@/assets/laby.png"
          max-width="280"
          max-height="320"
          class="rounded-lg "
      ></v-img>
      <v-spacer v-if="!this.$isMobile"/>
      <v-spacer/>
    </v-container>
    <div style="height: 100px"></div>
  </div>
</template>

<script>
export default {
  name: "Work",
  props: ["color"]
};
</script>

<style scoped></style>
