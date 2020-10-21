<template>
  <div class="pa-0 ma-0" :style="'background-color:'+ color">
    <v-container id="projects" fill-height fluid class="pa-0">
      <v-spacer/>
      <v-img alt="Image of me" src="@/assets/kds.png" transition max-width="170" max-height="260"
             class="rounded-xl mr-5"></v-img>
      <v-card flat color="transparent" max-width="42%">
        <v-card-title class="display-1">
          Calendar of Failure 2
        </v-card-title>
        <v-card-text class="subtitle-1">
          Together <a href="https://github.com/moehritz" target="_blank" style="color:white; text-decoration: none;">a good friend</a>
          and I created
          the website <a href="https://kalenderdesscheiterns.de"  target="_blank" style="color:white; text-decoration: none;">kalenderdesscheiterns.de</a>
          for comedian and member of the European Parlament <a href="https://nicosemsrott.eu/" target="_blank"
                                                               style="color:white; text-decoration: none;">Nico
          Semsrott</a>.
          The calender is now finished and can be found <a
            target="_blank"
            href="https://shop.sea-watch.org/Kalender-des-Scheiterns-2-von-Nico-Semsrott"
            style="color:white; text-decoration: none;">here</a>.
        </v-card-text>
      </v-card>
      <v-spacer/>
    </v-container>
    <div style="height: 40px"></div>
<!--    <v-container id="projects" fill-height fluid class="pa-0">-->
<!--      <v-spacer/>-->
<!--      <v-card flat color="transparent" max-width="42%">-->
<!--        <v-card-title class="display-1">-->
<!--          Achievement Util Uni Freiburg-->
<!--        </v-card-title>-->
<!--        <v-card-text class="subtitle-1">-->
<!--          Together <a href="https://github.com/moehritz" target="_blank" style="color:white; text-decoration: none;">a good friend</a>-->
<!--          and I created-->
<!--          the website <a href="https://kalenderdesscheiterns.de"  target="_blank" style="color:white; text-decoration: none;">kalenderdesscheiterns.de</a>-->
<!--          for comedian and member of the European Parlament <a href="https://nicosemsrott.eu/" target="_blank"-->
<!--                                                               style="color:white; text-decoration: none;">Nico-->
<!--          Semsrott</a>.-->
<!--          The calender is now finished and can be found <a-->
<!--            target="_blank"-->
<!--            href="https://shop.sea-watch.org/Kalender-des-Scheiterns-2-von-Nico-Semsrott"-->
<!--            style="color:white; text-decoration: none;">here</a>.-->
<!--        </v-card-text>-->
<!--      </v-card>-->
<!--      <v-img alt="Image of me" src="@/assets/kds.png" transition max-width="170" max-height="260"-->
<!--             class="rounded-xl mr-5"></v-img>-->
<!--      <v-spacer/>-->
<!--    </v-container>-->
<!--    <div style="height: 40px"></div>-->
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
