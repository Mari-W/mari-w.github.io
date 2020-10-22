<template>
  <div class="pa-0 ma-0" style="min-height: 780px">
    <div style="height: 100px"></div>
    <v-container id="about" fill-height fluid class="pa-0">
      <v-spacer/>
      <v-img src="@/assets/picture.png" max-width="340" max-height="430"
             class="rounded-xl ml-xl-12"></v-img>
      <v-spacer/>
      <v-card flat color="transparent" max-width="45%">
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
        <v-divider class="ml-4"/>
        <v-row class="mt-n2 ml-1">
          <v-col>
            <v-row>
              <v-card-subtitle class="headline white--text">
                <v-btn
                    icon
                    @click="languages = !languages"
                >
                  <v-icon>{{ languages ? 'mdi-arrow-up' : 'mdi-arrow-down' }}</v-icon>
                </v-btn>
                Programming Languages

              </v-card-subtitle>
            </v-row>
            <v-divider v-if="languages"/>
            <v-card-text class="title" v-if="languages">
              <strong>- Kotlin <br>
                - Python <br>
                - JavaScript</strong> <br>
              - Dart <br>
              - Rust <br>
              - C++ <br>
              - Java <br>
            </v-card-text>
          </v-col>
          <v-divider vertical class="mt-2" v-if="frameworks && languages"/>
          <v-col>
            <v-card-subtitle class="headline white--text">
              <v-btn
                  icon
                  class="ml-n3"
                  @click="frameworks = !frameworks"
              >
                <v-icon>{{ frameworks ? 'mdi-arrow-up' : 'mdi-arrow-down' }}</v-icon>
              </v-btn>
              Frameworks and Tools
            </v-card-subtitle>
            <v-divider v-if="frameworks"/>
            <v-card-text class="title" v-if="frameworks">
              <strong>- Ktor <br>
                - VueJS <br>
                - Flutter <br>
                - MongoDB <br>
                - MySQL </strong> <br>
              - Tensorflow <br>
              - Selenium <br>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>
      <v-spacer/>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "About",
  props: ['color'],
  data: () => ({
    languages: false,
    frameworks: false
  }),
  mounted() {
    if (this.$route.params.section !== undefined) {
      if (this.$route.params.section.toLowerCase() === 'extend') {
        this.languages = true
        this.frameworks = true
      }
    }
  }
}
</script>

<style scoped>

</style>
