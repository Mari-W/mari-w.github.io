<template>
  <div class="pa-0 ma-0" :style="'background-color:'+ color">
    <div style="height: 20px"></div>
    <v-container id="projects" fill-height fluid class="pa-0">
      <v-spacer/>
      <span class="display-3">Projects I Could Finish</span>
      <v-spacer/>
    </v-container>
    <div style="height: 100px"></div>
    <v-container fill-height fluid class="pa-0">
      <v-spacer/>
      <v-spacer/>
      <v-img src="@/assets/kds.png" transition max-width="220" max-height="350"
             class="rounded-xl"></v-img>
      <v-spacer/>
      <v-card flat color="transparent" max-width="35%">

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
            style="color:white; text-decoration: none;">here</a>. Besides that the source can be found <a
            href="https://github.com/Mari-W/kds" target="_blank"
            style="color:white; text-decoration: none;">on GitHub</a>.
        </v-card-text>
      </v-card>
      <v-spacer/>
      <v-spacer/>
    </v-container>
    <div style="height: 60px"></div>
    <v-divider/>
    <div style="height: 60px"></div>
    <v-container id="projects" fill-height fluid class="pa-0">
      <v-spacer/>
      <v-spacer/>
      <v-card flat color="transparent" max-width="35%">
        <v-card-title class="display-2">
          Small but Cool
        </v-card-title>
        <v-card-text class="title">
          Because I cannot decide what to put here, have a look at other projects; For example my app to
          instantly see <a href="https://github.com/Mari-W/whos_home" target="_blank"
                           style="color:white; text-decoration: none;">who's currently home</a> or how i build the <a
            href="https://github.com/Mari-W/mnist_network" target="_blank"
            style="color:white; text-decoration: none;">hello world of neural networks</a> only using numpy.
          You might want to have a look at the <a href="https://github.com/Mari-W/unif-util" target="_blank"
                                                  style="color:white; text-decoration: none;">multiplatform utility for
          my university</a> accessible through browser and as native Linux, Mac and Windows Apps.
        </v-card-text>
      </v-card>
      <v-spacer/>
      <v-img src="@/assets/github.png" transition max-width="365" max-height="365"
             class="rounded-lg "></v-img>
      <v-spacer/>
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
