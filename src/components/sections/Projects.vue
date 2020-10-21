<template>
  <div class="pa-0 ma-0" :style="'background-color:'+ color">
    <v-container id="projects" fill-height fluid class="pa-0">
      <v-spacer/>
      <span class="display-3">Projects</span>
      <v-spacer/>
    </v-container>
    <div style="height: 100px"></div>
    <v-container fill-height fluid class="pa-0">
      <v-spacer/>
      <v-img src="@/assets/kds.png" transition max-width="200" max-height="300"
             class="rounded-xl mr-6"></v-img>
      <v-card flat color="transparent" max-width="50%">
        <v-card-title class="display-2">
          Calendar of Failure 2
        </v-card-title>
        <v-card-text class="title">
          Together, <a href="https://github.com/moehritz" target="_blank" style="color:white; text-decoration: none;">a
          good friend</a>
          and I, created
          the website <a href="https://kalenderdesscheiterns.de" target="_blank"
                         style="color:white; text-decoration: none;">kalenderdesscheiterns.de</a>
          for comedian and member of the European Parlament <a href="https://nicosemsrott.eu/" target="_blank"
                                                               style="color:white; text-decoration: none;">Nico
          Semsrott</a>.
          The calender is now finished and can be found <a
            target="_blank"
            href="https://shop.sea-watch.org/Kalender-des-Scheiterns-2-von-Nico-Semsrott"
            style="color:white; text-decoration: none;">here</a>. Besides that the source can be found <a href="https://github.com/Mari-W/kds" target="_blank"
                                                                                         style="color:white; text-decoration: none;">on GitHub</a>.
        </v-card-text>
      </v-card>
      <v-spacer/>
    </v-container>
    <div style="height: 50px"></div>
    <v-divider/>
    <div style="height: 100px"></div>
    <v-container id="projects" fill-height fluid class="pa-0">
      <v-spacer/>
      <v-card flat color="transparent" max-width="42%">
        <v-card-title class="display-2">
          Achievement Util
        </v-card-title>
        <v-card-text class="title">
          Because the overview of achieved grades and ECTS of my university isn't that good looking I decided to do my
          own. Cool thing about it? It can be used as website and native Linux, Windows and Mac Application. It's more a
          proof of concept. Check it out <a href="https://github.com/Mari-W/unif_util" target="_blank"
                                            style="color:white; text-decoration: none;">on GitHub</a>.
        </v-card-text>
      </v-card>

      <v-img  src="@/assets/uni.png" transition max-width="400" max-height="500"
             class="rounded-lg "></v-img>
      <v-spacer/>
    </v-container>
    <div style="height: 60px"></div>
  </div>
</template>

<script>
export default {
  name: "Projects",
  props: ['color']
}
</script>

<style scoped>

</style>
